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
		<section class="com-block">
			<ThePageTitle class="com-block__title" title="Оплата" />
			<div class="com-block__content oplata">
				<div class="com-card">
					<div class="com-card__img">
						<img src="/assets/images/payment/money.png" alt="">
					</div>
					<div class="com-card__content">
						<h3 class="com-card__title h3">Наличный расчёт</h3>
						<div class="com-card__desc">
							<p>Заказ оплачивается наличными при оформлении заказав пункте выдачи. Вместе с бланком заказа выдаётся кассовый чек. Если способ оплаты не предложен, значит оплата при оформлении для выбранного способа доставки или вашего города недоступна.</p>
						</div>
					</div>
				</div>
				<div class="com-card">
					<div class="com-card__img">
						<img src="/assets/images/payment/cards.png" alt="">
					</div>
					<div class="com-card__content">
						<h3 class="com-card__title h3">Банковский перевод</h3>
						<div class="com-card__desc">
							<p>Оплатите заказ в любом банке, действующим на территории России. Банк взимает комиссию за перевод3 - 7% от стоимости заказа. Срок зачисления денежных средств 2-3 рабочих дня.</p>
						</div>
					</div>
				</div>						
			</div>
		</section>		
	</NuxtLayout>
</template>

<style lang="scss">
	.com-block{
		display: grid;
		grid-template-columns: repeat(12,1fr);
		gap: 0 20px;
		&__title{
			grid-column: 1 / span 4;
		}
		&__content{
			grid-column: 5 / -1;
		}
	}	
	.oplata{		
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}
	.com-card{	
		display: flex;
		flex-direction: column;		
		&__content{
			flex-grow: 1;
			margin-block-start: -130px;
			padding: 116px 37px 74px;
			background-color: var(--clr-gray-25);
			border-radius: 24px;
		}
		&__title{
			margin-block-end: 16px;
			font-size: 16px;
		}		
		&__desc > p + p{
			margin-block-start: 16px;
		}				
		&__img{
			overflow: hidden;
			position: relative;
			aspect-ratio: 1.1648;
			inline-size: 219px;
			margin-inline-start: 37px;
			img{	
				object-fit: cover;
			}
		}
	}
</style>