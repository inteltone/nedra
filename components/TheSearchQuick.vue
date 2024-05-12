<script setup>
const vin = ref('WAUBH54B11N111054')
const search_vin = ref('')
const categories = reactive(['Марка','Модель','Поколение','Модификация','Год'])
let isDisabled = ref(true)
</script>
<template>
	<section class="search-quick-wrap full container">
		<div class="search-quick">
			<div class="search-quick__inner">
				<form class="search-quick__vin">
					<label class="search-quick-title" for="search-vin">Поиск по <span>VIN</span></label>
					<div class="input-wrap">
						<input type="search" id="search-vin" placeholder="Введите ваш VIN" v-model="search_vin">
						<button><i class="icon-search"></i></button>
					</div>
					<span class="search-quick__vin-text">Например, <span @click="search_vin = vin">{{ vin }}</span></span>
				</form>
				<div class="search-quick__brand">
					<p class="search-quick-title">Поиск по Бренду</p>
					<form class="search-quick__brand-form">
						<div class="search-quick__brand-select select" :class="{active: false}"	v-for="item,index in categories" 
							:key="item">
							<div class="option active" @click="false">
							{{ item }}
							<i class="icon-arrow-down" :class="{rotate: false}"></i>
							</div>
							<div class="options" :class="{show: false}">
								<div class="option"> entry </div>
							</div>
						</div>												
						<button class="search-quick__brand-btn btn" :disabled="isDisabled">Поиск</button>
						<input type="hidden">
					</form>
				</div>
			</div>
		</div>
	</section>
</template>
<style lang="scss">
.search-quick-wrap{
	background-image: url('../assets/images/misc/search-quick-bg.jpg');
	background-position: center;
	background-size: cover;
}
.search-quick{
	display: grid;
	grid-template-columns: repeat(12,1fr);
	gap: 0 20px;
	padding-block: 90px 118px;
	&-title{
		margin-block-end: 21px;
		font-size: 32px;
		line-height: 1.1;
		span{
			font-family: var(--ff-sec);
		}
	}
	&__inner{
		grid-column: 2 / 12;
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 64px 0;
		background-color: hsl(0 0% 100% / .3);
		backdrop-filter: blur(8px);
		border-radius: 24px;
	}
	&__vin{
		display: grid;
		padding-inline: 64px;
		border-inline-end: 1px solid var(--clr-black);		
		.input-wrap{
			position: relative;
			display: grid;
			align-items: center;
			block-size: 42px;
			margin-block-end: 8px;
			padding-inline: 26px 100px;
			background-color: var(--clr-white);
			border-radius: 8px;
		}
		input{
			background-color: transparent;
			border: none;
			&:focus-visible{
				outline: none;
			}
			&::placeholder{
				color: var(--clr-gray);
			}
			&:focus-visible::placeholder{
				color: transparent;
			}
		}
		button{
			position: absolute;
			inset-inline-end: 5px;
			inset-block-start: 50%;
			transform: translateY(-50%);
			display: grid;
			place-items: center;
			inline-size: 32px;
			block-size: 32px;
			color: var(--clr-white);
			background-color: var(--clr-black);
			border-radius: 4px;
			transition: background-color var(--tr);
			@media(hover: hover){
			  &:hover{
				 background-color: var(--clr-orange-100);
			  }
			}
		}
		&-text{
			span{
				text-decoration-line: underline;
  				text-underline-offset: 3px;
				transition: color var(--tr), text-decoration-color var(--tr);
				cursor: pointer;
				@media(hover: hover){
				  &:hover{
					color: var(--clr-orange-100);
					text-decoration-color: transparent;
				  }
				}
			}
		}
	}
	&__brand{
		display: grid;		
		margin-inline: 64px;		
		&-form{
			display: grid;
			grid-template-columns: repeat(3,1fr);
			grid-template-rows: min-content;
			gap: 16px;
		}	
		&-select{
			border: none;
		}	
		&-btn{
			block-size: 42px;
			font-size: 10px;
			&:disabled{
				color: var(--clr-white);
				background-color: var(--clr-black);
			}
		}
	}
}
</style>