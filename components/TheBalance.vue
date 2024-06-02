<template>
	<div class="balance">
		<div class="balance__stats stats">
			<div class="stats__title-wrap">
				<div class="stats__title-block">
					<p class="description">Статистика баланса</p>
					<p>на период за 26.06.2024</p>
				</div>
				<BaseButton text="Пополнить баланс" />
			</div>
			<div class="stats__list">
				<div class="stats__item">
					<p>Состояние счёта</p>
					<p class="h2">0.00 <span class="ruble">&#x20BD;</span></p>
				</div>
				<div class="stats__item">
					<p>Всего в работе</p>
					<p class="h2">0.00 <span class="ruble">&#x20BD;</span></p>
				</div>
				<div class="stats__item">
					<p>В корзине</p>
					<p class="h2">0.00 <span class="ruble">&#x20BD;</span></p>
				</div>					
				<div class="stats__item">
					<p>Товары на складе</p>
					<p class="h2">0.00 <span class="ruble">&#x20BD;</span></p>
				</div>
				<div class="stats__item">
					<p>Баланс по выданным позициям</p>
					<p class="h2">0.00 <span class="ruble">&#x20BD;</span></p>
				</div>
			</div>
		</div>
		<form class="balance__filter">
			<div class="balance__filter-item">
				<span>от</span>
				<input type="date">
			</div>
			<div class="balance__filter-item">
				<span>до</span>
				<input type="date">
			</div>
			<BaseButton text="Фильтровать" />
		</form>
	</div>
</template>