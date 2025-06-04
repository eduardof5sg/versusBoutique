<script>
    let isOpen = false;
  </script>
  
  <nav class="bg-purple-300 px-4 py-3 shadow-md">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <button class="md:hidden text-white" on:click={() => isOpen = !isOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div class="text-xl font-bold text-white">Versus Moda</div>
  
      <!-- Menú Desktop -->
      <div class="hidden md:flex gap-6 text-white font-medium">
        <a href="/" class="hover:underline">Inicio</a>
        <a href="/productos" class="hover:underline">Productos</a>
        <a href="/contacto" class="hover:underline">Contacto</a>
      </div>
  
      <!-- Botón hamburguesa -->
      
    </div>
  
    <!-- Menú móvil -->
    {#if isOpen}
      <div class="md:hidden mt-2 flex flex-col gap-2 text-white font-medium px-4">
        <a href="/" class="hover:underline">Inicio</a>
        <a href="/productos" class="hover:underline">Productos</a>
        <a href="/contacto" class="hover:underline">Contacto</a>
      </div>
    {/if}
  </nav>
  