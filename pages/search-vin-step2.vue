<script setup>
const rowItems = ref(['AUDI', 'A6', '2.4 AVANT', '2001', 'Европа', 'ALF V6 / 193 hp', '105724', 'EZZ (5A)', '4Z4Z'])
// классификатор
const tabs = ref(['Общий', 'От производителя'])
const tabIndex = ref(0)
// для карточек категорий
const categories = ref([
	{name: 'Электрика', img: '01'},
	{name: 'Подготовка топливной смеси', img: '02'},
	{name: 'Система подачи топлива', img: '03'},
	{name: 'Ремённый привод', img: '04'},
	{name: 'Система выпуска', img: '05'},
	{name: 'Двигатель', img: '06'},
	{name: 'Фильтры', img: '07'},
	{name: 'Электрика', img: '01'},
	{name: 'Подготовка топливной смеси', img: '02'},
	{name: 'Система подачи топлива', img: '03'},
	{name: 'Ремённый привод', img: '04'},
	{name: 'Система выпуска', img: '05'},
	{name: 'Двигатель', img: '06'},
	{name: 'Фильтры', img: '07'},
])
// показ контента при кликах на классификаторе
const showContent = ref(0)
onMounted(()=>{
	let options = document.querySelectorAll('.classifier__option')
	let spans = document.querySelectorAll('.classifier__options span')
	options.forEach(option => {
		option.addEventListener('click', (e) => {			
			spans.forEach(span => span.classList.remove('active'))
			let parent = e.currentTarget.parentElement
			if (parent.parentElement.classList.contains('classifier__panel')) {
				showContent.value = 0
			} else showContent.value = 1
			parent.classList.toggle('active')
			parent.firstElementChild.classList.toggle('active')
			parent.querySelector('i').classList.toggle('rotate')
		})
	})
	spans.forEach(span => {
		span.addEventListener('click', (e) => {
			showContent.value = 2
			spans.forEach(span => span.classList.remove('active'))			
			e.currentTarget.classList.add('active')
		})
	})
})
</script>
<template>
	<NuxtLayout>
		<TheBreadcrum />	
		<ThePageTitle class="search-vin-brands__title" title="Каталог AUDI A6 Avant 2.4" />
		<div class="search-vin">			
			<div class="search-vin-table">
				<TheSearchVinTableHead />
				<div class="search-vin-table__row">
					<span v-for="item in rowItems">{{item}}</span>
				</div>
			</div>
		</div>
		<div class="search-vin-res">
			<div class="search-vin-res__aside">
				<div class="s-form-wrap">
					<div class="s-img">
						<img src="/images/brands/audi.png" alt="">
					</div>
					<form class="s-form">
						<input type="text" placeholder="Введите название узла или детали">
						<button><i class="icon-search"></i></button>
					</form>
				</div>
				<div class="classifier">
					<p class="classifier__title">Классификатор</p>
					<div class="classifier__tabs-container">
						<div class="classifier__tabs">
							<span 
								v-for="tab,index in tabs" 
								:key="tab"
								@click="tabIndex = tabIndex > 0 ? 0 : 1"
								class="classifier__tab"
								:class="{active: tabIndex === index}"
							>{{tab}}</span>							
						</div>
						<div class="classifier__panels">
							<div 
							class="classifier__panel" 
							v-for="panel,index in tabs.length"
							:class="{active: tabIndex === index}"
							>
								<div class="classifier__select">
									<span class="classifier__option">Детали для ТО<i class="icon-arrow-down"></i></span>
									<div class="classifier__select">
										<span class="classifier__option">Фильтр масляный<i class="icon-arrow-down"></i></span>
										<div class="classifier__options">
											<span>Фильтр масляный</span>											
											<span>Фильтр масляный</span>
										</div>
									</div>
									<div class="classifier__select">
										<span class="classifier__option">Фильтр масляный<i class="icon-arrow-down"></i></span>
										<div class="classifier__options">
											<span>Фильтр масляный</span>											
											<span>Фильтр масляный</span>
										</div>
									</div>
									<div class="classifier__select">
										<span class="classifier__option">Фильтр масляный<i class="icon-arrow-down"></i></span>
										<div class="classifier__select">
											<span class="classifier__option">Фильтр масляный<i class="icon-arrow-down"></i></span>
											<div class="classifier__options">
												<span>Фильтр масляный</span>
												<span>Фильтр масляный</span>												
											</div>
										</div>
										<div class="classifier__select">
											<span class="classifier__option">Фильтр масляный<i class="icon-arrow-down"></i></span>
											<div class="classifier__options">
												<span>Фильтр масляный</span>
												<span>Фильтр масляный</span>												
											</div>
										</div>
										<div class="classifier__select">
											<span class="classifier__option">Фильтр масляный<i class="icon-arrow-down"></i></span>
											<div class="classifier__options">
												<span>Фильтр масляный</span>
												<span>Фильтр масляный</span>												
											</div>
										</div>
									</div>
								</div>
								<div class="classifier__select">
									<span class="classifier__option">Двигатель<i class="icon-arrow-down"></i> </span>
									<div class="classifier__select">
										<span class="classifier__option">Поршни<i class="icon-arrow-down"></i> </span>
										<div class="classifier__options">
											<span>Поршни</span>
											<span>Поршни</span>
											<span>Поршни</span>
											<span>Поршни</span>
										</div>
									</div>
									<div class="classifier__select">
										<span class="classifier__option">Поршни<i class="icon-arrow-down"></i> </span>
										<div class="classifier__select">
											<span class="classifier__option">Поршни<i class="icon-arrow-down"></i> </span>
											<div class="classifier__options">
												<span>Поршни</span>
												<span>Поршни</span>
												<span>Поршни</span>
												<span>Поршни</span>
											</div>
										</div>
									</div>
								</div>
							</div>				
						</div>
					</div>
				</div>				
			</div>
			<div class="search-vin-res__content">
				<div class="auto-grid mbe-47" v-show="showContent === 0">
					<NuxtLink to="/" class="card-cat" v-for="category,index in categories" :key="category">
						<div class="card-cat__img">
							<img :src="`/images/catalog/${category.img}.png`" alt="">
						</div>
						<div class="card-cat__title">{{category.name}}</div>
					</NuxtLink>					
				</div>
				<div class="products-picked auto-grid" v-show="showContent === 1">
					<NuxtLink to="/" class="products-picked__item" v-for="item in 5">
						<div class="products-picked__item-img">
							<img src="/images/classifier/thumb.png" alt="">
						</div>
						<p class="products-picked__item-text">Фильтр масляный</p>
					</NuxtLink>
				</div>
				<div class="product-picked" v-show="showContent === 2">
					<div class="product-picked__img">
						<img src="/images/classifier/img.png" alt="">
						<div class="tooltip">
							<div class="tooltip__marker">22</div>
							<div class="tooltip__desc">
								<div class="tooltip__desc-l">
									<p class="t-name fw-b">Фильтр масляный</p>
									<p class="t-number">VAG 078115189H</p>
									<BaseButton class="t-btn-l" text="Цена" />
								</div>
								<div class="tooltip__desc-r">
									<div class="t-img">
										<img src="/images/misc/manager.jpg" alt="">
									</div>
									<button class="t-btn-r"><i class="icon-chat"></i>Помочь?</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>
