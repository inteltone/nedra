<template>
	<NuxtLayout>		
		<!-- <ThePageTitle title="Главная" /> -->
		<div class="hero full container">
			<div class="hero__inner">
				<img class="hero__inner-logo" src="/assets/images/svg/misc/logo-hero.svg" alt="">
				<img class="hero__inner-logo-mob" src="/assets/images/svg/misc/logo.svg" alt="">
				<img class="hero__inner-auto-mob" src="/assets/images/misc/hero-auto-mob.png" alt="">
				<p class="hero__inner-title">Удобный сервис для быстрого подбора запчастей</p>
				<div class="hero__inner-btns-wrap">
					<p class="hero__inner-btns-title">Поиск</p>
					<div class="hero__inner-btns">
						<a href="#" class="hero__inner-btn">
							<span><span>поиск</span> по VIN</span>
						</a>
						<a href="#" class="hero__inner-btn">
							<span><span>поиск</span> по бренду</span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="map">
			<p class="map__title">Карта сайта</p>
			<div class="map__list">
				<NuxtLink to="/oplata">Оплата</NuxtLink>
				<NuxtLink to="/delivery">Доставка</NuxtLink>
				<NuxtLink to="/suppliers">Поставщикам</NuxtLink>
				<NuxtLink to="/shop">Интернет-магазин</NuxtLink>
				<NuxtLink to="/news">Новости</NuxtLink>
				<NuxtLink to="/news-single">Страница новости</NuxtLink>
				<NuxtLink to="/registration">Регистрация</NuxtLink>
				<NuxtLink to="/search-artikul">Поиск по артикулу</NuxtLink>
				<NuxtLink to="/search-vin-brands">Оригинальный каталог</NuxtLink>
				<NuxtLink to="/cabinet">Личный кабинет</NuxtLink>
			</div>			
		</div>		
	</NuxtLayout>
