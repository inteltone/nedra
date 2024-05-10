<script setup>
const isOpenedPopupAuth = useAuthDialog()
const showPopup = () => {
	isOpenedPopupAuth.value = !isOpenedPopupAuth.value		
}
let isLogged = ref(true)
function login(){	isLogged.value = !isLogged.value }
const CITIES = ['Ростов-на-Дону','Липецк','Воронеж','Орел','Тула']
const cities = ref(CITIES)
let index = ref(0)
function pickCity(i) {
	isOpenedDropdown.value = false
	index.value = i
}
let isOpenedDropdown = ref(false)
function openDropdown() { isOpenedDropdown.value = !isOpenedDropdown.value }
let show_search_input = ref(false)
</script>
<template>
	<header class="header full container">
		<div class="header__top">
			<div class="header__top-select">
				<i class="icon-location"></i>
				<span class="title">Город:</span>
				<div class="options">					
					<span class="option" @click="openDropdown">{{ cities[index] }}</span>
					<div class="dropdown" :class="{open: isOpenedDropdown}">
						<span 
							class="option" 
							v-for="city,i in cities" 
							:key="city" 
							@click="pickCity(i)"
							v-show="index !== i"
						>{{ city }}</span>						
					</div>
				</div>
				<div class="select-icon" :class="{rotate: isOpenedDropdown}" @click="openDropdown">
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
			<button class="header__btm-catalog">
				<i class="icon-menu-1"></i>
				Каталог
			</button>			
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
				<div v-if="!isLogged" class="out">
					<NuxtLink to="/" class="link message">
						<i class="icon-chat"></i>
						<span>Связь с менеджером</span>
					</NuxtLink>
					<NuxtLink to="/" class="link user">
						<i class="icon-login"></i>
						<span>Даниил С.</span>
					</NuxtLink>
				</div>
				<button v-else class="link in" @click="showPopup">
					<i class="icon-login"></i>
					<span>Войти на сайт</span>
				</button>				
			</div>
			<NuxtLink to="/" class="header__btm-basket">
				<div class="counter-wrap">
					<i class="icon-mall"></i>
					<span class="counter">12</span>
				</div>
				<span>Корзина</span>				
			</NuxtLink>
		</div>		
	</header>	
