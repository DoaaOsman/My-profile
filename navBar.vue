
<template>
 
     <nav class="navbar navbar-expand-md navbar-dark  text-light shadow-nav sticky p-1 ">
    <div class="container row ">
        <div class="navbar-brand me-1 me-md-3 col-2  ">
         portfolio
        </div> 
        <div  class="col-10 col-md-6 m-1">
          <ul class="navbar-nav me-auto">
          <li class="nav-item ">
            <router-link to="/" class="nav-link p-0"> 
            <i class="bi bi-house-fill p-2 d-sm-block d-md-none"></i>
            <span class=" d-none d-md-block  p-2">home</span>  
           </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/AboutMe" class="nav-link p-0">
            <i class="bi bi-file-person-fill p-2 d-sm-block d-md-none col-1"></i>
            <span class=" d-none d-md-block p-2">about</span> 
            </router-link>
          </li>
           <li class="nav-item">
            <router-link to="SkilsPage" class="nav-link p-0">
             <i class="bi bi-person-lines-fill p-2 d-sm-block d-md-none"></i>
              <span class=" d-none d-md-block p-2">skills</span>
            </router-link>
            </li>
          <li class="nav-item"><router-link to="ContactPage"  class="nav-link p-0">
            <i class="bi bi-envelope-fill p-2 d-sm-block d-md-none"></i>
            <span class=" d-none d-md-block p-2"> contact</span></router-link></li>
            <li class="nav-item">
            <router-link to="ProjectPage" class="nav-link p-0">
             <i class="bi bi-person-lines-fill p-2 d-sm-block d-md-none"></i>
              <span class=" d-none d-md-block p-2">project</span>
            </router-link>
            </li>
            <li class=" nav-item float-right" v-if="$store.state.dark" @click="themeMood()"> <span class="nav-link bi bi-moon-fill ms-4"  ></span></li>
            <li class=" nav-item float-right" v-else @click="themeMood()"> <span class="nav-link bi bi-sun-fill ms-4" ></span></li>

        </ul>
        </div>

       
    </div> 
</nav>
  </template>
  <script>
export default {
  name: ' navBar',
  methods:
  {
    themeMood(){

      if(this.$store.state.dark){ 
        
      this.$store.state.dark =false
      }
      else  
      this.$store.state.dark =true 
    }
  }
}
</script>
<style >
 .shadow-sm{
  box-shadow: 4px 6px 46px -3px!important;
 }
 .shadow-nav {
  box-shadow:0px 1px 0px 0px #ffffffb0 !important
}
.navbar-dark ,.navbar-toggler {
    color: #000 !important;
   
} 
.navbar-nav {
  flex-direction: row !important;
   align-items: flex-start;
    align-content: space-between;
    justify-content: space-around;

} 
.navbar-dark .navbar-nav .nav-link{
  color: #fff !important;
}
 .sticky{ 
      background-color:  #0e0218 !important;
    }
    .navbar>.container, .navbar>.container-fluid, .navbar>.container-lg, .navbar>.container-md, .navbar>.container-sm, .navbar>.container-xl, .navbar>.container-xxl {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;}
   
</style>