</template>
<style lang="scss">
.hero{
	margin-block-end: 32px;
	padding-block-start: 8vw;
	padding-block-end: 60px;
	color: var(--clr-white);
	background-color: var(--clr-black);
	background-image: url("../assets/images/misc/hero-bg.png");
	background-repeat: no-repeat;
	background-position: left bottom;
	background-size: auto 100%;
	&__inner{		
		&-logo{
			inline-size: 28vw;
			margin-block-end: 1.5vw;
		}
		&-logo-mob{
			display: none;
		}
		&-auto-mob{
			display: none;
		}
		&-title{
			font-family: var(--ff-sec);
			font-size: 1.65vw;
			font-size: clamp(31px, 1.6875rem + 0.3125vi, 32px);
			margin-block-end: 2vw;
		}		
		&-btns-title{
			display: none;
		}
		&-btns{
			// inline-size: 28vw;
			display: flex;
			gap: 20px;
		}
		&-btn{
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0 18px;
			padding-inline: 44px;
			padding-block: 16px;
			color: var(--clr-white);
			background-color: hsl(0 0% 100% / .2);
			text-transform: uppercase;
			border-radius: 8px;
			transition: color var(--tr), background-color var(--tr);
			&::after{
				content: '';
				inline-size: 31px;
				block-size: 8px;
				background-image: url("data:image/svg+xml,%3Csvg width='61' height='8' viewBox='0 0 61 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M57.1716 0.46444L60.3536 3.64642C60.5488 3.84168 60.5488 4.15826 60.3536 4.35353L57.1716 7.53551C56.9763 7.73077 56.6597 7.73077 56.4645 7.53551C56.2692 7.34025 56.2692 7.02366 56.4645 6.8284L58.7929 4.49997H0V3.49997H58.7929L56.4645 1.17155C56.2692 0.976284 56.2692 0.659702 56.4645 0.46444C56.6597 0.269178 56.9763 0.269178 57.1716 0.46444Z' fill='white'/%3E%3C/svg%3E%0A");
				background-position: center right;
				transition: inline-size var(--tr);
			}
			&:hover{
				color: var(--clr-text);
				background-color: var(--clr-orange-100);
				&::after{					
					inline-size: 61px;
					background-image: url("data:image/svg+xml,%3Csvg width='61' height='8' viewBox='0 0 61 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M57.1716 0.46444L60.3536 3.64642C60.5488 3.84168 60.5488 4.15826 60.3536 4.35353L57.1716 7.53551C56.9763 7.73077 56.6597 7.73077 56.4645 7.53551C56.2692 7.34025 56.2692 7.02366 56.4645 6.8284L58.7929 4.49997H0V3.49997H58.7929L56.4645 1.17155C56.2692 0.976284 56.2692 0.659702 56.4645 0.46444C56.6597 0.269178 56.9763 0.269178 57.1716 0.46444Z' fill='black'/%3E%3C/svg%3E%0A");
				}
			}
		}
	}
}
@media (max-width: 1600px) {
	.hero{
		padding-block-start: clamp(120px, 6.6111rem + 1.3889vi,128px);
		background-position: left clamp(-100px, -17.3611rem + 17.3611vi, 0px) bottom;
	}
}
@media (max-width: 1280px) {
	.hero{
		&__inner{
			&-title{
				font-size: clamp(24px, -0.25rem + 2.7344vi, 31px);
			}
			&-btn{
				padding-inline: clamp(24px, -3.5rem + 7.8125vi, 44px);

			}
		}
	}
}
@media (max-width: 1024px) {
	.hero{
		padding-block-start: clamp(90px, 3.8942rem + 3.6058vi, 120px);
		padding-block-end: clamp(40px, -1.25rem + 7.8125vi, 60px);
		background-position: left -250px bottom;
		&__inner{
			&-title{
				inline-size: 360px;
				font-size: clamp(27px, 0.75rem + 1.9531vi, 32px);
				line-height: 1.25;
			}
			&-btns{
				flex-direction: column;
				gap: 12px 0;
				inline-size: clamp(250px, 6.25rem + 19.5313vi, 300px);
			}
			&-btn{				
				padding-inline: 24px;
			}
		}
	}
}
@media (max-width: 640px) {
	.hero{	
		padding-block-start: 60px;	
		padding-block-end: 0;
		background-color: var(--clr-white);
		background-image: unset;	
		&__inner{
			display: grid;
			justify-items: center;
			&-logo{
				display: none;
			}
			&-logo-mob{
				inline-size: 188px;
				display: block;
			}
			&-auto-mob{
				display: block;
				inline-size: 80%;
				margin-block-end: 24px;
			}
			&-title{
				inline-size: unset;
				color: var(--clr-text);
				line-height: 1.1;
				text-align: center;
			}
			&-btns-wrap{
				inline-size: 100%;
			}
			&-btns-title{
				position: relative;
				inset-inline-start: 16px;
				inset-block-start: 11px;
				display: inline-block;
				padding-inline: 24px;
				color: var(--clr-gray);
				background-color: var(--clr-white);
				font-size: 14px;
				line-height: 1;
			}
			&-btns{
				--gap: 8px;
				flex-direction: row;
				gap: 0 var(--gap);
				inline-size: 100%;
				padding: 17px 16px 14px;
				border: 1px solid var(--clr-gray);
				border-radius: 8px;
			}
			&-btn{
				// flex-grow: 1;
				flex-basis: calc(50% - var(--gap) / 2);
				background-color: var(--clr-black);
			}
		}
	}
}
@media (max-width: 480px) {
	.hero{
		&__inner{			
			&-btn{
				justify-content: space-between;
				padding-inline: 16px;
				font-size: 10px;
				span span{
					display: none;
				}
				&::after{
					inline-size: 16px;
				}
			}
		}
	}
}
.map{	
	inline-size: max-content;
	margin-block-end: 24px;
	padding: 18px 24px;
	border: 1px solid var(--clr-gray-100);
	border-radius: 8px;
	&__title{
		margin-block-end: 12px;
		padding-block-end: 6px;
		text-transform: uppercase;
		border-block-end: 1px solid var(--clr-gray-100);
	}
	&__list{
		display: flex;
		flex-direction: column;
		gap: 8px 0;
		counter-reset: pages;
		a{
			display: flex;
			gap: 0 10px;
			color: var(--clr-text);
			transition: color var(--tr);
			&:hover{
				color: var(--clr-orange-100);
			}
		}
		a::before {         
			counter-increment: pages;
			content: counter(pages)'. ';
		}
		a::after {			
			content: '\276F';
			margin-inline-start: auto;
		}
	}
}
</style>