<style lang="scss">
.search-vin-res{
	display: grid;
	grid-template-columns: 385px 1fr;
	gap: 0 var(--gutter);
	margin-block-start: 24px;
	&__aside{}	
	&__content{
		align-self: start;		
		justify-self: end;
		max-inline-size: 1060px;		
		inline-size: 100%;		
	}
}
.s-form-wrap{
	display: grid;
	margin-block-end: 32px;
}
.s-img{
	justify-self: center;
	max-inline-size: 149px;
	margin-block-end: 16px;
}
.s-form{
	display: flex;
	gap: 0 4px;
	input{
		flex-grow: 1;
		display: flex;
		align-items: center;
		padding-inline: 24px 41px;
		border: 1px solid var(--clr-gray);
		border-radius: 8px 0 0 8px;
		&::placeholder{
			color: var(--clr-gray);
		}
		&:focus-visible::placeholder{
			color: transparent;
		}
		&:focus-visible{
			outline: none;
		}
	}
	button{
		display: grid;
		place-items: center;
		inline-size: 53px;
		block-size: 39px;
		background-color: var(--clr-black);
		border-radius: 0 8px 8px 0;
		transition: background-color var(--tr);
		i{
			color: var(--clr-white);
		}
		&:hover{
			background-color: var(--clr-orange-100);
		}
	}
}
.classifier{
	--pad-i-s: 32px;
	&__title{
		margin-block-end: 16px;
		color: var(--clr-gray);
	}
	&__tabs{
		display: flex;
		gap: 0 32px;
		margin-block-end: 32px;
	}
	&__tab{
		cursor: pointer;
		&.active{
			color: var(--clr-orange-100);
			font-weight: var(--fw-b);
		}
	}
	&__panels{}
	&__panel{
		display: none;
		border-block: 1px solid var(--clr-gray);
		& .classifier__select:not(:last-child) {
			border-block-end: 1px solid var(--clr-gray);
		}
		&.active{
			display: block;
		}
	}
	&__select{
		&>.classifier__select{
			margin-inline-start: var(--pad-i-s);
			display: none;
		}		
		&.active>.classifier__select{
			display: block;			
		}
		&.active>.classifier__option{
			border-block-end: 1px solid var(--clr-gray);		
		}				
		&.active>.classifier__options{
			display: grid;			
		}				
	}	
	&__option{
		display: flex;
		justify-content: space-between;
		align-items: center;
		block-size: 38px;
		padding-inline-end: 24px;		
		cursor: pointer;		
		transition: color var(--tr);
		i{
			transition: transform var(--tr);
		}
		i.rotate{
			transform: rotate(-180deg);
		}
		&:hover{
			color: var(--clr-orange-100);
		}
		&.active{
			font-weight: var(--fw-b);
		}
	}	
	&__options{
		display: grid;
		padding-inline-start: var(--pad-i-s);
		display: none;
		&>*{
			padding-block: 8px;			
			cursor: pointer;
			transition: color var(--tr);			
			&:hover{
				color: var(--clr-orange-100);
			}			
			&:not(:last-child){
				border-block-end: 1px solid var(--clr-gray);	
			}
			&.active{
				color: var(--clr-orange-100);
				font-weight: var(--fw-b);
			}
		}
		
	}
}
.products-picked{
	--min-w: 300px;
	&__item{
		display: grid;
		place-items: center;		
		padding: 10px 0 19px;
		color: var(--clr-black);
		border: 1px solid var(--clr-gray);
		border-radius: 8px;
		transition: color var(--tr), border-color var(--tr);
		&-img{
			overflow: hidden;
			max-block-size: 274px;
			margin-block-end: 24px;
			img{
				aspect-ratio: 1;
				inline-size: 100%;
			}
		}
		&:hover{
			color: var(--clr-orange-100);
			border-color: var(--clr-orange-100);
		}
	}
}
.product-picked{
	margin-block-start: 54px;
	&__img{
		position: relative;
		img{
			inline-size: 100%;
		}
	}
}
.tooltip{
	--marker-w: 64px;
	--delta: 7px;
	position: absolute;
	inset-inline-start: 45%;
	inset-block-start: 25%;
	&__marker{
		display: grid;
		place-items: center;
		inline-size: var(--marker-w);
		block-size: var(--marker-w);
		color: var(--clr-white);
		background-color: var(--clr-orange-100);
		border-radius: 4px;
		cursor: pointer;
	}
	&__desc{
		position: absolute;
		inset-inline-end: 0;
		inset-block-start: 0;
		transform: translateY(calc(-100% - var(--delta)));
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0 98px;
		padding: 24px;
		background-color: var(--clr-white);
		border: 1px solid var(--clr-black);
		border-radius: 8px;	
		&-l{
			display: grid;	
			grid-template-rows: min-content min-content 1fr;		
		}	
		.t-name{
			inline-size: max-content;
			margin-block-end: 8px;
		}		
		.t-number{
			inline-size: max-content;			
		}		
		.t-btn-l{			
			inline-size: 126px;
			block-size: 44px;
			margin-block-start: auto;
			padding-inline: unset;
		}
		&-r{
			display: grid;
		}
		.t-img{
			overflow: hidden;
			inline-size: 110px;
			block-size: 92px;
			margin-block-end: 4px;
			border-radius: 8px 8px 0 0;
			img{
				inline-size: 100%;
			}
		}
		.t-btn-r{
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0 4px;
			inline-size: 110px;
			block-size: 36px;
			color: var(--clr-white);
			background-color: var(--clr-black);
			font-size: 10px;
			text-transform: uppercase;
			border-radius: 0 0 8px 8px;
			transition: background-color var(--tr);
			i{
				font-size: 16px;
			}
			&:hover{
				background-color: var(--clr-orange-100);
			}
		}
	}
}
</style>