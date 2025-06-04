<script>
    import NavBar from '$lib/components/navBar.svelte';
    import { goto } from '$app/navigation';
    import "../../app.css"
    const vestidosId = '6838edc3aeb3e70a331d3b25';
    const vestidos = '/images/vestidos.jpg';
  </script>
  <main>
    <NavBar />
    <div class="mt-2">
      <div
    class="relative h-[200px] cursor-pointer "
    on:click={() => goto(`/productos/${vestidosId}`)}>
    <img
      src={vestidos}
      alt="vestidos"
      class="w-full h-full object-cover brightness-90" />
    <h2
      class="absolute top-1/2 mt-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] text-white text-center text-6xl font-bold">
      Vestidos
    </h2>
  </div>  
    </div>
    
  </main>
  
  