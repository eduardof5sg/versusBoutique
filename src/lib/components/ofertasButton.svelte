<script>
    import { goto } from "$app/navigation";
</script>
<main>
    <div class="fixed top-[80vh] left-[68%] z-50 ">
        <button class="w-20 h-20 p-3 rounded-full bg-green-600 text-white font-bold pulse-button" on:click={() =>goto('/ofertas')}>Ofertas</button>
    </div>
</main>
<style>
    @keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); /* verde como bg-green-600 */
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
}

.pulse-button {
    animation: pulse 1.5s infinite;
  }
</style>