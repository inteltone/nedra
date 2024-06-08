<script setup>
const headItems = ref(['Марка','Модель','Модификация','Год','Рынок','Двигатель','Номер двигателя','КПП','Цвет кузова'])
</script>
<template>	
	<div class="search-vin-table__head">
		<span v-for="item in headItems">{{item}}</span>					
	</div>	
</template>