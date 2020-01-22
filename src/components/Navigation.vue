<template>
  <div id="side-navbar">
            
    <div class="row sidebar-row">
      <router-link to="/"><img class="img-fluid" src="../assets/img/logo.png" id="logo" alt="bostos web logo"></router-link>
    </div>
    
    <div class="row sidebar-row">
      <ul >
        <li><router-link to="/" active-class="active" exact><i class="fas fa-home fa-2x"></i></router-link></li>
        <li class="pl-1"><router-link to="/about" active-class="active"><i class="fas fa-user fa-2x"></i></router-link></li>
        <li><router-link to="/portfolio" active-class="active"><i class="fas fa-code fa-2x"></i></router-link></li>
        <li class="pl-1"><router-link to="/contact" active-class="active"><i class="fas fa-envelope fa-2x"></i></router-link></li>
      </ul>
    </div>

    <div class="row sidebar-row">
      <ul>
        <li class="pl-1"><a href="" target="_blank"><i class="fab fa-facebook-f fa-2x"></i></a></li>
        <li><a href="https://rs.linkedin.com/in/nikola-stamenkovski-23b4b8158" target="_blank"><i class="fab fa-linkedin-in fa-2x"></i></a></li>
        <li><a href="https://github.com/Bostos" target="_blank"><i class="fab fa-github fa-2x"></i></a></li>
      </ul>
    </div>

  </div>
</template>