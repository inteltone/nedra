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
		<section class="com-block com-block--suppliers">
			<ThePageTitle class="com-block__title" title="Поставщикам" />
			<div class="com-block__content suppliers">
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
<style lang="scss">
	.com-block--suppliers{
		margin-block-end: 90px;	
	}
	.suppliers{
		&__content > * + * {
			margin-block-start: 20px;
		}		
		&-form-wrap{			
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 0 20px;
			padding: 39px 36px 39px 47px;
			background-color: var(--clr-gray-25);
			border-radius: 24px;
		}
		&-title-block{
			max-inline-size: 523px;
			&__title{
				margin-block-end: 27px;
			}
			&__subtitle>p+p{
				margin-block-start: 20px;				
			}
		}
		&-form{
			--f-gap: 12px;
			justify-self: end;
			display: flex;
			flex-wrap: wrap;
			gap: var(--f-gap);
			max-inline-size: 641px;
			inline-size: 100%;			
			.form-group{
				flex: 1 1 calc(50% - var(--f-gap) / 2);
				input{
					inline-size: 100%;
					&:focus-visible{
						border: 1px solid var(--clr-black);
					}
				}				
			}
			.form-group--suppliers{
				input{
					border: none;
				}
			}
			textarea{
				flex-basis: 100%;
			}
			&__btn{
				block-size: 48px;
				flex-basis: 100%;
				color: var(--clr-gray-100);
				text-transform: unset;
				transition: color var(--tr), background-color var(--tr);
				&:hover{
					color: var(--clr-white);
				}
			}			
		}
	}
</style>