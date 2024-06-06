<script setup>
// слайдер
const imgIndex = ref(0)
const images = ref(['03', '02', '01',])
function thumbClicked(index) {
	if(index === imgIndex.value) return
	imgIndex.value = index
}
</script>
<template>
	<div class="card__top-slider">
		<div class="card__top-slider-thumbs">
			<div class="thumb-img" v-for="img,index in images" @click="thumbClicked(index)">
				<img :src="`/images/card/${img}.png`" alt="">
			</div>						
		</div>
		<div class="card__top-slider-img">
			<img :src="`/images/card/${images[imgIndex]}.png`" alt="">
		</div>
	</div>
</template>