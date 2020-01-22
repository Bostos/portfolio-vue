<template>
    <div id="content">
  	
      	<NavigationMobile title="Portfolio" path="/portfolio" isActive="true"></NavigationMobile>

      	<div class='rowflex'>
      	    <div class='columnflex'>
      	    	<div id="portfolio">
      	    		
      	    	</div>
      	    </div>
      	</div>

    </div>
</template>

<script>
    import NavigationMobile from '../components/NavigationMobile.vue'
    export default {
      components: {
        'NavigationMobile': NavigationMobile
      },
      props: {
        title: String,
        path: String,
        isActive: Boolean,
      },
    }   
</script>