<script setup>
const CABINET_MENU_ITEMS = [
	{name: 'Баланс',icon: 'wallet'},
	{name: 'История заказов',icon: 'grading'},
	{name: 'Корзина',icon: 'basket'},
	{name: 'Мои автомобили',icon: 'car'},
	{name: 'VIN запросы',icon: 'computer'},
	{name: 'Счета',icon: 'credit-score'},
	{name: 'Отправки',icon: 'package'},
	{name: 'Сообщения',icon: 'mail'},
	{name: 'Друзья',icon: 'group'},
	{name: 'Пакетная проценка',icon: 'sell'},
	{name: 'Выход',icon: 'logout'},
]
const menu_items = ref(CABINET_MENU_ITEMS)
</script>
<template>
	<NuxtLayout >		
		<ul class="breadcrums">
			<li class="breadcrums__item">
				<NuxtLink to="/" class="breadcrums__link">Главная</NuxtLink>
			</li>
			<li class="breadcrums__item">
				<span class="breadcrums__idle">Личный кабинет</span>
			</li>
		</ul>
		<ThePageTitle class="cabinet-page-title" title="Личный кабинет" />
		<section class="cabinet">
			<ul class="cabinet__menu">
				<li class="cabinet__menu-item" v-for="item,index in menu_items" :key="item">
					<NuxtLink class="cabinet__menu-link" :class="{active: index === 0}" to="/">
						<i :class="`icon-${item.icon}`"></i> {{ item.name }}
					</NuxtLink>
				</li>
			</ul>
		</section>
			
	</NuxtLayout>
</template>
<style lang="scss">
.cabinet-page-title{
	margin-block-end: 68px;
}
.cabinet{
	display: grid;
	grid-template-columns: repeat(12,1fr);
	gap: 0 20px;
	&__menu{
		grid-column: 1 / span 2;
		display: flex;
		flex-direction: column;
		gap: 4px 0;
		&-item{
			display: grid;
			align-items: center;			
		}
		&-link{
			display: flex;
			align-items: center;
			gap: 0 10px;
			block-size: 48px;
			padding-inline: 16px;
			color: var(--clr-text);
			border-radius: 8px;
			transition: color var(--tr), background-color var(--tr);
			@media(hover: hover){
			 &:hover{
				color: var(--clr-white);
				background-color: var(--clr-orange-100);
			 }
			}
			&.active{
			color: var(--clr-white);
			background-color: var(--clr-orange-100);
			}
		}
	}
}
</style>