<template>
	<NuxtLayout>
		<ul class="breadcrums">
			<li class="breadcrums__item">
				<NuxtLink to="/" class="breadcrums__link">Главная</NuxtLink>
			</li>
			<li class="breadcrums__item">
				<NuxtLink to="/" class="breadcrums__link">Магазин</NuxtLink>
			</li>
			<li class="breadcrums__item">
				<span class="breadcrums__idle">Ростов-на-Дону</span>
			</li>
		</ul>
		<section class="com-block com-block--shop">
			<ThePageTitle class="com-block__title" title="Интернет-магазин в Ростове-на-Дону" />
			<div class="com-block__content shop">
				<div class="shop__map">
					<img src="/assets/images/misc/map.png" alt="">
				</div>
			</div>
		</section>
		<ul class="shop__list">
			<li class="shop__list-item">
				<svg><use href='/assets/images/svg/sprite.svg#navigator'></use></svg>
				<div class="text">
					<p>Ростов-на-Дону, ул. Михаила Нагибина, д. 155</p>
				</div>
			</li>
			<li class="shop__list-item">
				<svg><use href='/assets/images/svg/sprite.svg#clock'></use></svg>
				<div class="text">
					<p><strong>Пн-Пт</strong> с 09:00 до 18:00</p>
					<p><strong>Сб, Вс</strong> Выходной</p>
				</div>
			</li>
			<li class="shop__list-item">
				<svg><use href='/assets/images/svg/sprite.svg#tel'></use></svg>
				<div class="text">
					<p><a href="tel:+78004971880">+7 800 497 18 80</a></p>
					<p><a href="mail:ysa@carex-parts.com">ysa@carex-parts.com</a></p>
				</div>
			</li>
		</ul>
	</NuxtLayout>
</template>
<style lang="scss">
.com-block--shop{
	margin-block-end: 135px;
}
.shop{	
	&__map{
		grid-column: 5 / -1;
		overflow: hidden;
		aspect-ratio: 1.9537;
		border-radius: 24px;
		img{
			object-fit: cover;
			block-size: 100%;
		}
	}
	&__list{		
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap: 20px;
		&-item{
			position: relative;
			display: flex;
			flex-direction: column;
			gap: 24px 0;
			padding: 40px 68px;
			&::before,&::after{
				content: '';
				position: absolute;				
				inset-block-start: 0;
				inline-size: 40px;
				block-size: 40px;	
				border-block-start: 1px solid var(--clr-black);			
			}
			&::before{
				inset-inline-start: 0;
				border-inline-start: 1px solid var(--clr-black);				
			}
			&::after{
				inset-inline-end: 0;
				border-inline-end: 1px solid var(--clr-black);				
			}
			&:first-child{
				&::before{
					border-radius: 8px 0 0 0;
				}
				.text::before{
					border-radius: 0 0 0 8px;					
				}
			}
			&:last-child{
				&::after{
					border-radius: 0 8px 0 0;
				}
				.text::after{
					border-radius: 0 0 8px 0;					
				}
			}
			svg {
				inline-size: 64px;
				block-size: 64px;
			}
			.text{
				font-size: 24px;
				a{
					color: var(--clr-text);
					transition: color var(--tr);
					&:hover{
						color: var(--clr-orange-100);
					}
				}
				&::before,&::after{
				content: '';
				position: absolute;				
				inset-block-end: 0;
				inline-size: 40px;
				block-size: 40px;	
				border-block-end: 1px solid var(--clr-black);			
			}
				&::before{
					inset-inline-start: 0;
					border-inline-start: 1px solid var(--clr-black);				
				}
				&::after{
					inset-inline-end: 0;
					border-inline-end: 1px solid var(--clr-black);				
				}				
			}
		}
	}
}
</style>