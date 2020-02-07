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
                      :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 2, slideRatio:1/1.5, bullets:0 } }">
                      <vueper-slide v-for="project in projects" :key="project._id" :title="project.title" :link="'#'+project._id" :image="require('@/assets/img/projects/'+project.image)">
                        <template v-slot:content>
                          <div class="vueperslide__content-wrapper" style="flex-direction: column">
                            <span v-if="project.isHidden" v-on:click="project.isHidden = !project.isHidden">{{ project.title }}</span>
                            <div  v-if="!project.isHidden" v-on:click="project.isHidden = !project.isHidden" id="portfolio-info">
                              <p id="portfolio-desc">{{ project.description }}</p>
                              <p id="portfolio-tech">Used technologies:<br><span v-for="tech in project.technologies" :key="tech.id">- {{ tech.name }}<br></span></p>
                              <div id="portfolio-link"><a :href="project.link" target="_blank">Visit site: <div id="circle"><i class="fas fa-link fa-2x"></i></div> </a></div>
                            </div>
                          </div>
                        </template>
                        
                      </vueper-slide>
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
          projects: [
            { _id: 1,
              title: 'FC Partizan',
              link: 'http://fcpartizan.000webhostapp.com/',
              image: 'fc-partizan.jpg',
              description: 'Football club presentation',
              technologies: [
                {id: 1, name: 'Laravel'},
                {id: 2, name: 'JavaScript'},
                {id: 3, name: 'HTML/CSS'},
                {id: 4, name: 'Bootstrap'},
              ],
              isHidden: true
            },
            { _id: 2,
              title: 'TV Noir',
              link: '',
              image: 'tvnoir.jpg',
              description: 'TV Series Blog & Database',
              technologies: [
                {id: 1, name: 'Laravel'},
                {id: 2, name: 'JavaScript'},
                {id: 3, name: 'HTML/CSS'},
                {id: 4, name: 'Bootstrap'},
              ],
              isHidden: true
            },
            { _id: 3,
              title: 'Test3',
              link: 'test3',
              image: 'test-image-3.jpg',
              description: 'test description',
              technologies: [
                {id: 1, name: 'PHP'},
                {id: 2, name: 'JavaScript'},
                {id: 3, name: 'HTML/CSS'}
              ],
              isHidden: true
            },
            {
              _id: 4,
              title: 'Visit vis',
              link: 'https://www.visitvis.hr/',
              image: 'visit-vis.jpg',
              description: 'Tourist organisation',
              technologies: [
                {id: 1, name: 'PHP'},
                {id: 2, name: 'JavaScript'},
                {id: 3, name: 'HTML/CSS'}
              ],
              isHidden: true
            }
          ],
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

    #portfolio-info{
      width: 100%;
      height: 100%;
      display: block;
      background-color: rgba(245, 245, 245, 0.9);
      color: black;
    }

    #portfolio-desc{
      margin-top: 10%;
    }

    #portfolio-tech{
      text-align: left;
      font-size: 20px;
      margin-left: 10%;
      margin-top: 8%;
    }

    #portfolio-tech span{
      font-size: 16px;
    }

    #portfolio-link{
      position: absolute;
      top: 80%;
      left: 60%;
    }

    #portfolio-link a{
      color: black;
      font-size: 18px;
    }

    #portfolio-link svg{
      margin-top: 20%;
      color: white;
      width: 40%;
    }

    #circle{
      border-radius: 50% !important;
      width: 60px;
      height: 60px;
      background-color: #459c75;
      display: inline-block;
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

    .vueperslide__content-wrapper span:hover{
      color: #459c75;
    }

    .vueperslide__content-wrapper button{
      color: white;
      background-color: #459c75;
      border: none;
      padding: 10px 15px;
      position: relative;
      top: 25%;
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

    #portfolio-info{
      width: 100%;
      margin-bottom: 35%;
      background-color: rgba(245, 245, 245, 0.9);
      color: black;
    }

    #portfolio-desc{
      margin-top: 10%;
    }

    #portfolio-tech{
      text-align: left;
      font-size: 20px;
      margin-left: 10%;
      margin-top: 8%;
    }

    #portfolio-tech span{
      font-size: 16px;
    }

    #portfolio-link{
      position: absolute;
      top: 77%;
      left: 60%;
    }

    #portfolio-link a{
      color: black;
      font-size: 18px;
    }

    #portfolio-link svg{
      margin-top: 5%;
      color: white;
      width: 30%;
    }

    #circle{
      border-radius: 50% !important;
      width: 40px;
      height: 40px;
      background-color: #459c75;
      display: inline-block;
    }

  }
</style>