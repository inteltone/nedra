<template>
	<NuxtLayout>
		<ul class="breadcrums">
			<li class="breadcrums__item">
				<NuxtLink to="/" class="breadcrums__link">Главная</NuxtLink>
			</li>			
			<li class="breadcrums__item">
				<NuxtLink to="/" class="breadcrums__link">Новости</NuxtLink>
			</li>			
			<li class="breadcrums__item">
				<span class="breadcrums__idle">Страница новости</span>
			</li>
		</ul>
		<ThePageTitle title="Заголовок новости" />
		<section class="news-single">			
			<NuxtLink to="/" class="news-single__share">
				<i class="icon-share"></i>
				Поделиться новостью
			</NuxtLink>
			<div class="news-single__img">
				<img src="/assets/images/news/02.jpg" alt="Новость">
			</div>
			<div class="news-single__title">Заголовок новости</div>
			<div class="news-single__content">
				<p>С учётом сложившейся международной обстановки, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение анализа существующих паттернов поведения. Не следует, однако, забывать, что перспективное планирование в значительной степени обусловливает важность форм воздействия. И нет сомнений, что стремящиеся вытеснить традиционное производство, нанотехнологии ассоциативно распределены по отраслям. Как принято считать, стремящиеся вытеснить традиционное производство, нанотехнологии, инициированные исключительно синтетически, представлены в исключительно положительном свете. Принимая во внимание показатели успешности, базовый вектор развития требует от нас анализа приоретизации разума над эмоциями.</p>
				<p>С учётом сложившейся международной обстановки, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение анализа существующих паттернов поведения. Не следует, однако, забывать, что перспективное планирование в значительной степени обусловливает важность форм воздействия. И нет сомнений, что стремящиеся вытеснить традиционное производство, нанотехнологии ассоциативно распределены по отраслям. Как принято считать, стремящиеся вытеснить традиционное производство, нанотехнологии, инициированные исключительно синтетически, представлены в исключительно положительном свете. Принимая во внимание показатели успешности, базовый вектор развития требует от нас анализа приоретизации разума над эмоциями.</p>
			</div>
		</section>
		<TheNewsBlock title="Может быть интересно" />
	</NuxtLayout>
</template>
<style lang="scss">
.news-single{
	display: grid;
	grid-template-columns: repeat(12,1fr);
	&__share{
		grid-column: 1 / -1;
		justify-self: end;
		display: flex;
		align-items: center;
		gap: 10px;
		margin-block-end: 16px;
		color: var(--clr-text);
		transition: color var(--tr);		
		&:hover, &:focus-visible{
			color: var(--clr-orange-100);
		}
		[class^="icon-"]{
			font-size: 32px;
		}
	}
	&__img{
		grid-column: 1 / -1;
		overflow: hidden;
		aspect-ratio: 2.6101;
		margin-block-end: 64px;
		border-radius: 24px;
		img{
			inline-size: 100%;
			block-size: 100%;
			object-fit: cover;
		}
	}
	&__title{
		grid-column: 1 / -1;
		margin-block-end: 32px;
		font-size: 24px;
		line-height: 1.35;
		text-transform: uppercase;
	}
	&__content{
		grid-column: 1 / -1;
		columns: 2;
		gap: 20px;
		margin-block-end: 64px;
		& * {
			max-inline-size: 706px;
		}
		&>*+*{
			margin-block-start: 20px;
		}
	}
}

</style>