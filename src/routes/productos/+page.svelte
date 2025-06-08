<script>
    import NavBar from '$lib/components/navBar.svelte';
    import { goto } from '$app/navigation';
    import "../../app.css"
    const vestidosId = '6838edc3aeb3e70a331d3b25';
    const faldasId = '6841601882013d5a626eaf1d';
    const pantalonesId = '6841680282013d5a626eaf24';
    const vestidos = '/images/vestidos.jpg';
    const faldas = '/images/faldas.jpg';
    const pantalones = '/images/pantalones.jpg'
    const coleccion = '/video/coleccion.mp4'
  </script>
  <main class="bg-purple-200">
    <NavBar />
    <div class="mt-2 ">
      <div
    class="relative h-[200px] cursor-pointer "
    on:click={() => goto('/newcollection')}>
    <video  class="object-cover brightness-75   rounded-sm " autoplay muted loop src={coleccion}></video>
    <h2
      class="absolute top-1/2 mt-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] text-white text-center text-6xl font-bold">
      New Collection
    </h2>
     </div>  
    </div>
    <div class="mt-2 ">
      <div
    class="relative h-[200px] cursor-pointer "
    on:click={() => goto(`/productos/${vestidosId}`)}>
    <img
      src={vestidos}
      alt="vestidos"
      class="w-full h-full object-cover brightness-90 " />
    <h2
      class="absolute top-1/2 mt-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] text-white text-center text-6xl font-bold">
      Vestidos
    </h2>
     </div>  
    </div>
    <div class="mt-2">
      <div
    class="relative h-[200px] cursor-pointer "
    on:click={() => goto(`/productos/${faldasId}`)}>
    <img
      src={faldas}
      alt="faldas"
      class="w-full h-full object-cover brightness-50 " />
    <h2
      class="absolute top-1/2 mt-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] text-white text-center text-6xl font-bold">
      Faldas
    </h2>
     </div>  
    </div>
    <div class="mt-2">
      <div
    class="relative h-[200px] cursor-pointer "
    on:click={() => goto(`/productos/${pantalonesId}`)}>
    <img
      src={pantalones}
      alt="pantalones"
      class="w-full h-full object-cover brightness-50 " />
    <h2
      class="absolute top-1/2 mt-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] text-white text-center text-6xl font-bold">
      Pantalones
    </h2>
     </div>  
    </div>
    
  </main>
  
  