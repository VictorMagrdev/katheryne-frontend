<script>
	import Card from './../../lib/components/card.svelte';
	export let data;
</script>

<h1>Orders</h1>

<ul>
	{#each data.summaries as order}
		<Card 
			title = {order.title} 
			id = {order.id} 
			category = {order.category} 
			description = {order.description} 
			/>
	{/each}
</ul>

<style>
	ul{
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
		grid-gap: 20px;
	}
</style>