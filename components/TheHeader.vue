<script setup>
const isPopupAuth = usePopupAuth()
const isPopupCity = usePopupCity()
const isLoggedIn = useLoggedIn()
const isUserMenu = useUserMenu()
const isBasketCounter = useBasketCounter()
const showPopupAuth = () => {	isPopupAuth.value = true }
let show_search_input = ref(false)

</script>
<template>
	<header class="header full container">
		<div class="header__top">
			<div class="header__top-select" @click="isPopupCity = true">
				<i class="icon-location"></i>
				<span class="title">Город:</span>
				<span class="option">Ростов-на-Дону</span>			
				<div class="select-icon">
					<i class="icon-arrow-down"></i>
				</div>
			</div>
			<div class="header__top-address">
				<i class="icon-near"></i>
				<span><strong>Магазин:</strong> проспект Михаила Нагибина, д. 155</span>
			</div>
			<div class="header__top-menu">
				<NuxtLink class="link" to="/">Магазины</NuxtLink>
				<NuxtLink class="link" to="/">Условия гарантии</NuxtLink>
				<NuxtLink class="link" to="/">Франшиза</NuxtLink>
				<NuxtLink class="link" to="/">Контакты</NuxtLink>
			</div>
			<div class="header__top-mob-login">
				<i class="icon-login"></i>
				Войти на сайт
			</div>
		</div>
		<div class="header__mid">
			<NuxtLink class="header__mid-logo" to="/" title="На Главную">
				<img src="/assets/images/svg/misc/logo.svg" alt="Логотип Nedra Parts">
			</NuxtLink>
			<div class="header__mid-menu">
				<NuxtLink class="link" to="/">VIN запрос</NuxtLink>
				<NuxtLink class="link" to="/">О компании</NuxtLink>
				<NuxtLink class="link" to="/oplata">Оплата</NuxtLink>
				<NuxtLink class="link" to="/delivery">Доставка</NuxtLink>
				<NuxtLink class="link" to="/suppliers">Поставщикам</NuxtLink>
				<NuxtLink class="link" to="/">Бренды</NuxtLink>
			</div>
			<div class="header__mid-tel">
				<i class="icon-call"></i>
				<a class="link" href="tel:+79407553030">+7 940 755 30 30</a>
			</div>
		</div>
		<div class="header__btm">
			<button class="header__btm-mob-burger">
				<i class="icon-menu-1"></i>
			</button>
			<NuxtLink to="/" class="header__btm-mob-logo">
				<img src="/assets/images/svg/misc/logo-mobile.svg" alt="Логотип Nedra Parts">
			</NuxtLink>
			<TheCatalogDropButton />
			<TheCatalogDrop />			
			<form class="header__btm-search"
				:class="{show: show_search_input === true}"
			>
				<i class="icon-search"></i>
				<input class="input" type="text" placeholder="Поиск по номеру детали, например ST2121166L">
				<button class="button" title="Искать">
					<i class="icon-search"></i>
				</button>
				<span class="button toggle-search-input" @click="show_search_input = true">
					<i class="icon-search"></i>
				</span>
			</form>
			<div class="header__btm-login">
				<div v-if="isLoggedIn" class="out">
					<!-- кнопка СВЯЗЬ С МЕНЕДЖЕРОМ -->
					<NuxtLink to="/" class="link message">
						<i class="icon-chat"></i>
						<span>Связь с менеджером</span>
					</NuxtLink>
					<!-- кнопка открывает/закрывает выпад. меню пользователя -->
					<TheUserBtn />
					<!-- выпад. меню пользователя -->
					<TheUserMenu v-if="isUserMenu" />
				</div>
				<!-- кнопка открывает попап аутентификации -->
				<button v-else class="link in" @click="showPopupAuth">
					<i class="icon-login"></i>
					<span>Войти на сайт</span>
				</button>				
			</div>
			<NuxtLink to="/" class="header__btm-basket">
				<div class="counter-wrap" @mouseenter="isBasketCounter = true">
					<i class="icon-mall"></i>
					<span>12</span>
				</div>
				<span>Корзина</span>				
			</NuxtLink>
			<TheBasketItem />
			<TheBasketCounter />			
		</div>		
	</header>	
</template>