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
		<ThePageTitle title="Интернет-магазин в Ростове-на-Дону" />
		<section class="shop">
			<div class="shop__map">
				<img src="/assets/images/misc/map.png" alt="">
			</div>
		</section>
	</NuxtLayout>
</template>
<style lang="scss">
.shop{
	display: grid;
	grid-template-columns: repeat(12,1fr);
	gap: 0 20px;
	margin-block-start: calc(var(--first-block-mbs) * 2);
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
}
</style>