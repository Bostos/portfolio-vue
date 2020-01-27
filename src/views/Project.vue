<template>
    <div id="content">
  	
      	<NavigationMobile title="Portfolio" :path="'/portfolio/'+project._id" isActive="true"></NavigationMobile>

        <div class="rowflex">
          <div id="portfolio-title-block">
            <h1>{{project.title}}</h1>
          </div>
        </div>

        <div class="rowflex">

            <div class="columnflex">
              <div id="project-left">
                <p>{{project.description}}</p>
              </div>
            </div>

            <div class="columnflex">
               <div id="project-right">
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

    #project-left, #project-right{
      margin: 40% 10% 0 10%;
      text-align: center;
      justify-content: center;
    }

    #project-left p{
      color: white;
      font-size: 1.2em;
      font-family: Segoe UI;
      text-align: center;
      background-color: rgba(30, 30, 30, .8);
      padding: 45px 50px 45px 50px;
      width: 80%;
      margin-left: 10%;
      margin-top: 15%;
      float: right;
      height: auto;
    }

    #project-right img{
      width: 100%;
      height: auto;
      margin-right: 10%;
      float: left;
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

    .rowflex{
      flex-direction: column-reverse;
    }

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
      margin-top: 10%;
    }

    #project-left, #project-right{
      text-align: center;
      justify-content: center;
    }

     #project-left p{
      color: white;
      font-size: 1em;
      margin-top: 10%;
    }

    #project-right img{
      width: 100%;
      height: auto;
      margin: 10% 10% 0 0;
    }

    #portfolio-title-block h1{
      color: white;
      font-size: 1.2em;
    }

  }
</style>