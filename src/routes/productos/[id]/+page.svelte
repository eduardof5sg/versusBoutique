<script>
    import "../../../app.css"
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import axiosCategory from '$lib/endpoints/categorys';
    import NavBar from "$lib/components/navBar.svelte";

	let id;
	let products = [];
    let selectedProduct = null;
    let detailModal = false;
	let messageError = '';

	// Obtener el ID desde la URL (id = nombre de categoría)
	$: id = $page.params.id;

	onMount(async () => {
		try {
			const response = await axiosCategory.get(`/${id}`);
			products = response.data;
            console.log(products)
		} catch (error) {
			messageError = error.message;
		}
	});

    function openDetailModal(product){
        selectedProduct = product;
        detailModal= true;
    }

    function closeDetailModal (){
        selectedProduct = null ;
        detailModal = false;
    }
</script>

<main>
    <NavBar />
    <div class="mt-6">
        <h1 class="text-4xl text-center text-green-400">Vestidos</h1>
    </div>
    <div>
      {#if messageError}
		<p class="text-red-600">{messageError}</p>
	{:else if products.length === 0}
		<p>No hay productos en esta categoría.</p>
	{:else}
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {#each products as product}
          <div
            class="bg-white shadow-md rounded-2xl overflow-hidden w-full cursor-pointer"
            on:click={() => openDetailModal(product)}>
            <img
              src={product.images[0]}
              alt={product.name}
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-lg font-semibold mb-2">{product.name}</h2>
              <p class="text-gray-600 text-sm mb-2 truncate">{product.description}</p>
              <p class="text-xl font-bold text-green-300">{product.price} €</p>
            </div>
          </div>
        {/each}
      </div>
      {#if detailModal}
      <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50  overflow-y-auto">
        <div class="bg-white rounded-xl max-w-md w-full p-6 relative mt-32 ">
          <button on:click={closeDetailModal} class="absolute w-12 h-12 bg-green-300 p-2 rounded-full top-6 right-8 text-white hover:text-black text-3xl">
            X
          </button>
    
          <img src={selectedProduct.images[0]} alt={selectedProduct.name} class="w-full  object-cover rounded-md mb-4" />
    
          <h2 class="text-2xl font-bold mb-2 text-green-400 text-center">{selectedProduct.name}</h2>
          <p class="text-gray-700 mb-2">{selectedProduct.description}</p>
          <p class="text-green-300 text-2xl font-bold mb-4">{selectedProduct.price} €</p>
    
          <h3 class="font-semibold mb-2">Colores, tallas y stock:</h3>

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
                    <div class="font-semibold">Talla</div>
                    
                    <div class="font-semibold">Estado</div>

                    {#each color.stock as s}
                    <div>{s.size}</div>
                    
                    <div>{s.quantity > 0 ? 'Disponible' : 'Agotado'}</div>
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
