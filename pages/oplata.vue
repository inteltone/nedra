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
		<section class="columns-2">
			<ThePageTitle class="columns-2__title" title="Оплата" />
			<div class="columns-2__content oplata">
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