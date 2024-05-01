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
		<ThePageTitle title="Доставка" />
		<section class="delivery">
			<div class="delivery__item">
				<img class="delivery__item-img" src="/assets/images/delivery/company.png" alt="">
				<h3 class="delivery__item-title h3">Транспортной компанией</h3>
				<div class="delivery__item-desc">
					<p>Доставка любой транспортной компанией работающей на территории РФ</p>					
				</div>
			</div>
			<div class="delivery__item">
				<img class="delivery__item-img" src="/assets/images/delivery/post.png" alt="">
				<h3 class="delivery__item-title h3">Почтой России</h3>
				<div class="delivery__item-desc">
					<p>Доставка осуществляется в регионы от 7 до 30 дней.</p>					
				</div>
			</div>
			<div class="delivery__item">
				<img class="delivery__item-img" src="/assets/images/delivery/pickup.png" alt="">
				<h3 class="delivery__item-title h3">Самовывоз</h3>
				<div class="delivery__item-desc">
					<p>Самовывоз возможен из наших офисов выдачи в вашем городе</p>					
				</div>
			</div>
		</section>
	</NuxtLayout>
</template>
<style lang="scss">
.delivery{
	display: grid;
	grid-template-columns: repeat(12,1fr);
	gap: 80px 20px;
	padding-block-start: 30px;
	&__item{
		position: relative;
		padding: 116px 37px 74px;
		background-color: var(--clr-gray-25);
		border-radius: 24px;
		&-title{
			margin-block-end: 16px;
			font-size: 16px;
		}
		&-desc > p + p{
			margin-block-start: 16px;
		}
		& img{
			inset-block-start: -60px;			
		}
		&:nth-child(1), &:nth-child(3){
			grid-column: 5 / span 4;			
		}
		&:nth-child(2){
			grid-column: 9 / span 4;			
		}
		&-img{
			position: absolute;
			inset-inline-start: 37px;			
		}
	}
}
</style>