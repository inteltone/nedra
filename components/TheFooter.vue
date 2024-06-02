<template>
	<footer class="footer full">
		<div class="footer__top container">
			<div class="footer__top-inner">
				<div class="footer__top-title h2">Остались вопросы?</div>
				<form class="footer__top-form">
					<input class="input" type="text" placeholder="Введите ваш e-mail или номер телефон">
				</form>
				<button class="footer__top-btn btn-submit">
					<i class="icon-call"></i>
					Перезвоните мне
				</button>
				<button class="footer__top-btn btn-manager">
					<i class="icon-chat"></i>
					Связь с менеджером
				</button>
			</div>
		</div>
		<div class="footer__btm container">
			<div class="footer__btm-inner">
				<div class="footer__btm-menus">
					<div class="menu-wrap menu-left">
						<div class="title h3">Клиентам</div>
						<div class="menu">
							<NuxtLink class="link" to="/">Как сделать заказ</NuxtLink>
							<NuxtLink class="link" to="/">Условия гарантии</NuxtLink>
							<NuxtLink class="link" to="/">Оплата</NuxtLink>
							<NuxtLink class="link" to="/">Политика конфиденциальности</NuxtLink>
							<NuxtLink class="link" to="/">Доставка</NuxtLink>
							<NuxtLink class="link" to="/">Соглашение об авторских правах</NuxtLink>
							<NuxtLink class="link" to="/">VIN запрос</NuxtLink>
							<NuxtLink class="link" to="/">Оферта</NuxtLink>
							<NuxtLink class="link" to="/map">Карта</NuxtLink>
						</div>
					</div>
					<div class="menu-wrap menu-mid">
						<div class="title h3">Партнёрам</div>
						<div class="menu">
							<NuxtLink class="link" to="/">О компании</NuxtLink>
							<NuxtLink class="link" to="/">Франчайзинг</NuxtLink>
							<NuxtLink class="link" to="/">Поставщикам</NuxtLink>
						</div>
					</div>
					<div class="menu-wrap menu-right">
						<div class="title h3">Каталоги</div>
						<div class="menu">
							<NuxtLink class="link" to="/">Поиск по VIN</NuxtLink>
							<NuxtLink class="link" to="/">Каталог автомобилей</NuxtLink>
							<NuxtLink class="link" to="/">Кузовные детали и оптика</NuxtLink>
							<NuxtLink class="link" to="/">Моторные масла</NuxtLink>
							<NuxtLink class="link" to="/">Трансмиссионные масла</NuxtLink>
							<NuxtLink class="link" to="/">Шины</NuxtLink>
							<NuxtLink class="link" to="/">Аксессуары</NuxtLink>
							<NuxtLink class="link" to="/">Аккумуляторные батареи</NuxtLink>
							<NuxtLink class="link" to="/">Автосвет</NuxtLink>
							<NuxtLink class="link" to="/">Автостёкла</NuxtLink>
						</div>
					</div>
				</div>
				<div class="footer__btm-extra extra">
					<p class="extra__title h3">К оплате принимаем</p>
					<p class="extra__desc">Вся информация на сайте — собственность ООО “Франчайзинг Плюс”. Публикация информации с сайта без разрешения запрещена. Все права защищены</p>
					<BaseButton class="extra__btn" text="Обратная связь" />
					<a class="extra__dev" href="https://bearlogics.ru" target="_blank">
						<p class="extra__dev-text">Сайт разработан компанией</p>
						<div class="logo-bearlogics">
							<img src="/assets/images/svg/misc/logo-bearlogics.svg" alt="">
							<i class="bear-anim"></i>
						</div>
					</a>
				</div>
			</div>
		</div>
	</footer>
</template>