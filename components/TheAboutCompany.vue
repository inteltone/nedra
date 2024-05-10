<template>
	<section class="about-company">
		<h2 class="about-company__title">О компании</h2>
		<div class="about-company__desc">
			<p>Интернет-магазин автозапчастей NERDAParts - один из лидеров рынка продажи автозапчастей в России, наши филиалы расположены во многих городах страны, и каждый день обслуживают тысячи покупателей.</p>
			<p>Для клиентов нашего интернет магазина, мы регулярно обновляем каталоги автозапчастей и устанавливаем лучшие цены на оригиналы и аналоги. В ассортименте имеются детали для автомобилей всех производителей и моделей. Пользуясь нашими услугами, вы всегда можете быть уверены, что найдете именно то, что нужно вам сейчас, а выбранная запчасть будет доставлена строго в оговоренное время.</p>
		</div>
		<ul class="about-company__list advantages auto-grid">
				<BaseAdvantage icon="check-circle" title="Качественные запчасти">
					<p>для иномарок и отечественных авто</p>
				</BaseAdvantage>
				<BaseAdvantage icon="schedule" title="Быстрая доставка">
					<p>Заказ будет доставлен вовремя</p>
				</BaseAdvantage>
				<BaseAdvantage icon="groups" title="команда профи">
					<p>Поможем вам подобрать любые запчасти</p>
				</BaseAdvantage>			
				<BaseAdvantage icon="cart" title="Доступная цена">
					<p>Покупайте по честным ценам</p>
				</BaseAdvantage>			
			</ul>
	</section>
</template>
<style lang="scss">
.about-company{
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 128px 0;
	margin-block-end: 84px;
	padding-block: 64px 96px;
	border-block-start: 1px solid var(--clr-black);
	border-block-end: 1px solid var(--clr-black);
	&__title{
		grid-column: 1 / span 1;
		grid-row: 1 / span 1;
	}
	&__desc{
		grid-column: 2 / span 1;
		grid-row: 1 / span 1;
		&>*+*{
			margin-block-start: 20px;
		}
	}
	&__list{
		grid-column: 1 / -1;
		grid-row: 2 / span 1;
		&.advantages.auto-grid{
			--min-w: 300px;
		}
		.advantage{
			gap: 10px 0;
			padding: 33px 40px 24px;
			&__text{
				font-size: var(--fz-0);
			}
		}
	}
}
</style>