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
		<ThePageTitle title="Новости" />
		<section class="news">			
			<ul class="news__list">
				<li class="news__list-item">
					<NuxtLink class="news-single" to="/">
						<div class="news-single__img">
							<img src="/assets/images/news/01.jpg" alt="Новость">
						</div>
						<time class="news-single__time">06.08.2024</time>
						<h3 class="news-single__title h3">Открытие магазинов в 23 городах России!</h3>
						<p class="news-single__text">Интернет-магазин запущен из Ростова-на-Дону</p>
						<p class="news-single__link">Подробнее</p>
					</NuxtLink>
				</li>				
				<li class="news__list-item">
					<NuxtLink class="news-single" to="/">
						<div class="news-single__img">
							<img src="/assets/images/news/01.jpg" alt="Новость">
						</div>
						<time class="news-single__time">06.08.2024</time>
						<h3 class="news-single__title h3">Открытие магазинов в 23 городах России!</h3>
						<p class="news-single__text">Интернет-магазин запущен из Ростова-на-Дону</p>
						<p class="news-single__link">Подробнее</p>
					</NuxtLink>
				</li>				
				<li class="news__list-item">
					<NuxtLink class="news-single" to="/">
						<div class="news-single__img">
							<img src="/assets/images/news/01.jpg" alt="Новость">
						</div>
						<time class="news-single__time">06.08.2024</time>
						<h3 class="news-single__title h3">Открытие магазинов в 23 городах России!</h3>
						<p class="news-single__text">Интернет-магазин запущен из Ростова-на-Дону</p>
						<p class="news-single__link">Подробнее</p>
					</NuxtLink>
				</li>				
				<li class="news__list-item">
					<NuxtLink class="news-single" to="/">
						<div class="news-single__img">
							<img src="/assets/images/news/01.jpg" alt="Новость">
						</div>
						<time class="news-single__time">06.08.2024</time>
						<h3 class="news-single__title h3">Открытие магазинов в 23 городах России!</h3>
						<p class="news-single__text">Интернет-магазин запущен из Ростова-на-Дону</p>
						<p class="news-single__link">Подробнее</p>
					</NuxtLink>
				</li>				
			</ul>
			<BaseButton class="news__btn" text="Больше новостей" />
		</section>
	</NuxtLayout>
</template>
<style lang="scss">
.news{
	display: grid;
	grid-template-columns: repeat(12,1fr);
	gap: 32px 20px;
	margin-block-start: var(--first-block-mbs);
	&__list{
		grid-column: 5 / -1;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 42px 20px;
		&-item{

		}
	}
	&__btn{
		grid-column: 5 / -1;
	}
}
.news-single{
	color: var(--clr-text);
	&__img{
		overflow: hidden;
		aspect-ratio: 1.5476;
		margin-block-end: 20px;
		border-radius: 8px;
		&:hover, &:focus-visible{
		img{
			transform: scale(1.05);
		}
	}
		img{
			inline-size: 100%;
			block-size: 100%;
			object-fit: cover;
			transition: transform var(--tr);
		}
	}
	&__time{
		display: block;
		margin-block-end: 12px;
	}
	&__title{
		margin-block-end: 4px;
	}
	&__text{
		margin-block-end: 24px;
	}
	&__link{
		text-transform: uppercase;
		text-decoration-line: underline;
  		text-underline-offset: 3px;
		transition: color var(--tr);
		  &:hover, &:focus-visible{		
			color: var(--clr-orange-100);
	}
	}	
}
</style>