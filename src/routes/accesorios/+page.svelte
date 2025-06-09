<script>
	import "../../app.css"
	import { page } from '$app/stores';
    import { onMount } from "svelte";
  import { goto } from "$app/navigation";
	import axiosCategory from '$lib/endpoints/categorys';
	import NavBar from "$lib/components/navBar.svelte";
  import OfertasButton from "$lib/components/ofertasButton.svelte";

	let accesoriosId = '684753c7fc07cb227ca9505a'
	let products = [];
	let selectedProduct = null;
	let detailModal = false;
	let messageError = '';

  let selectedColor = '';
  let selectedSeason = '';
  let selectedSize = '';
  let maxPrice = '';

	// Obtener el ID desde la URL (id = nombre de categoría)
	$: id = $page.params.id;
  $: uniqueColors = Array.from(new Set(
  products.flatMap(p => p.colors?.map(c => c.color)).filter(Boolean)
));
$: uniqueSizes = Array.from(
    new Set(
      products.flatMap(product =>
        product.colors?.flatMap(color =>
          color.stock?.map(s => s.size)
        ) ?? []
      )
    )
  ).sort(); // Opcional: ordena las tallas

$: filteredProducts = products.filter(p => {
  const matchesColor = selectedColor
    ? p.colors?.some(c => c.color === selectedColor)
    : true;

  const matchesSeason = selectedSeason
    ? p.season === selectedSeason
    : true;

  const matchesPrice = maxPrice
    ? parseFloat(p.price) <= parseFloat(maxPrice)
    : true;

    const matchesSize = selectedSize
    ? p.colors?.some(c =>
        c.stock?.some(s => s.size === selectedSize && s.quantity > 0)
      )
    : true;

  return matchesColor && matchesSeason && matchesPrice && matchesSize;
});
	
	

	// Función para cargar productos
	async function loadProducts() {
		try {
			const response = await axiosCategory.get(`/${accesoriosId}`);
			products = response.data;
            
			messageError = '';
		} catch (error) {
			messageError = error.message;
		}
	}

	// Modal
	function openDetailModal(product) {
		selectedProduct = product;
		detailModal = true;
	}

	function closeDetailModal() {
		selectedProduct = null;
		detailModal = false;
	}

  function toggleSection(id) {
    const el = document.getElementById(id);
    el.classList.toggle("hidden");
  }

  onMount(() =>loadProducts())

  
</script>


