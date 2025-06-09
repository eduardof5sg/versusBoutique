<script>
  let isOpen = false;
  let showDropdown = false;

  
</script>

<nav class="bg-purple-300 px-4 py-3 shadow-md relative">
  <div class="max-w-7xl mx-auto flex items-center justify-between">
    <!-- Botón hamburguesa -->
    <button class="md:hidden text-white" on:click={() => isOpen = !isOpen}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <div class="text-xl font-bold text-white">Versus Moda</div>

    <!-- Menú Desktop -->
    <div class="hidden md:flex gap-6 text-white font-medium items-center relative">
      <a href="/" class="hover:underline">Inicio</a>
      <a href="/newcollection" class="hover:underline">Nueva Coleccion</a>
      <a href="/productos" class="hover:underline">Categorias</a>
      <a href="/accesorios" class="hover:underline">Accesorios</a>
      <!-- Dropdown Productos -->
      <div class="relative" on:mouseenter={() => showDropdown = true} on:mouseleave={() => showDropdown = false}>
        <button class="hover:underline">Productos</button>
        {#if showDropdown}
          <div class="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-md z-20">
            {#each categories as category}
              <a
                href={`/productos/${category.id}`}
                class="block px-4 py-2 text-sm text-gray-800 hover:bg-purple-100"
              >
                {category.name}
              </a>
            {/each}
          </div>
        {/if}
      </div>

      <a href="/aboutus" class="hover:underline">Sobre nosotros</a>
    </div>
  </div>

  <!-- Menú móvil -->
  {#if isOpen}
    <div class="md:hidden mt-2 flex flex-col gap-2 text-white font-medium px-2">
      <a href="/" class="hover:underline">Inicio</a>
      <a
        href="/newcollection"
        class="w-48 font-bold text-[18px] text-white hover:text-yellow-300 transition duration-300 ease-in-out animate-pulse"
      >
        Nueva Colección ⭐
      </a>
      <a href="/productos" class="hover:underline">Categorias</a>
      <a href="/accesorios" class="hover:underline">Accesorios</a>
      <a href="/aboutus" class="hover:underline">Sobre nosotros</a>
      <a href="/ofertas" class="hover:underline text-red-500 font-bold">Ofertas %</a>

      
    </div>
  {/if}
</nav>

  