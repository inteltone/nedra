<template>
	<NuxtLayout>		
		<ThePageTitle title="Главная" />
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
			</div>
		</div>
	</NuxtLayout>
</template>
<style lang="scss">
.map{	
	inline-size: max-content;
	margin-block-start: 24px;
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