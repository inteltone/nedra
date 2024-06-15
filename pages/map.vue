<template>
	<NuxtLayout>	
		<div class="map-site">
			<p class="map-site__title">Карта сайта</p>
			<div class="map-site__list">
				<NuxtLink to="/oplata">Оплата</NuxtLink>
				<NuxtLink to="/delivery">Доставка</NuxtLink>
				<NuxtLink to="/suppliers">Поставщикам</NuxtLink>
				<NuxtLink to="/shop">Интернет-магазин</NuxtLink>
				<NuxtLink to="/news">Новости</NuxtLink>
				<NuxtLink to="/news-single">Страница новости</NuxtLink>
				<NuxtLink to="/registration">Регистрация</NuxtLink>
				<NuxtLink to="/search-artikul">Поиск по артикулу</NuxtLink>
				<NuxtLink to="/search-vin-brands">Поиск по VIN</NuxtLink>
				<NuxtLink to="/search-vin-step1">Поиск по VIN шаг 1</NuxtLink>
				<NuxtLink to="/search-vin-step2">Поиск по VIN шаг 2</NuxtLink>
				<NuxtLink to="/cabinet">Личный кабинет</NuxtLink>
				<NuxtLink to="/catalog">Каталог категорий</NuxtLink>
				<NuxtLink to="/card-product">Картачка продукта</NuxtLink>
				<NuxtLink to="/basket">Корзина</NuxtLink>
				<NuxtLink to="/zakaz">Оформление заказа</NuxtLink>
				<NuxtLink to="/404">404</NuxtLink>
				<NuxtLink to="/in-development">Страница в разработке</NuxtLink>
			</div>			
		</div>		
	</NuxtLayout>
</template>
<style lang="scss">
.map-site{	
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