</template>
<style lang="scss">
.header{	
	--pad-bs: clamp(6px, -2.3783rem + 4.4408vi, 33px);
	--top-bz: 24px;
	--mid-bz: clamp(60px, 2.2204rem + 2.4671vi, 75px);
	--gap: 12px;	
	position: sticky;
	z-index: 2;
	inset-block-start: calc(-1 * (var(--pad-bs) + var(--top-bz) + var(--mid-bz) + var(--gap) * 2));	
	gap: var(--gap) 0;
	padding-block-start: var(--pad-bs);
	background-color: var(--clr-white);
	border-radius: 0 0 var(--header-r) var(--header-r);
	&__top{
		position: relative;
		display: flex;
		align-items: center;
		gap: 0 20px;
		block-size: var(--top-bz);		
		&-select{
			display: flex;
			align-items: center;
			inline-size: clamp(200px, 7.2917rem + 8.3333vi, 250px);
			&>*{
				flex: 0 0;
			}
			.icon-location{
				margin-inline-end: 6px;
			}
			.title{
				margin-inline-end: 8px;
				font-weight: var(--fw-b);
			}
			.options{
				position: relative;
				flex-direction: column;				
			}			
			.option{
				display: block;
				cursor: pointer;
				&:first-child{
					inline-size: max-content;
				}				
			}
			.dropdown{
				overflow: hidden;
				position: absolute;
				visibility: hidden;
				opacity: 0;
				min-inline-size: 140px;
				padding-block: 5px;
				background-color: var(--clr-white);
				border: 1px solid var(--clr-gray-100);
				border-radius: 8px;
				transform: translateY(-10px);
				transition: opacity .3s ease-in-out, visibility 0s linear .3s, transform .3s ease-in-out;
				&.open{
					visibility: visible;
					opacity: 1;
					transform: translateY(0px);
					transition: opacity  .3s ease-in-out, visibility 0s linear, transform .3s ease-in-out;
				}
				.option{
					display: grid;
					place-items: center;
					inline-size: 100%;
					block-size: 30px;
					line-height: 1.1;
					text-align: center;
					cursor: pointer;
					transition: background-color var(--tr);
					&:hover{
						background-color: var(--clr-gray-25);
					}
				}
			}
			.select-icon{
				display: grid;
				place-items: center;
				inline-size: 24px;
				block-size: 24px;
				margin-inline-start: 2px;
				transition: transform var(--tr);
				cursor: pointer;
				&.rotate{
					transform: rotate(-180deg);
				}				
			}
		}
		&-address{
			flex-shrink: 0;
			display: flex;
			align-items: center;
			gap: 0 10px;
			inline-size: max-content;
			margin-inline-end: auto;
			[class^="icon-"]{
				font-size: 32px;
			}			
		}
		&-menu{
			flex-shrink: 0;
			display: flex;
			justify-content: space-between;
			gap: 0 16px;
			max-inline-size: clamp(360px, 6.7708rem + 25.1667vi, 511px);
			inline-size: 100%;			
			.link{
				color: var(--clr-text);
				transition: color var(--tr);
				&:hover{
					color: var(--clr-orange-100);
				}
			}
		}
		&-mob-login{
			display: none;		
		}
	}
	&__mid{
		display: flex;
		justify-content: space-between;
		align-items: center;
		block-size: var(--mid-bz);		
		&-logo{
			aspect-ratio: 2.5;
			inline-size: 188px;
			block-size: clamp(60px, 2.2204rem + 2.4671vi, 75px);
			img{
				inline-size: 100%;
				block-size: 100%;
			}
		}
		&-menu{
			display: flex;
			gap: 0 clamp(24px, -0.9474rem + 3.9474vi, 48px);
			.link{
				color: var(--clr-text);
				transition: color var(--tr);
				&:hover{
					color: var(--clr-orange-100);
				}
			}
		}
		&-tel{
			display: flex;
			align-items: center;
			gap: 0 10px;
			[class^="icon-"]{
				font-size: 32px;
			}			
			.link{
				color: var(--clr-text);
				transition: color var(--tr);
				&:hover{
					color: var(--clr-orange-100);
				}
			}
		}
	}
	&__btm{
		display: flex;
		align-items: center;
		block-size: var(--header__btm-h);
		margin-block-end: calc(-1 * var(--header__btm-h) / 2);
		padding: 0 clamp(16px, -0.0197rem + 1.6447vi, 26px);
		background-color: var(--clr-orange-100);
		border-radius: 8px;		
		&-mob-burger{			
			display: none;
			
		}
		&-mob-logo{
			display: none;			
		}	
		&-catalog{
			display: flex;
			align-items: center;
			gap: 0 12px;
			margin-inline-end: 148px;			
		}
		&-search{
			display: flex;
			align-items: center;
			max-inline-size: 789px;
			inline-size: 100%;
			block-size: 48px;
			margin-inline-end: 84px;
			padding-inline: 24px 9px;
			background-color: var(--clr-white);
			border-radius: 8px;	
			transition: flex-grow var(--tr);		
			&>.icon-search{
				margin-inline-end: 12px;
				color: #a9a9a9;
			}			
			.input{
				flex-grow: 1;
				overflow: hidden;
				display: block;
				block-size: 100%;
				border: none;
				&::placeholder{
					color: var(--clr-gray-100);
				}
				&:focus::placeholder{
					color: transparent;
				}
				&:focus-visible{
					outline: none;
				}
			}
			.button{
				display: grid;
				place-items: center;
				inline-size: 32px;
				block-size: 32px;
				margin-inline-start: 12px;			
				background-color: var(--clr-gray-100);
				border-radius: 4px;				
			}
			.toggle-search-input{
				display: none;
			}			
		}		
		&-login{
			display: flex;
			align-items: center;
			gap: 0 12px;
			margin-inline-start: auto;
			color: var(--clr-text);
			@media (max-width: 992px) {
				display: none;
			}
			.out{
				display: flex;
				align-items: center;
				gap: 0 44px;
			}
			.link{
				display: flex;
				align-items: center;
				gap: 0 12px;
				inline-size: max-content;
				color: var(--clr-text);				
			}
		}
		&-basket{
			display: flex;
			align-items: center;
			gap: 0 10px;
			block-size: 48px;
			margin-inline-start: 48px;
			color: var(--clr-text);
			@media (max-width: 992px) {
				block-size: 32px;
				margin-inline-start: 4px;
			}
			@media (max-width: 580px) {
				block-size: 24px;
			}
			&>span{
				@media (max-width: 992px) {
					display: none;
				}
			}
			.counter-wrap{
				display: flex;
				align-items: center;
				gap: 0 6px;
				block-size: 100%;
				padding-inline: 9px;
				background-color: var(--clr-white);
				border-radius: 6px;
				@media (max-width: 992px) {				
					[class^='icon-']{
						font-size: 18px;
					}
					border-radius: 4px;
				}
			}
		}
	}	
}
@media (max-width: 992px) {
	.header{
		--mid-bz: 0px;
		--gap: 6px;
		inset-block-start: calc(-1 * (var(--pad-bs) + var(--top-bz) + var(--mid-bz) + var(--gap)));
		&__top{
			&-menu{
				display: none;
			}
			&-mob-login{
				display: flex;
				align-items: center;
				gap: 0 8px;
				text-transform: uppercase;
			}
		}
		&__mid{
			display: none;
		}
		&__btm{
			&-mob-burger{
				flex-shrink: 0;
				display: grid;
				place-items: center;
				inline-size: 32px;
				block-size: 32px;
				margin-inline-end: 16px;				
				border-radius: 4px;
			}
			&-mob-logo{
				display: block;
				aspect-ratio: 2.5;
				inline-size: 95px;
				margin-inline: auto;
				img{
					inline-size: 95px;
					block-size: 38px;
				}
			}
			&-catalog{
				display: none;
			}
			&-search{
				max-inline-size: unset;
				inline-size: unset;
				block-size: 32px;
				margin-inline-end: 0px;
				padding-inline: unset;
				background-color: unset;
				border-radius: unset;
				&>.icon-search{
					display: none;
				}
				.input{
					inline-size: 0;					
					padding-inline: 0px;
					background-color: var(--clr-white);
					border-radius: 4px;
				}
				.button{
					display: none;
					margin-inline-start: 4px;
					color: var(--clr-white);
					background-color: var(--clr-black);					
				}
				.toggle-search-input{
					display: grid;
					margin-inline-start: 4px;
					color: var(--clr-black);
					background-color: var(--clr-white);
					cursor: pointer;					
				}
			}
			&-search.show{
				flex-grow: 1;
				margin-inline-start: 32px;
				.input{
					padding-inline: 12px;
				}
				.button{
					display: grid;
				}
				.toggle-search-input{
					display: none;
				}
			}
		}
	}
}
@media (max-width: 700px) {
	.header{		
		&__top{
			&-address{
				margin-inline: auto 0;
			}
			&-mob-login{
				display: none;
			}
		}
	}
}
@media (max-width: 640px) {
	.header{
		&__btm{
			&-mob-logo{
				margin-inline: 0 auto;
			}
		}
	}
}
@media (max-width: 580px) {
	.header{
		--pad-bs: 0;
		--top-bz: 0px;
		--gap: 0px;
		inset-block-start: 0;
		&__top{
			display: none;
		}
		&__btm{
			border-radius: 0 0 8px 8px;
			margin-inline: calc(-1 * var(--minimum-content-padding));
			&-mob-logo{
				aspect-ratio: 2.5;
				inline-size: 58px;
				img{
					inline-size: 58px;
					block-size: 24px;
				}
			}
			&-search{
				block-size: 24px;
				.button{
					inline-size: 24px;
					block-size: 24px;	
					[class^="icon-"]{
						font-size: 20px;
					}
				}
				.toggle-search-input{
					background-color: transparent;
					[class^="icon-"]{
						font-size: 22px;
					}
				}
			}
		}
	}
}
</style>