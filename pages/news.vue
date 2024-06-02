<template>
	<NuxtLayout>
		<ul class="breadcrums">
			<li class="breadcrums__item">
				<NuxtLink to="/" class="breadcrums__link">Главная</NuxtLink>
			</li>			
			<li class="breadcrums__item">
				<span class="breadcrums__idle">Новости</span>
			</li>
		</ul>
		<section class="columns-2">
			<ThePageTitle class="columns-2__title" title="Новости" />
			<div class="columns-2__content news">
				<ul class="news__list">
					<li class="news__list-item">
						<NuxtLink class="news-item" to="/">
							<div class="news-item__img">
								<img src="/assets/images/news/01.jpg" alt="Новость">
							</div>
							<time class="news-item__time">06.08.2024</time>
							<h3 class="news-item__title h3">Открытие магазинов в 23 городах России!</h3>
							<p class="news-item__text">Интернет-магазин запущен из Ростова-на-Дону. Интернет-магазин запущен из Ростова-на-Дону. Интернет-магазин запущен из Ростова-на-Дону</p>
							<p class="news-item__link">Подробнее</p>
						</NuxtLink>
					</li>				
					<li class="news__list-item">
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
					<li class="news__list-item">
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
					<li class="news__list-item">
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
				<BaseButton class="news__btn" text="Больше новостей" />
			</div>
		</section>		
	</NuxtLayout>
</template>