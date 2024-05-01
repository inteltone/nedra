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
		<ThePageTitle title="Поставщикам" />
		<section class="suppliers">
			<div class="suppliers__content">
				<p>Мы рассматриваем сотрудничество с поставщиками и производителями как одно из основных направлений развития компании. Мы понимаем заинтересованность поставщиков в долгосрочном сотрудничестве и готовы предоставить все необходимые условия для такого сотрудничества.</p>
				<p>Нам очень интересно сотрудничество с компаниями имеющие склады в регионах Российской Федерации. Мы готовы работать с постащиками имеющими даже небольшое наличие на собственных складах. Возможности нашей системы позволяют принимать к выгрузке прайс-листы любого формата. Если вас заинтересовало сотруднечество с нашей компанией пишите нам на email postav@carex-parts.com или заполните ниже форму</p>
			</div>
			<div class="suppliers__form-wrap">
				<div class="suppliers__title-block">
					<h2 class="suppliers__title h2">Заинтересовало сотрудничество?</h2>
					<div class="suppliers__subtitle">
						<p>Нам очень интересно сотрудничество с компаниями имеющие склады в регионах Российской Федерации. Мы готовы работать с постащиками имеющими даже небольшое наличие на собственных складах.</p>						
					</div>
				</div>
				<form class="suppliers__form">
					<div class="form-group">
						<label for="name">Имя</label>
						<input type="text" id="name" placeholder="Имя">
					</div>
					<div class="form-group">
						<label for="lastname">Фамилия</label>
						<input type="text" id="lastname" placeholder="Фамилия">
					</div>
					<div class="form-group">
						<label for="email">Электронная почта</label>
						<input type="email" id="email" placeholder="Электронная почта">
					</div>
					<div class="form-group">
						<label for="tel">Телефон</label>
						<input type="tel" id="tel" placeholder="Телефон">
					</div>
					<textarea name="message" placeholder="Сообщение"></textarea>
					<BaseButton class="btn" text="Отправить" />
				</form>
			</div>
		</section>
	</NuxtLayout>
</template>
<style lang="scss">
	.suppliers{
		display: grid;
		grid-template-columns: repeat(12,1fr);
		gap: 91px 20px;		
		&__content{
			grid-column: 5 / -1;
			&>p+p{
			margin-block-start: 20px;
			}		
		}
		&__form-wrap{
			grid-column: 1 / -1;
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 0 20px;
			padding: 39px 36px 39px 47px;
			background-color: var(--clr-gray-25);
			border-radius: 24px;
		}
		&__title-block{
			max-inline-size: 523px;
		}
		&__title{
			margin-block-end: 27px;
		}
		&__subtitle{
			&>p+p{
				margin-block-start: 20px;
			}
		}
		&__form{
			--f-gap: 12px;
			justify-self: end;
			display: flex;
			flex-wrap: wrap;
			gap: var(--f-gap);
			max-inline-size: 641px;
			inline-size: 100%;
			& input{
				inline-size: 100%;
			}
			.form-group{
				flex: 1 1 calc(50% - var(--f-gap) / 2);
			}
			textarea{
				flex-basis: 100%;
			}
			.btn{
				block-size: 48px;
				flex-basis: 100%;
			}
			
		}
	}
</style>