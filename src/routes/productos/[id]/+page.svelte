<script>
	import "../../../app.css";
	import { page } from '$app/stores';
	import axiosCategory from '$lib/endpoints/categorys';
	import NavBar from "$lib/components/navBar.svelte";

	let id;
	let products = [];
	let selectedProduct = null;
	let detailModal = false;
	let messageError = '';

	// Obtener el ID desde la URL (id = nombre de categoría)
	$: id = $page.params.id;

	// Mapeo de nombres de categorías por ID
	const categoryNames = {
		'6838edc3aeb3e70a331d3b25': 'Vestidos',
		'6841601882013d5a626eaf1d': 'Faldas',
		'6841680282013d5a626eaf24': 'Pantalones' // ejemplo adicional
	};

	// Título de categoría
	$: categoryTitle = categoryNames[id] || 'Productos';

	// Cargar productos cada vez que cambia el ID
	$: if (id) {
		loadProducts();
	}

	// Función para cargar productos
	async function loadProducts() {
		try {
			const response = await axiosCategory.get(`/${id}`);
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
</script>


<main>
    <NavBar />
    <div class="mt-2">
      <h1 class="text-4xl text-center font-bold text-purple-400">{categoryTitle}</h1>
  </div>
    <div>
      {#if messageError}
		<p class="text-red-600">{messageError}</p>
	{:else if products.length === 0}
		<p>No hay productos en esta categoría.</p>
	{:else}
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 mt-2">
        {#each products as product}
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
              <p class="text-ml font-bold text-purple-400">{product.price} EUR</p>
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
          <p class="text-purple-600 text-2xl font-bold mb-4">{selectedProduct.price} €</p>
          </div>
          
          <div class="space-y-4 p-1 max-w-md mx-auto mb-4">

            <h2 class="font-bold text-2xl text-gray-700">Detalles</h2>
            <!-- Botón 1 -->
            <div>
              <button on:click={() => toggleSection('section1')} class="text-purple-400 font-bold">Materiales ⏷ </button>
              <div id="section1" class="hidden mt-2 text-sm text-gray-700">
                {selectedProduct.material}
              </div>
            </div>
            <hr class="border-t-2 border-purple-600 my-4">
            <!-- Botón 2 -->
            <div>
              <button on:click={() => toggleSection('section2')} class="text-purple-400 font-bold">Estampado ⏷</button>
              <div id="section2" class="hidden mt-2 text-sm text-gray-700">
               {selectedProduct.print}
              </div>
            </div>
          </div>
          
      
          <div class="space-y-4">
            {#each selectedProduct.colors as color}
              <div class="border rounded-lg p-3 bg-gray-50">
                <p class="font-semibold text-gray-700 mb-1 flex items-center gap-2">
                  <span
                    class="w-12 h-4 rounded-full border border-gray-300"
                    style="background-color: {color.color};"
                  ></span>
                  
                </p>
      
                <div class="grid grid-cols-2 gap-2 text-sm text-gray-800 mt-2">
                  <div class="font-semibold text-purple-600">Talla</div>
                  <div class="font-semibold text-purple-600">Estado</div>
      
                  {#each color.stock as s}
                    <div class="font-bold text-ml">{s.size}</div>
                    <div class="{s.quantity > 0 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}">
                      {s.quantity > 0 ? 'Disponible' : 'Agotado'}
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
	
</main>
