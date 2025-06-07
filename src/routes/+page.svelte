<script>
    import "../app.css"
    import { goto } from "$app/navigation"
    const video = '/video/boutique.mp4'
    const logo = '/images/logoversus.png'
</script>
<main class="relative">
    <video class="h-[100vh] w-[100%] object-cover brightness-50 p-1 bg-black  rounded-sm " autoplay muted loop playsinline src={video}></video>
    <img class="absolute top-1/4  left-[77%] transform -translate-x-1/2 -translate-y-1/2 w-[200px] " src={logo} alt="logo">
    
    <button on:click={() =>goto('productos')} class="w-[200px] absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white opacity-80 p-4 rounded-lg shadow-lg text-purple-600 font-bold hover:bg-gray-200 transition">
        Catálogo
    </button>
    <p class="absolute text-2xl top-3/4 left-[50%] text-purple-200 text-center  transform -translate-x-1/2 -translate-y-1/2">"Votre élégance, notre passion"</p>
</main>