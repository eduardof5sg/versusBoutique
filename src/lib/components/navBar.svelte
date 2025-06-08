<script>
  let isOpen = false;
  let showDropdown = false;

  const categories = [
    { name: 'Vestidos', id: '6838edc3aeb3e70a331d3b25' },
    { name: 'Faldas', id: '6841601882013d5a626eaf1d' },
    { name: 'Pantalones', id: '6841680282013d5a626eaf24' } // ejemplo
  ];
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
      <a href="/newcollection" class="hover:underline text-purple-700 text-[18px] w-36 font-bold">Nueva Coleccion</a>
      <a href="/productos" class="hover:underline">Categorias</a>
      <!-- Productos con submenú -->
      <details class="group">
        <summary class=" hover:underline">Productos</summary>
        <div class="ml-4 mt-1 flex flex-col gap-1 text-purple-700">
          {#each categories as category}
            <a href={`/productos/${category.id}`} class="hover:underline text-sm bg-white rounded-xl p-2 w-32">{category.name}</a>
          {/each}
        </div>
      </details>

      <a href="/aboutus" class="hover:underline">Sobre nosotros</a>
    </div>
  {/if}
</nav>

  