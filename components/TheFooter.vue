<template>
	<footer class="footer full">
		<div class="footer__top container">
			<div class="footer__top-inner">
				<div class="footer__top-title h2">Остались вопросы?</div>
				<form class="footer__top-form">
					<input class="input" type="text" placeholder="Введите ваш e-mail или номер телефон">
				</form>
				<button class="footer__top-btn btn-submit">
					<i class="icon-call"></i>
					Перезвоните мне
				</button>
				<button class="footer__top-btn btn-manager">
					<i class="icon-chat"></i>
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
				<div class="footer__btm-extra extra">
					<p class="extra__title h3">К оплате принимаем</p>
					<p class="extra__desc">Вся информация на сайте — собственность ООО “Франчайзинг Плюс”. Публикация информации с сайта без разрешения запрещена. Все права защищены</p>
					<BaseButton class="extra__btn" text="Обратная связь" />
					<a class="extra__dev" href="https://bearlogics.ru" target="_blank">
						<p class="extra__dev-text">Сайт разработан компанией</p>
						<div class="logo-bearlogics">
							<img src="/assets/images/svg/misc/logo-bearlogics.svg" alt="">
							<i class="bear-anim"></i>
						</div>
					</a>
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
		}
		.extra{
			display: flex;
			flex-direction: column;
			block-size: 100%;
			&__title{
				margin-block-end: 24px;
				font-weight: var(--fw-b);
			}
			&__desc{
				margin-block-end: 48px;
			}
			&__btn{
				align-self: start;
			}
			&__dev{
				display: grid;
				margin-block-start: auto;
				&-text{
					margin-block-end: 8px;
					color: var(--clr-text);
					text-decoration-line: underline;
  					text-underline-offset: 3px;
					transition: color var(--tr), text-underline-color var(--tr);
					@media(hover: hover){
						&:hover{
							color: var(--clr-orange-100);
							text-decoration-color: transparent;
						}
					}
				}
				.logo-bearlogics{
					position: relative;
					cursor: pointer;
					.bear-anim {
						content: url("data:image/svg+xml,%3Csvg width='21' height='13' viewBox='0 0 21 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.300049 12.5998H2.86198C2.86198 10.8738 4.36014 10.2626 5.10921 10.1727L6.56332 9.90307L7.62085 9.36372C7.7971 9.27383 8.25536 9.09404 8.67838 9.09404C9.10139 9.09404 9.73591 11.4312 10.0003 12.5998H12.7763V7.07149C13.1993 5.56132 15.0676 4.64443 15.9489 4.37475C16.7949 4.26688 17.6233 4.23992 17.9318 4.23992C18.9893 4.23992 19.8706 3.88035 20.179 3.70057C21.2365 3.16122 20.7078 2.75671 20.3112 2.62187L19.6502 2.0825L18.8571 1.54318C19.3859 0.329618 18.108 0.464484 17.5352 0.734158C17.1122 0.518419 14.2304 0.10232 12.7763 0.0599424C9.07495 -0.0479272 6.9142 0.731559 6.29893 1.13864C1.40786 4.37472 0.879095 9.09404 0.35031 11.1166C0.276896 11.7908 0.316811 12.1503 0.300049 12.5998Z' fill='white'/%3E%3C/svg%3E%0A");
						position: absolute;
						inset-inline-start: 31px;
						inset-block-start: 4px;
						opacity: 0;						
					}
					&:hover .bear-anim{
						animation: shiny 3.55s linear infinite;
					}
				}
			}
		}
	}
}
@media (max-width: 992px) {
	.footer{
		&__top{
			block-size: unset;
			&-inner{
				display: grid;
				grid-template-columns: max-content 1fr 1fr;
				grid-template-rows: 44px 44px;
				gap: 8px 16px;
			}
			&-btn{
				inline-size: 100%;
			}
		}
		&__top-title{
			grid-column: 1 / span 1;
			grid-row: 1 / span 2;
		}
		&__top-form{
			grid-column: 2 / -1;
			grid-row: 1 / span 1;
			max-inline-size: unset;
		}
		&__top-inner .btn-submit{
			grid-column: 2 / span 1;
			grid-row: 2 / span 1;
		}
		&__top-inner .btn-manager{
			grid-column: 3 / span 1;
			grid-row: 2 / span 1;
		}
		&__btm{
			padding-block: 32px 68px;
			&-inner{
				display: block;
			}
			&-menus{
				display: flex;
				gap: 0 clamp(48px, -5.9745rem + 24.7573vi, 150px);
				margin-block-end: 32px;
			}
			&-extra{
				grid-column: unset;
				max-inline-size: unset;
			}
			.extra{
				display: grid;
				grid-template-columns: repeat(5,1fr);
				gap: 0 16px;
				block-size: unset;
				&__title{
					grid-column: 1 / span 3;
					grid-row: 1 / span 1;
				}
				&__desc{
					grid-column: 1 / span 3;
					grid-row: 2 / span 1;
					max-inline-size: 288px;
					margin-block-end: 0;
				}
				&__btn{
					grid-column: 4 / -1;
					grid-row: 1 / span 2;
					justify-self: start;
					block-size: 44px;
					padding-inline: 30px;
				}
				&__dev{
					grid-column: 4 / -1;	
					grid-row: 2 / span 1;			
				}
			}
		}
	}
}
@media (max-width: 640px) {
	.footer{
		&__top{
			&-inner{
				grid-template-columns: 1fr;
				grid-template-rows: unset;
			}
			&-btn{
				justify-content: center;
				block-size: 44px;
			}
		}
		&__top-title{
			grid-column: unset;
			grid-row: unset;
			margin-block-end: 13px;
		}
		&__top-form{
			grid-column: unset;
			grid-row: unset;
			block-size: 44px;
		}
		&__top-inner .btn-submit{
			grid-column: unset;
			grid-row: unset;
		}
		&__top-inner .btn-manager{
			grid-column: unset;
			grid-row: unset;
		}
		&__btm{
			padding-block: 32px 51px;
			&-menus{
				flex-wrap: wrap;
				row-gap: 32px;
				.title{
					margin-block-end: 12px;
					font-size: 12px;
				}
				.link{
					inline-size: max-content;
				}
			}
			.extra{
				display: block;				
				&__title{
					font-size: 12px;
					margin-block-end: 8px;
				}
				&__desc{					
					max-inline-size: unset;
					margin-block-end: 32px;
				}
				&__btn{
					margin-block-end: 32px;
				}
				&__dev{
					grid-column: 4 / -1;	
					grid-row: 2 / span 1;			
				}
			}
		}
	}
}
@media (max-width: 390px) {
	.footer{
		&__btm{
			&-menus{
				flex-wrap: nowrap;
				flex-direction: column;
			}
		}
	}
}

@keyframes shiny {
  0% {
    opacity: 0;
  }
  2% {
    opacity: 0.5;
  }
  4% {
    opacity: 1;
  }
  6% {
    opacity: 0.3;
  }
  8% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  12% {
    opacity: 0.5;
  }
  14% {
    opacity: 0;
  }
  16% {
    opacity: 0;
  }
  18% {
    opacity: 1;
  }
  20% {
    opacity: 0.5;
  }
  30% {
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.7;
  }
  60% {
    opacity: 0.8;
  }
  70% {
    opacity: 0.85;
  }
  80% {
    opacity: 0.9;
  }
  90% {
    opacity: 0.95;
  }
  100% {
    opacity: 1;
  }
}
</style>