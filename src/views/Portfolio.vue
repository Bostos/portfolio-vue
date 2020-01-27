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
                      :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 2, slideRatio:1/1.5, bullets:1 } }">
                      <vueper-slide v-for="project in projects" :key="project._id" :title="project.title" :link="'/portfolio/'+project._id" :image="require('@/assets/img/projects/'+project.image)"/>
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

<style scoped>

  /* Media Queries - For screens wider than 800px (Desktop version) */
  @media only screen and (min-width: 850px) {

    #portfolio{
      display: flex;
      justify-content: center;
    }

    #portfolio-title-block h1{
      color: white;
      font-size: 3.2em;
      margin-left: 40vw;
      position: absolute;
      top: 5vw;
    }

    #portfolio-box{
      display: flex;
      width: 100%;
      height: 40vh;
      margin-top: 30vh;
      padding: 0 7%;
    }

    #portfolio-box a{
      color: white;
      text-decoration: none;
      font-size: 1.5em;
    }

    .slider{
      width: 100%;
      color: white;
    }

    .vueperslides__arrows--outside .vueperslides__arrow--prev{
      left: -5.5em !important;
    }

    .vueperslides__arrows--outside .vueperslides__arrow--next{
      right: -5.5em !important;
    }

    .vueperslide__title:hover{
      color: #459c75;
    }
  }

  /* Responsive */
  @media only screen and (max-width: 849px) {

    #portfolio-title-block{
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
      margin: 8% 0;
    }

    #portfolio-title-block h1{
      color: white;
      font-size: 1.3em;
      margin: 10% 0;
    }

    #portfolio-box a{
      color: white;
      text-decoration: none;
      font-size: 1.2em;
      padding-top: 30%;
    }

  }
</style>