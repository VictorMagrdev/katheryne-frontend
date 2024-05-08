<script>
    import { onMount } from 'svelte';

    let isOpen = false;
    let dropdown;

    onMount(() => {
        const handleClickOutside = (event) => {
        if (dropdown && !dropdown.contains(event.target)) {
            isOpen = false;
        }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
        document.removeEventListener('click', handleClickOutside);
        };
    });
</script>

<div bind:this={dropdown}>
    <button class="dropdown" on:click={() => isOpen = !isOpen}>
        Menú
    </button>

    {#if isOpen}
        <div class="dropdown-menu">
            <a href="/">Opción 1</a>
            <a href="/">Opción 2</a>
            <a href="/">Opción 3</a>
        </div>
    {/if}
</div>


<style>
    .dropdown {
        position: relative;
        background-color: rgba(255, 255, 255, 0.7);
        border: none;
        margin: 10px;
    }
    .dropdown:hover {
        color: var(--color-theme-1);
    }

    .dropdown-menu {
        display: block;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.7);
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        z-index: 1;
        right: 0;
        margin: 10px;
    }

    .dropdown-menu a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
    .dropdown-menu a:hover {
            color: var(--color-theme-1);
    }
</style>
