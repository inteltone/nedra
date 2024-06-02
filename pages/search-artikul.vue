<template>
	<NuxtLayout>
		<ul class="breadcrums">
			<li class="breadcrums__item">
				<NuxtLink to="/" class="breadcrums__link">Главная</NuxtLink>
			</li>
			<li class="breadcrums__item">
				<span class="breadcrums__idle">Поиск по артикулу</span>
			</li>
		</ul>
		<section class="columns-2 search-artikul">
			<ThePageTitle class="columns-2__title" title="Поиск по артикулу" />
			<div class="columns-2__content">
				<div class="search-artikul__table">
					<div class="search-artikul__table-row table-head">
						<span>Производитель</span>
						<span>Артикул</span>
						<span>Наименование</span>
						<span>Цена, ₽</span>
					</div>
					<NuxtLink to="/" class="search-artikul__table-row" v-for="item in 5">
						<span>CASE</span>
						<span>C110</span>
						<span>CASE C110</span>
						<span>2720</span>
					</NuxtLink>
				</div>
			</div>
		</section>		
	</NuxtLayout>
</template>