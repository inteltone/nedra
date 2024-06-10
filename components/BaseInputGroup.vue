<script setup>
const model = defineModel()
const props = defineProps(['for','type','title','class','hint']
)
let type_password = ref('password') // для смены типа поля пароль
const showPassword = ()=>{
	type_password.value = type_password.value === 'password' ? 'text' : 'password'	
}
let type_confirm_password = ref('password') // для смены типа поля подтв пароля
const showConfirmPassword = ()=>{
	type_confirm_password.value = type_confirm_password.value === 'password' ? 'text' : 'password'
}
</script>
<template>
	<div class="input-group">
		<template v-if="props.type === 'text'">
			<label :for="props.for">{{props.title}}</label>
			<input 
				:type="props.type" 
				:id="props.for" 
				:placeholder="props.title"		
				v-model="model"
				:class="props.class"
			>
		</template>
		<template v-if="props.for === 'tel'">
			<label :for="props.for">{{props.title}}</label>
			<input 
				:type="props.type" 
				:id="props.for" 
				:placeholder="props.title"		
				v-model="model"
				:class="props.class"
			>
		</template>
		<template v-if="props.for === 'email'">
			<label :for="props.for">{{props.title}}</label>
			<input 
				:type="props.type" 
				:id="props.for" 
				:placeholder="props.title"		
				v-model="model"
				:class="props.class"
			>
		</template>
		<template v-if="props.type === 'password'">
			<label :for="props.for">{{props.title}}</label>
			<div class="password">
				<input 
					:type="props.for === 'password' ? type_password : type_confirm_password" 
					:id="props.for" 
					:placeholder="props.title"
					v-model="model" 				
					:class="props.class"
				>
				<span class="icon-eye" @click="props.for === 'password' ? showPassword() : showConfirmPassword()"></span>
			</div>
		</template>		
		<div class="input-hint">{{props.hint}}</div>
	</div>
</template>