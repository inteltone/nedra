<template>
	<NuxtLayout>
		<ul class="breadcrums">
			<li class="breadcrums__item">
				<NuxtLink to="/" class="breadcrums__link">Главная</NuxtLink>
			</li>
			<li class="breadcrums__item">
				<span class="breadcrums__idle">Поставщикам</span>
			</li>
		</ul>
		<section class="columns-2 columns-2--suppliers">
			<ThePageTitle class="columns-2__title" title="Поставщикам" />
			<div class="columns-2__content suppliers">
				<div class="suppliers__content">
				<p>Мы рассматриваем сотрудничество с поставщиками и производителями как одно из основных направлений развития компании. Мы понимаем заинтересованность поставщиков в долгосрочном сотрудничестве и готовы предоставить все необходимые условия для такого сотрудничества.</p>
				<p>Нам очень интересно сотрудничество с компаниями имеющие склады в регионах Российской Федерации. Мы готовы работать с постащиками имеющими даже небольшое наличие на собственных складах. Возможности нашей системы позволяют принимать к выгрузке прайс-листы любого формата. Если вас заинтересовало сотруднечество с нашей компанией пишите нам на email postav@carex-parts.com или заполните ниже форму</p>
			</div>
			</div>
		</section>			
		<section class="suppliers-form-wrap ">
			<div class="suppliers-title-block">
				<h2 class="suppliers-title-block__title h2">Заинтересовало сотрудничество?</h2>
				<div class="suppliers-title-block__subtitle">
					<p>Нам очень интересно сотрудничество с компаниями имеющие склады в регионах Российской Федерации. Мы готовы работать с постащиками имеющими даже небольшое наличие на собственных складах.</p>						
				</div>
			</div>
			<form class="suppliers-form">
				<div class="form-group form-group--suppliers">
					<label for="name">Имя</label>
					<input type="text" id="name" placeholder="Имя">
				</div>
				<div class="form-group form-group--suppliers">
					<label for="lastname">Фамилия</label>
					<input type="text" id="lastname" placeholder="Фамилия">
				</div>
				<div class="form-group form-group--suppliers">
					<label for="email">Электронная почта</label>
					<input type="email" id="email" placeholder="Электронная почта">
				</div>
				<div class="form-group form-group--suppliers">
					<label for="tel">Телефон</label>
					<input type="tel" id="tel" placeholder="Телефон">
				</div>
				<textarea name="message" placeholder="Сообщение"></textarea>
				<BaseButton class="suppliers-form__btn" text="Отправить" />
			</form>
		</section>		
	</NuxtLayout>
</template>