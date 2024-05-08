<script>
    export let title;
    export let category;
    export let description;
    export let id;
</script>

<style>
    .card {
        text-decoration: none;
        color: inherit;
        background-color: white;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .title {
        font-weight: bold;
    }
    .category {
        margin: 10px 0;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
</style>

<a class="card" href="/orders/{id}">
    <div class="title" >{title}</div>
    <p>{description}</p>
    <div class="category">{category}</div>
</a>