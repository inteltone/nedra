<template>
	<NuxtLayout>
		<ul class="breadcrums">
			<li class="breadcrums__item">
				<NuxtLink to="/" class="breadcrums__link">Главная</NuxtLink>
			</li>
			<li class="breadcrums__item">
				<span class="breadcrums__idle">Оплата</span>
			</li>
		</ul>
		<ThePageTitle title="Оплата" />
		<section class="payment">
			<div class="payment__item">
				<img class="payment__item-img" src="/assets/images/payment/money.png" alt="">
				<h3 class="payment__item-title h3">Наличный расчёт</h3>
				<div class="payment__item-desc">
					<p>Заказ оплачивается наличными при оформлении заказав пункте выдачи. Вместе с бланком заказа выдаётся кассовый чек. Если способ оплаты не предложен, значит оплата при оформлении для выбранного способа доставки или вашего города недоступна.</p>					
				</div>
			</div>
			<div class="payment__item">
				<img class="payment__item-img" src="/assets/images/payment/cards.png" alt="">
				<h3 class="payment__item-title h3">Банковский перевод</h3>
				<div class="payment__item-desc">
					<p>Оплатите заказ в любом банке, действующим на территории России. Банк взимает комиссию за перевод3 - 7% от стоимости заказа. Срок зачисления денежных средств 2-3 рабочих дня.</p>					
				</div>
			</div>
		</section>
	</NuxtLayout>
</template>
<style lang="scss">
.payment{
	display: grid;
	grid-template-columns: repeat(12,1fr);
	gap: 0 20px;
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
		&:first-child{
			grid-column: 5 / span 4;			
		}
		&:last-child{
			grid-column: 9 / span 4;			
		}
		&-img{
			position: absolute;
			inset-inline-start: 37px;			
		}
	}

}
</style>