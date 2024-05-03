<template>
	<NuxtLayout >		
		<section class="com-block">
			<ThePageTitle class="com-block__title" title="Регистрация" />
			<div class="com-block__content registration">
				<form class="registration__form">
					<div class="form-block">
						<div class="input-group">
							<label for="name">Имя</label>
							<input type="text" id="name" placeholder="Имя">
							<div class="input-error">
								Введите корректное имя. Потребуется при получении заказа
							</div>
						</div>
						<div class="input-group">
							<label for="lastname">Фамилия</label>
							<input type="text" id="lastname" placeholder="Фамилия">
							<div class="input-error">
								Введите корректную  фамилию. Потребуется при получении заказа
							</div>
						</div>
						<div class="input-group">
							<label for="password">Пароль</label>
							<input type="password" id="password" placeholder="Пароль">
							<div class="input-error">
								Минимальная длина пароля — 6 символов
							</div>
						</div>
						<div class="input-group">
							<label for="tel">Телефон</label>
							<input type="text" id="tel" placeholder="+7 800 494 17 18">
							<div class="input-error">
								Необходим для отслеживания и получения заказов
							</div>
						</div>
					</div>
					<div class="form-agreement">
						<div class="form-agreement__checkbox">
							<input type="checkbox">
						</div>
						<div class="form-agreement__text">
							<p>Я принимаю условия <NuxtLink class="link" to="/">Оферты покупателям</NuxtLink> и соглашаюсь на обработку персональных данных, размещаемых на <NuxtLink class="link" to="/">nerdaparts.ru</NuxtLink>.</p>
							<p>С содержанием <NuxtLink class="link" to="/">Политики в отношении обработки персональных данных</NuxtLink> ознакомлен.</p>
						</div>
					</div>
					<BaseButton class="registration__form-btn" text="Зарегистрироваться" disabled="true" />
				</form>
			</div>
		</section>		
	</NuxtLayout>
</template>

<style lang="scss">
	.registration{
		&__form{
			--label-w: 115px;
			--label-mie: 38px;
			.form-block{
				display: grid;
				gap: 8px 0;
				margin-block-end: 32px;
			}
			.input-group{
				display: flex;
				align-items: center;				
				label{					
					min-inline-size: var(--label-w);
					padding-inline-start: 45px;
					margin-inline-end: var(--label-mie);
				}
				input{
					min-inline-size: 367px;
					block-size: 57px;
					margin-inline-end: 20px;
					padding-inline: 24px;
					border: 1px solid var(--clr-gray-100);
					border-radius: 8px;
					&:focus-visible{
						outline: none;
						border-color: var(--clr-black);
					}
					&::placeholder{
						color: var(--clr-gray-100);
					}
					&:focus-visible::placeholder{
						color: transparent;
					}
				}
			}
			.form-agreement{
				display: flex;
				gap: 0 20px;
				padding-inline-start: calc(var(--label-mie) + var(--label-w));
				&__checkbox{
					position: relative;
					transform: translateY(3px);
					min-inline-size: 16px;
					block-size: 16px;
					background-color: #D9D9D9;
					border-radius: 4px;
					input{
						position: absolute;
						inset: 0;
						margin: auto;
						opacity: 0;
						cursor: pointer;
					}
					&:has(input:checked){
						&::before{
							content: '';
							position: absolute;
							inline-size: 16px;
							block-size: 16px;
							background-color: var(--clr-black);
							background-image: url("data:image/svg+xml,%3Csvg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.29289 1.29289C7.68342 0.902369 8.31658 0.902369 8.70711 1.29289C9.09763 1.68342 9.09763 2.31658 8.70711 2.70711L4 7.41421L0.292893 3.70711C-0.0976311 3.31658 -0.0976311 2.68342 0.292893 2.29289C0.683417 1.90237 1.31658 1.90237 1.70711 2.29289L4 4.58579L7.29289 1.29289Z' fill='%23FF5E00'/%3E%3C/svg%3E");
							background-repeat: no-repeat;
							background-position: center;
							border-radius: 4px;
						}
					}
				}
				&__text{
					max-inline-size: 663px;
					margin-block-end: 49px;
					&>*+*{
						margin-block-start: 20px;
					}
					.link{
						color: var(--clr-text);
						text-decoration-line: underline;
  						text-underline-offset: 3px;
						transition: text-decoration-color var(--tr), color var(--tr);
						&:hover{
							color: var(--clr-orange-100);
							text-decoration-color: transparent;
						}
					}
				}
			}
			&-btn{
				margin-inline-start: calc(var(--label-mie) + var(--label-w));
				&:disabled{
					color: var(--clr-text);
					background-color: var(--clr-gray-100);
					cursor: not-allowed;
				}
			}
		}
	}
	
</style>