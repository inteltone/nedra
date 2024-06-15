<script setup>
const isCatalogDrop = useCatalogDrop()
const catItems = ref([
	{title: 'Запчасти', img: 'spares-cat'},
	{title: 'Запчасти для ТО', img: 'spares-to-cat'},
	{title: 'Аккумуляторы', img: 'batteries-cat'},
	{title: 'Масла', img: 'oils-cat'},
	{title: 'Диски', img: 'tires-wheels-cat'},
	{title: 'Автосвет', img: 'autolight-cat'},
])
onMounted(() => {
	// закрытие выпадашки для показа каталогов из хэдера
	let drop = document.querySelector('.cat-drop')
	window.addEventListener('click', (e) => {
		const dialogDimensions = drop.getBoundingClientRect()
		if (
			e.clientX < dialogDimensions.left ||
			e.clientX > dialogDimensions.right ||
			e.clientY < dialogDimensions.top ||
			e.clientY > dialogDimensions.bottom
		) {
			isCatalogDrop.value = false
		}
	})
})
</script>
<template>
	<div class="cat-drop" :class="{active: isCatalogDrop}">
		<NuxtLink to="/" class="cat-drop__item" v-for="item,index in catItems" :key="item.title">
			<p class="cat-drop__item-title">{{item.title}}</p>
			<div class="cat-drop__item-img">
				<img :src="`/images/catalogs/${item.img}.png`" alt="">
			</div>			
		</NuxtLink>
	</div>
</template>