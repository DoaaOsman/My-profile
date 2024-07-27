<template>
  <div class="row  align-content-center  justify-content-center viewPage me-auto " :class=" {dark :$store.state.dark } ">
    <div class="container pt-2 pt-md-5 "  :class=" {light :!$store.state.dark } ">
     <div  class=" col-8 col-md-11 about-container shadow-sm m-auto  p-2 pt-3 pt-md-5 border"> 
      <p>About me</p>
              <p>Devolper <span>&</span> Designer</p>
              <p> hello ,My name is Doaa Osman .I am a Devolper and also a Desiner .if you have asny project or if you want make a softweap for
                  your bisnees contact me .I make as soon as possibal .you really like me work   </p>
              
     </div>
      <h5  :class=" {light :!$store.state.dark } ">education</h5>
    <ul>
      <li class="d-flex">nilein university</li>
      <li class="d-flex">afroteck</li>
      <li class="d-flex">apteck</li>
    </ul>
     
    <h5  :class=" {light :!$store.state.dark } ">personal skills</h5>
    <ul>
    <li class="d-flex ">self learning</li>
    <li class="d-flex ">work with team</li>
  </ul>
  <h5  :class=" {light :!$store.state.dark } ">language</h5>
    <ul>
    <li class="d-flex row ">
        <div class="col-1 ">arabic</div>
        <div class="col-4 col-md-3 ms-5">
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
          <transition name="progress-bar">
          <span class="progress-bar"  style="width: 95%"> </span>
        </transition>
        </div>
        </div>
  </li>
  <li class="d-flex row ">
        <div class="col-1">english</div>
        <div class="col-4 col-md-3 ms-5">
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
          <transition name="progress-bar">
          <span class="progress-bar"  style="width: 35%"> </span>
        </transition>
        </div>
        </div>
  </li>
    </ul>
    </div>
  </div>
</template>

<script>
 // @ is an alias to /src 
 export default {
 

  }
 </script>
<style scoped>
.shadow-sm{

  box-shadow: 0px 0px 5px -3px!important;
}
h5{
  color: #fff;
  margin: 25px;
}
.about-container { 
    border-radius:20px; 
    margin: -7% auto 20px auto;
      
}
p span{
  color: #e84393;
  font-size: x-large;
}
ul{
  padding-left: 9rem;
}
.progress-bar{
  background: linear-gradient(243deg, #310646, #bf5af3) !important; 
}
.light {
  transition: all 2s;
}
</style>