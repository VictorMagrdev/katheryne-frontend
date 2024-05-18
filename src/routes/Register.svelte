<script>
    import { writable } from 'svelte/store';
	import { redirect } from '@sveltejs/kit';

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
    <div class="modal">
        <div class="modal-content">
            <button class="close-btn" on:click={closeModal}>&times;</button>
            <h2>Register</h2>
            <form method="POST" action={closeModal}>
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
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        max-width: 400px;
        position: relative;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .modal-content h2 {
        margin-top: 0;
        font-size: 1.5em;
        margin-bottom: 15px;
    }

    .modal-content form {
        display: flex;
        flex-direction: column;
    }

    .modal-content label {
        margin-top: 10px;
        font-size: 1em;
    }

    .modal-content input {
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: calc(100% - 22px);
        font-size: 1em;
    }

    .modal-content button[type="submit"] {
        margin-top: 15px;
        padding: 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1em;
    }

    .modal-content button[type="submit"]:hover {
        background-color: #45a049;
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: transparent;
        border: none;
        font-size: 1.5em;
        cursor: pointer;
    }
</style>