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
    <div class="modal" on:click={closeModal}>
        <div class="modal-content" on:click|stopPropagation>
            <button class="close-btn" on:click={closeModal}>&times;</button>
            <h2>Register</h2>
            <form method="POST" action="/page">
                <label for="username">Username</label>
                <input type="text" id="username" required>
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" required>
                <label for="apellido">Apellido</label>
                <input type="text" id="apellido" required>
                <label for="correo">Correo Electrónico</label>
                <input type="email" id="correo" required>
                <label for="telefono">Teléfono</label>
                <input type="tel" id="telefono">
                <label for="password">Contraseña</label>
                <input type="password" id="password" required>
                <button type="submit">Register</button>
            </form>
        </div>
    </div>
{/if}

<style>
    .modal {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-content {
        background-color: #fefefe;
        padding: 10px;
        border: 1px solid #888;
        width: 80%;
        max-width: 300px;
        position: relative;
    }

    .modal-content h2 {
        margin-top: 0;
        font-size: 1.2em;
    }

    .modal-content form {
        display: flex;
        flex-direction: column;
    }

    .modal-content label {
        margin-top: 5px;
        font-size: 0.9em;
    }

    .modal-content input {
        margin-bottom: 5px;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: calc(100% - 12px);
    }

    .modal-content button[type="submit"] {
        margin-top: 10px;
        padding: 8px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9em;
    }

    .modal-content button[type="submit"]:hover {
        background-color: #45a049;
    }

    .close-btn {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: transparent;
        border: none;
        font-size: 1.2em;
        cursor: pointer;
    }
</style>