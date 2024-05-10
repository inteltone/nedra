<script setup>
defineProps({
	title: String
})
</script>
<template>
	<div class="news-block container">
			<h2 class="news-block__title h2">{{ title }}</h2>
			<ul class="news-block__list auto-grid">
				<li class="news-block__list-item">
					<NuxtLink class="news-item" to="/">
						<div class="news-item__img">
							<img src="/assets/images/news/01.jpg" alt="Новость">
						</div>
						<time class="news-item__time">06.08.2024</time>
						<h3 class="news-item__title h3">Открытие магазинов в 23 городах России!</h3>
						<p class="news-item__text">Интернет-магазин запущен из Ростова-на-Дону. Интернет-магазин запущен из Ростова-на-Дону.</p>
						<p class="news-item__link">Подробнее</p>
					</NuxtLink>
				</li>				
				<li class="news-block__list-item">
					<NuxtLink class="news-item" to="/">
						<div class="news-item__img">
							<img src="/assets/images/news/01.jpg" alt="Новость">
						</div>
						<time class="news-item__time">06.08.2024</time>
						<h3 class="news-item__title h3">Открытие магазинов в 23 городах России!</h3>
						<p class="news-item__text">Интернет-магазин запущен из Ростова-на-Дону</p>
						<p class="news-item__link">Подробнее</p>
					</NuxtLink>
				</li>				
				<li class="news-block__list-item">
					<NuxtLink class="news-item" to="/">
						<div class="news-item__img">
							<img src="/assets/images/news/01.jpg" alt="Новость">
						</div>
						<time class="news-item__time">06.08.2024</time>
						<h3 class="news-item__title h3">Открытие магазинов в 23 городах России!</h3>
						<p class="news-item__text">Интернет-магазин запущен из Ростова-на-Дону</p>
						<p class="news-item__link">Подробнее</p>
					</NuxtLink>
				</li>				
				<li class="news-block__list-item">
					<NuxtLink class="news-item" to="/">
						<div class="news-item__img">
							<img src="/assets/images/news/01.jpg" alt="Новость">
						</div>
						<time class="news-item__time">06.08.2024</time>
						<h3 class="news-item__title h3">Открытие магазинов в 23 городах России!</h3>
						<p class="news-item__text">Интернет-магазин запущен из Ростова-на-Дону</p>
						<p class="news-item__link">Подробнее</p>
					</NuxtLink>
				</li>			
			</ul>
			<BaseButton class="news-block-btn" text="Все новости" />
		</div>
</template>
<style lang="scss">
.news-block{	
	grid-column: 1 / -1;
	display: grid;	
	&__title{
		margin-block-end: 24px;
	}
	&__list{
		margin-block-end: 48px;
		&.auto-grid{
			--min-w: 300px;
		}
	}	
}
</style>