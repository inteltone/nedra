<template>
	<footer class="footer">
		<div class="footer__top container">
			<div class="footer__top-inner">
				<div class="footer__top-title h2">Остались вопросы?</div>
				<form class="footer__top-form">
					<input class="input" type="text" placeholder="Введите ваш e-mail или номер телефон">
				</form>
				<button class="footer__top-btn">
					<svg><use href='/assets/images/svg/sprite.svg#tel'></use></svg>
					Перезвоните мне
				</button>
				<button class="footer__top-btn">
					<svg><use href='/assets/images/svg/sprite.svg#message'></use></svg>
					Связь с менеджером
				</button>
			</div>
		</div>
		<div class="footer__btm container">
			<div class="footer__btm-inner">
				<div class="footer__btm-menus">
					<div class="menu-wrap menu-left">
						<div class="title h3">Клиентам</div>
						<div class="menu">
							<NuxtLink class="link" to="/">Как сделать заказ</NuxtLink>
							<NuxtLink class="link" to="/">Условия гарантии</NuxtLink>
							<NuxtLink class="link" to="/">Оплата</NuxtLink>
							<NuxtLink class="link" to="/">Политика конфиденциальности</NuxtLink>
							<NuxtLink class="link" to="/">Доставка</NuxtLink>
							<NuxtLink class="link" to="/">Соглашение об авторских правах</NuxtLink>
							<NuxtLink class="link" to="/">VIN запрос</NuxtLink>
							<NuxtLink class="link" to="/">Оферта</NuxtLink>
						</div>
					</div>
					<div class="menu-wrap menu-mid">
						<div class="title h3">Партнёрам</div>
						<div class="menu">
							<NuxtLink class="link" to="/">О компании</NuxtLink>
							<NuxtLink class="link" to="/">Франчайзинг</NuxtLink>
							<NuxtLink class="link" to="/">Поставщикам</NuxtLink>
						</div>
					</div>
					<div class="menu-wrap menu-right">
						<div class="title h3">Каталоги</div>
						<div class="menu">
							<NuxtLink class="link" to="/">Поиск по VIN</NuxtLink>
							<NuxtLink class="link" to="/">Каталог автомобилей</NuxtLink>
							<NuxtLink class="link" to="/">Кузовные детали и оптика</NuxtLink>
							<NuxtLink class="link" to="/">Моторные масла</NuxtLink>
							<NuxtLink class="link" to="/">Трансмиссионные масла</NuxtLink>
							<NuxtLink class="link" to="/">Шины</NuxtLink>
							<NuxtLink class="link" to="/">Аксессуары</NuxtLink>
							<NuxtLink class="link" to="/">Аккумуляторные батареи</NuxtLink>
							<NuxtLink class="link" to="/">Автосвет</NuxtLink>
							<NuxtLink class="link" to="/">Автостёкла</NuxtLink>
						</div>
					</div>
				</div>
				<div class="footer__btm-extra">
					<p class="title h3">К оплате принимаем</p>
					<p class="desc">Вся информация на сайте — собственность ООО “Франчайзинг Плюс”. Публикация информации с сайта без разрешения запрещена. Все права защищены</p>
					<BaseButton text="Обратная связь" />
				</div>
			</div>
		</div>
	</footer>
</template>
<style lang="scss">
.footer{
	&__top{
		block-size: 111px;
		padding-block: 27px;
		background-color: var(--clr-black);
		border-radius: var(--header-r) var(--header-r) 0 0;
		&-inner{
			display: flex;
			align-items: center;
			gap: 0 16px;
		}
		&-title{
			min-inline-size: max-content;
			margin-inline-end: auto;
			color: var(--clr-white);
		}
		&-form{
			display: flex;
			align-items: center;
			max-inline-size: 600px;
			inline-size: 100%;
			block-size: 100%;
			padding-inline: 24px;
			background-color: var(--clr-white);
			border-radius: 8px;
			.input{
				min-inline-size: unset;
				inline-size: 100%;
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
		}
		&-btn{
			display: flex;
			align-items: center;
			gap: 0 10px;
			min-inline-size: max-content;
			block-size: 100%;
			padding-inline: 25px;
			background-color: var(--clr-orange-100);
			text-transform: uppercase;
			border-radius: 8px;
			svg {
				inline-size: 24px;
				block-size: 24px;
			}
			&:last-child{
				margin-inline-end: auto;
			}
		}
	}
	&__btm{
		padding-block: 85px 100px;
		background-color: var(--clr-gray-100);
		&-inner{
			display: grid;
			grid-template-columns: repeat(12,1fr);
			gap: 20px;
		}
		&-menus{
			grid-column: 1 / span 6;
			display: grid;
			grid-template-columns: repeat(6,1fr);
			gap: 20px;
			.menu-left{grid-column: 1 / span 2;}
			.menu-mid{grid-column: 3 / span 2; justify-self: center;}
			.menu-right{grid-column: 5/ span 2;}
			.title{
				margin-block-end: 24px;
			}
			.menu{
				display: flex;
				flex-direction: column;
				gap: 12px 0;
			}
			.link{
				color: var(--clr-text);
				line-height: 1.2;
				transition: color var(--tr);
				&:hover{
					color: var(--clr-orange-100);
				}
			}
		}
		&-extra{
			grid-column: 7 / -1;
			justify-self: end;
			max-inline-size: 520px;
			.title{
				margin-block-end: 24px;
				font-weight: var(--fw-b);
			}
			.desc{
				margin-block-end: 48px;
			}
		}
	}
}
</style>