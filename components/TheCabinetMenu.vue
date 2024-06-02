<script setup>
import { CABINET_MENU_ITEMS } from './assets/libs.js'
const isManagerInfo = useManagerInfo()
const userMenuIndex = useUserMenuIndex()
const menu_items = ref(CABINET_MENU_ITEMS) 
const menuItemClicked = (index) => {
	userMenuIndex.value = index
	isManagerInfo.value = false
	
}
</script>
<template>
	<ul class="cabinet__menu">
		<li class="cabinet__menu-item" v-for="item,index in menu_items" :key="item">
			<button 
				class="cabinet__menu-link" 
				:class="{active: index === userMenuIndex}"
				@click="menuItemClicked(index)"
			>
				<i :class="`icon-${item.icon}`"></i> 
				{{ item.name }}
			</button>
		</li>
	</ul>
</template>