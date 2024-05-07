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
</script>
<template>
	<header class="header container">
		<div class="header__top">
			<div class="header__top-select">
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
				<div class="select-icon" :class="{rotate: isOpenedDropdown}">
					<svg><use href='/assets/images/svg/sprite.svg#arrow-down'></use></svg>
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
		</div>
		<div class="header__mid">
			<NuxtLink class="header__mid-logo" to="/" title="На Главную"><img src="/assets/images/misc/logo.svg" alt="Логотип Nedra Parts"></NuxtLink>
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
			<button class="header__btm-burger">
				<i class="icon-menu-1"></i>
			</button>
			<NuxtLink to="/" class="header__btm-catalog">Каталог</NuxtLink>
			<form class="header__btm-search">
				<i class="icon-search"></i>
				<input class="input" type="text" placeholder="Поиск по номеру детали, например ST2121166L">
				<button class="button" title="Искать">
					<i class="icon-search"></i>
				</button>
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
				Корзина
			</NuxtLink>
		</div>		
	</header>
</template>
<style lang="scss">
.header{	
	--pad-bs: 33px;
	--top-bz: 24px;
	--mid-bz: 75px;
	--gap: 12px;
	position: sticky;
	z-index: 1;
	top: calc(-1 * (var(--pad-bs) + var(--top-bz) + var(--mid-bz) + var(--gap) * 2));
	gap: var(--gap) 0;
	padding-block-start: var(--pad-bs);
	border-radius: 0 0 var(--header-r) var(--header-r);
	&__top{
		position: relative;
		display: grid;
		grid-template-columns: 250px 1fr 520px;
		gap: 0 20px;
		block-size: var(--top-bz);
		&-select{
			flex-grow: 0;
			display: flex;
			align-items: center;
			margin-inline-end: 82px;
			&>*{
				flex: 0 0;
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
				&.rotate{
					transform: rotate(-180deg);
				}
				svg {				
					inline-size: 24px;
					block-size: 24px;
				}
			}
		}
		&-address{
			display: flex;
			align-items: center;
			gap: 0 10px;
			[class^="icon-"]{
				font-size: 32px;
			}
		}
		&-menu{
			display: flex;
			justify-content: space-between;
			gap: 0 16px;
			.link{
				color: var(--clr-text);
				transition: color var(--tr);
				&:hover{
					color: var(--clr-orange-100);
				}
			}
		}
	}
	&__mid{
		display: flex;
		justify-content: space-between;
		align-items: center;
		block-size: var(--mid-bz);
		&-logo{
			inline-size: 188px;
			block-size: 75px;
		}
		&-menu{
			display: flex;
			gap: 0 48px;
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
		padding: 16px 26px;
		background-color: var(--clr-orange-100);
		border-radius: 8px;		
		&-burger{
			display: grid;
			place-items: center;	
			margin-inline-end: 12px;
		}
		&-catalog{
			margin-inline-end: 148px;
		}
		&-search{
			display: flex;
			align-items: center;
			max-inline-size: 789px;
			inline-size: 100%;
			block-size: 100%;
			margin-inline-end: 84px;
			padding-inline: 24px 9px;
			background-color: var(--clr-white);
			border-radius: 8px;			
			&>.icon-search{
				margin-inline-end: 12px;
				color: #a9a9a9;
			}			
			.input{
				flex-grow: 1;
				display: block;
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
		}
		&-login{
			display: flex;
			align-items: center;
			gap: 0 12px;
			margin-inline-start: auto;
			color: var(--clr-text);			
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
			block-size: 100%;
			margin-inline-start: 48px;
			color: var(--clr-text);
			.counter-wrap{
				display: flex;
				align-items: center;
				gap: 0 6px;
				block-size: 100%;
				padding-inline: 9px;
				background-color: var(--clr-white);
				border-radius: 6px;				
			}			
		}
	}
	&.inactive{
		.header__btm{
			background-color: var(--clr-gray-100);
		}
	}
}
</style>