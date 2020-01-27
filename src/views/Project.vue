<template>
    <div id="content">
  	
      	<NavigationMobile :title="project.title" path="/portfolio" isActive="true"></NavigationMobile>

        <div class="rowflex">
          <div id="portfolio-title-block">
            <h1>{{project.title}}</h1>
          </div>
        </div>

      	<div class='rowflex'>
      	    <div class='columnflex'>
      	    	<div id="project-box">
                <p>{{project.description}}</p>
                <img :src="require('@/assets/img/projects/'+project.image)">
      	    	</div>
      	    </div>
      	</div>

    </div>
</template>

<script>
    import NavigationMobile from '../components/NavigationMobile.vue'
    import {APIService} from '../APIService';

    const apiService = new APIService();

    export default {
      components: {
        'NavigationMobile': NavigationMobile,
      },
      props: {
        title: String,
        path: String,
        isActive: Boolean
      },
      data() {
        return {
          id: 0,
          project: []
        }
      },
      created() {
        this.id = this.$route.params.id;
      },
      methods: {
        getProject(){
          apiService.getProject(this.id).then((data => {
            this.project = data.data;
          }));
        }
      },
      mounted() {
        this.getProject();
      }
    }   
</script>

<style scoped>
  /* Media Queries - For screens wider than 800px (Desktop version) */
  @media only screen and (min-width: 850px) {

    #project-box{
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 20%;
    }

    #project-box p{
      color: white;
      font-size: 1.2em;
    }

    #project-box img{
      width: 600px;
      height: 400px;
    }

    #portfolio-title-block h1{
      color: white;
      font-size: 3.2em;
      margin-left: 40vw;
      position: absolute;
      top: 5vw;
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
    }

  }
</style>