<main>
    <NavBar />

    <div class="rounded-xl p-2 flex overflow-x-auto scrollbar-hide gap-4 sm:justify-start">



      <!-- Color -->
      <div class="flex flex-row items-center">
        <label class="block font-semibold text-purple-500 p-1">Color:</label>
        <select bind:value={selectedColor} class="rounded p-1">
          <option value="">Todos</option>
          {#each uniqueColors as color}
            <option value={color}>{color}</option>
          {/each}
        </select>
      </div>
    
      <!-- Temporada -->
      <div class="flex flex-row items-center">
        <label class="block font-semibold text-purple-500 ">Temporada:</label>
        <select bind:value={selectedSeason} class="rounded p-1">
          <option value="">Todas</option>
          <option value="Verano">Verano</option>
          <option value="Invierno">Invierno</option>
          <option value="Primavera">Primavera</option>
          <option value="Otoño">Otoño</option>
        </select>
      </div>
      <div class="flex flex-row items-center">
        <label class="block font-semibold text-purple-500 ">Talla:</label>
        <select bind:value={selectedSize} class="rounded p-1">
          <option value="">Todas</option>
          {#each uniqueSizes as size}
            <option value={size}>{size}</option>
          {/each}
        </select>
      </div>
    
      <!-- Precio -->
      <div class="flex flex-col gap-1 mb-4">
      <label class="block font-semibold text-purple-500"> {maxPrice}€</label>
      <input
        type="range"
        min="5"
        max="200"
        step="1"
        bind:value={maxPrice}
        class="w-[90px] accent-purple-400"
      />
      </div>
    
    </div>
    <div >
      <h1 class="text-4xl  font-bold text-purple-400 p-2">Accesorios</h1>
  </div>
    <div class="relative">
      {#if messageError}
		<p class="text-red-600">{messageError}</p>
	{:else if products.length === 0}
		<p class="p-2 text-xl">Aún hay productos para esta categoría.</p>
	{:else}
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2 mt-2">
        {#each filteredProducts as product}
          <div
            class="bg-white shadow-md rounded-2xl overflow-hidden w-full cursor-pointer"
            on:click={() => openDetailModal(product)}>
            <img
              src={product.images[0]}
              alt={product.name}
              class="w-full h-48 object-cover"
            />
            <div class="p-1">
              <h2 class="text-sm w-full font-semibold ">{product.name}</h2>
              {#if product.inoffer}
                <p class="text-ml font-bold text-red-500 line-through">{product.price} EUR</p>
                <p class="text-ml font-bold text-purple-400">{product.offerprice} EUR</p>
                {:else}
                <p class="text-ml font-bold text-purple-400">{product.price} EUR</p>
                {/if}
            </div>
          </div>
        {/each}
      </div>
      {#if detailModal}
      <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-auto p-4">
        <div class="bg-white rounded-xl w-full max-w-xl p-2 relative overflow-y-auto max-h-[90vh]">
          
          <button
            on:click={closeDetailModal}
            class="absolute w-10 h-10 bg-purple-300 p-1.5 rounded-full top-4 right-4 text-white hover:text-black text-xl flex items-center justify-center"
            aria-label="Cerrar"
          >
            ✕
          </button>
      
          <img
            src={selectedProduct.images[0]}
            alt={selectedProduct.name}
            class="w-full object-cover rounded-md mb-4 h-full"
          />
          <div class="p-1">
            <h2 class="text-2xl font-bold mb-2 text-purple-400  ">{selectedProduct.name}</h2>
          <p class="text-gray-700 mb-2">{selectedProduct.description}</p>
          {#if selectedProduct.inoffer}
          <p class="text-ml font-bold text-red-500 line-through">{selectedProduct.price} EUR</p>
          <p class="text-ml font-bold text-purple-400">{selectedProduct.offerprice} EUR</p>
          {:else}
          <p class="text-ml font-bold text-purple-400">{selectedProduct.price} EUR</p>
          {/if}
          </div>
          
          <div class="space-y-4 p-1 max-w-md mx-auto mb-4">

            <h2 class="font-bold text-2xl text-gray-500">Detalles</h2>
            <!-- Botón 1 -->
            <div>
              <button on:click={() => toggleSection('section1')} class="text-purple-400 font-bold">Materiales ▼ </button>
              <div id="section1" class="hidden mt-2 text-ml text-gray-700 font-bold">
                {selectedProduct.material}
              </div>
            </div>
            <hr class="border-t-2 border-purple-200 my-4">
            <div>
                <button on:click={() => toggleSection('section2')} class="text-purple-400 font-bold">Temporada ▼ </button>
                <div id="section2" class="hidden mt-2 text-ml text-gray-700 font-bold">
                  {selectedProduct.season}
                </div>
            </div>
              <hr class="border-t-2 border-purple-200 my-4">
            <!-- Botón 2 -->
            <div>
              <button on:click={() => toggleSection('section3')} class="text-purple-400 font-bold">Estampado ▼</button>
              <div id="section3" class="hidden mt-2 text-ml text-gray-700 font-bold">
               {selectedProduct.print}
              </div>
            </div>
          </div>
          
      
          <div class="space-y-4">
            {#each selectedProduct.colors as color}
              <div class="shadow-xl rounded-lg p-2 bg-gray-100 flex flex-row items-center gap-6">
                <p class="font-semibold text-gray-700 mb-1 flex items-center gap-2">
                  <span
                    class="w-6 h-6 rounded-full border border-gray-300 mt-3"
                    style="background-color: {color.color};"
                  ></span>
                  
                </p>
      
                <div class="flex flex-row gap-12 text-2xl text-gray-800 mt-2">
                    {#each color.stock as s}
                      <div class="{s.quantity > 0 
                                    ? 'text-green-600 font-semibold' 
                                    : 'text-red-600 font-semibold line-through'}">
                        {s.size}
                      </div>
                    {/each}
                  </div>
              </div>
            {/each}
          </div>
      
        </div>
      </div>
      
    {/if}
    
	{/if}  
    </div>
	<OfertasButton />
</main>
