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