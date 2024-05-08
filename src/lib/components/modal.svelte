<script>
    import { writable } from 'svelte/store';

    export const modalOpen = writable(false);

    function openModal() {
        modalOpen.set(true);
    }

    function closeModal() {
        modalOpen.set(false);
    }
</script>

<button on:click={openModal}>Abrir Modal</button>

{#if $modalOpen}
    <button class="modal" on:click={closeModal} on:click|stopPropagation>
        <div class="modal-content" >
            <h2>Modal Title</h2>
            <p>Modal Content</p>
            <button on:click={closeModal}>Cerrar</button>
        </div>
    </button>
{/if}

<style>
    .modal {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.4);
    }

    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }
</style>
