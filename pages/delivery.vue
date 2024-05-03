<template>
	<NuxtLayout>
		<ul class="breadcrums">
			<li class="breadcrums__item">
				<NuxtLink to="/" class="breadcrums__link">Главная</NuxtLink>
			</li>
			<li class="breadcrums__item">
				<span class="breadcrums__idle">Доставка</span>
			</li>
		</ul>
		<section class="com-block">
			<ThePageTitle class="com-block__title" title="Доставка" />
			<div class="com-block__content delivery">
				<div class="com-card">
					<div class="com-card__img">
						<img src="/assets/images/delivery/company.png" alt="">
					</div>
					<div class="com-card__content">
						<h3 class="com-card__title h3">Транспортной компанией</h3>
						<div class="com-card__desc">
							<p>Доставка любой транспортной компанией работающей на территории РФ</p>
						</div>
					</div>
				</div>
				<div class="com-card">
					<div class="com-card__img">
						<img src="/assets/images/delivery/post.png" alt="">
					</div>
					<div class="com-card__content">
						<h3 class="com-card__title h3">Почтой России</h3>
						<div class="com-card__desc">
							<p>Доставка осуществляется в регионы от 7 до 30 дней.</p>
						</div>
					</div>
				</div>
				<div class="com-card">
					<div class="com-card__img">
						<img src="/assets/images/delivery/pickup.png" alt="">
					</div>
					<div class="com-card__content">
						<h3 class="com-card__title h3">Самовывоз</h3>
						<div class="com-card__desc">
							<p>Самовывоз возможен из наших офисов выдачи в вашем городе</p>
						</div>
					</div>
				</div>
			</div>
		</section>		
	</NuxtLayout>
</template>

<style lang="scss">
.delivery{		
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
}
.delivery :first-child{
	.com-card__img {
		aspect-ratio: 1.3889;
		inline-size: 263px;
	}	
}
</style>