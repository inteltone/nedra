<script setup>
import { CABINET_MENU_ITEMS } from './assets/libs.js'
const isManagerInfo = useManagerInfo()
let isLoggedIn = useLoggedIn()
const isUserMenu = useUserMenu()
const userMenuElem = useUserMenuElem()
const userMenuIndex = useUserMenuIndex()
const menu_items = ref(CABINET_MENU_ITEMS) 
const menuItemClicked = (index) => {
	if (index === menu_items.value.length - 1) {
		isLoggedIn.value = false
		isManagerInfo.value = false
		location.assign("/")
	}
	userMenuIndex.value = index
	isManagerInfo.value = false
	isUserMenu.value = false
}
</script>
<template>
	<ul class="user-menu" ref="userMenuElem">
		<li class="user-menu__item" v-for="item,index in menu_items" :key="item">
			<NuxtLink to="/cabinet"				
				class="user-menu__link"
				:class="{active: index === userMenuIndex}"				
				@click="menuItemClicked(index)"
			>
				<i :class="`icon-${item.icon}`"></i> 
				{{ item.name }}
			</NuxtLink>
		</li>
	</ul>
</template>