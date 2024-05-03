// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// devtools: { enabled: true },
	css: ['~/assets/scss/main.scss'],
	buildModules: [
		'@nuxtjs/svg-sprite',
	 ],
	 svgSprite: {
		//  input: '~/assets/sprite/svg/',
		//  defaultSprite: 'sprite',
	 }
})
