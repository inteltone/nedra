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
		<section class="columns-2 columns-2--shop">
			<ThePageTitle class="columns-2__title" title="Интернет-магазин в Ростове-на-Дону" />
			<div class="columns-2__content shop">
				<div class="shop__map">
					<img src="/assets/images/misc/map-shop.png" alt="">
				</div>
			</div>
		</section>
		<ul class="advantages auto-grid">
			<BaseAdvantage icon="near">				
				<p>Ростов-на-Дону, ул. Михаила Нагибина, д. 155</p>
			</BaseAdvantage>
			<BaseAdvantage icon="schedule">
				<p><strong>Пн-Пт</strong> с 09:00 до 18:00</p>
				<p><strong>Сб, Вс</strong> Выходной</p>
			</BaseAdvantage>
			<BaseAdvantage icon="call">
				<p><a href="tel:+78004971880">+7 800 497 18 80</a></p>
				<p><a href="mail:ysa@carex-parts.com">ysa@carex-parts.com</a></p>
			</BaseAdvantage>			
		</ul>
	</NuxtLayout>
</template>