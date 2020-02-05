<template>
	<div class="side-navbar-mobile">
		<router-link to="/" active-class="active-mobile"><img style="width: 4%;" src="../assets/img/logo-white.png" alt="logo"><span style="margin-left: 33%;">{{ title }}</span></router-link>
		<div id="myLinks" v-if="mobileNavVisible">
        	<router-link to="/">Home</router-link>
    		<router-link to="/about">About</router-link>
        	<router-link to="/contact">Contact</router-link>
	    </div>
	    <a href="javascript:void(0);" class="icon" v-on:click="mobileNavVisible = !mobileNavVisible">
        	<i class="fa fa-bars" style="width: 30px; height: auto;"></i>
	    </a>
	</div>
</template>

<script>
	export default{
		data: () => ({
			mobileNavVisible: false,
		}),
		props: ['title', 'path', 'isActive']
	}
</script>

<style scoped>
	
</style>