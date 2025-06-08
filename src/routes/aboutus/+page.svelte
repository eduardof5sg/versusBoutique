<script>
  let iconos = "/images/iconos.png";
  import NavBar from "$lib/components/navBar.svelte";
</script>

<main>
    <NavBar />
    <div class="p-3">
       <h1 class="text-4xl font-bold text-purple-400 text-center">Sobre nosotros</h1>
        <p class="mt-2 text-gray-600 p-4">
            En VersusModa, llevamos más de cuatro décadas vistiendo con elegancia y
            calidad a generaciones de familias. Somos una empresa familiar fundada con
            pasión por la moda y un firme compromiso con el trabajo bien hecho. Desde
            nuestros inicios, hemos creído que vestir bien no es una cuestión de moda
            pasajera, sino de identidad, estilo y respeto por uno mismo. Ubicados en el
            corazón de Carabanchel (Madrid) Somos esa boutique de toda la vida, donde nuestros
            clientes no son números, sino vecinos, amigas, madres e hijas que confían en
            nosotros generación tras generación. Trabajamos con las mejores telas y proveedores de
            confianza para asegurar que cada prenda que entra en nuestra tienda cumpla
            con altos estándares de calidad. Cada pieza que ofrecemos ha sido
            seleccionada con un criterio profesional y una mirada experta, fruto de años
            de experiencia en el sector textil. En VersusModa creemos en el valor de lo
            auténtico. Apostamos por prendas que duran, que se sienten bien al llevarlas
            y que reflejan un estilo cuidado, femenino y atemporal. Porque para
            nosotros, vestir bien nunca pasará de moda.
       </p> 
    </div>
    <div>
        <h2 class="text-2xl font bold text-purple-400 text-center">Especialidades</h2>
        <hr class="border-t-2 border-purple-200 my-4">
        <img src={iconos} alt="iconos">
    </div>
</main>
