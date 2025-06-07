<script>
    import '../../app.css';
    import axiosProducts from '$lib/endpoints/newCollection';
    import { onMount } from 'svelte';
    import NavBar from '$lib/components/navBar.svelte';
    let newProducts = [];
    let selectedProduct = null;
	let detailModal = false;

    async function loadNewCollection(){
        try {
            const response = await axiosProducts.get('/newcollection');
            newProducts = response.data.newProduct
            console.log(newProducts)
        } catch (error) {
            throw error
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

    onMount(() =>loadNewCollection() )
</script>
<main>
    <NavBar />
    <div class="mt-2">
        <h1 class="text-4xl text-center font-bold text-purple-400">Nueva colección</h1>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 mt-2">
        {#each newProducts as product}
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
          <p class="text-purple-500 text-2xl font-bold mb-4">{selectedProduct.price} €</p>
          </div>
          
          <div class="space-y-4 p-1 max-w-md mx-auto mb-4">

            <h2 class="font-bold text-2xl text-gray-500">Detalles</h2>
            <!-- Botón 1 -->
            <div>
              <button on:click={() => toggleSection('section1')} class="text-purple-400 font-bold">Materiales ▼</button>
              <div id="section1" class="hidden mt-2 text-sm text-gray-700">
                {selectedProduct.material}
              </div>
            </div>
            <hr class="border-t-2 border-purple-200 my-4">
            <!-- Botón 2 -->
            <div>
              <button on:click={() => toggleSection('section2')} class="text-purple-400 font-bold">Estampado ▼</button>
              <div id="section2" class="hidden mt-2 text-sm text-gray-700">
               {selectedProduct.print}
              </div>
            </div>
          </div>
          
      
          <div class="space-y-4">
            {#each selectedProduct.colors as color}
              <div class="border rounded-lg p-2 bg-gray-50 flex flex-row items-center gap-6">
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
</main>