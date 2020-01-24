<template>
    <div id="content">
  	
      	<NavigationMobile title="Portfolio" path="/portfolio" isActive="true"></NavigationMobile>

        <div class="rowflex">
          <div id="portfolio-title-block">
            <h1>PORTFOLIO</h1>
          </div>
        </div>

      	<div class='rowflex'>
      	    <div class='columnflex'>
      	    	<div id="portfolio">
                
                <div id="portfolio-box">

                    <vueper-slides
                      class="no-shadow slider"
                      :visible-slides="3"
                      slide-multiple
                      :gap="3"
                      :bullets="false"
                      :slide-ratio="1 / 4.15"
                      :dragging-distance="200"
                      :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
                      <vueper-slide v-for="project in projects" :key="project._id" :title="project.title" :link="'/portfolio/'+project.title" :image="require('@/assets/img/projects/'+project.image)"/>
                    </vueper-slides>

                </div>
      	    	</div>
      	    </div>
      	</div>

    </div>
</template>

<script>
    import NavigationMobile from '../components/NavigationMobile.vue'
    import {APIService} from '../APIService';
    import { VueperSlides, VueperSlide } from 'vueperslides';
    import 'vueperslides/dist/vueperslides.css';


    const apiService = new APIService();

    export default {
      components: {
        'NavigationMobile': NavigationMobile,
        VueperSlides,
        VueperSlide
      },
      props: {
        title: String,
        path: String,
        isActive: Boolean,
      },
      data() {
        return {
          projects: []
        }
      },
      methods: {
        getProjects(){
          apiService.getProjects().then((data => {
            this.projects = data.data;
          }));
        }
      },
      mounted() {
        this.getProjects();
      }
    }   
</script>