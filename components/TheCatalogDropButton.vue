<script setup>
// показ выпадашки для перехода в каталоги из хэдера
const isCatalogDrop = useCatalogDrop()
function showCatalogDrop() {
	if (isCatalogDrop.value === false) {		
		setTimeout(() => {		
			isCatalogDrop.value = true
		}, 0);
	} else isCatalogDrop.value = false
}
</script>
<template>
	<button class="header__btm-catalog" @click="showCatalogDrop" :class="{active: isCatalogDrop}">
		<i class="icon-menu-1"></i>
		Каталог
	</button>
</template>