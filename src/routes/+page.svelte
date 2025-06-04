<script>
    import "../app.css"
    import { goto } from "$app/navigation"
    const video = '/video/boutique.mp4'
    const logo = '/images/logoversus.png'
</script>
<main class="relative">
    <video class="h-[100vh] w-[100%] object-cover brightness-50 " autoplay mmuted loop playsinline src={video}></video>
    <img class="absolute top-1/5 mt-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[650px]" src={logo} alt="logo">
    
    <button on:click={() =>goto('productos')} class="w-[200px] absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-200 p-4 rounded-lg shadow-lg text-black font-semibold hover:bg-gray-200 transition">
        Explorar
      </button>
    
</main>