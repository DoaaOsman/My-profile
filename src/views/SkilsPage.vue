<template>
  <div class="row  align-content-center  justify-content-center p-4 viewPage " :class=" {dark :$store.state.dark } ">
  <div class=" d-flex align-content-center  justify-content-center">
    <div class="col-4 mt-5"> 
<h5 class=" center"  :class=" {light :!$store.state.dark } "> Front-end</h5>
 <hr>
 </div>
 </div>
    <ul class="list-group col-10  align-items-center col-md-8 h-100 pb-5">
  
    <li class="d-flex align-items-center justify-content-center col-6   p-md-0 ms-2  mb-3 p-1 pb-md-2">
      html5 
      
    </li>
    <li class="d-flex align-items-center justify-content-center col-6   p-md-0 ms-2  mb-3 p-1 pb-md-2">
      css3   
    </li>
    <li class="d-flex align-items-center justify-content-center col-6   p-md-0 ms-2  mb-3 p-1 pb-md-2">
      java script 
      
    </li>
    <li class="d-flex align-items-center justify-content-center col-6   p-md-0 ms-2  mb-3 p-1 pb-md-2">
      bootstrap 
      
    </li>
    <li class="d-flex align-items-center justify-content-center col-6   p-md-0 ms-2  mb-3 p-1 pb-md-2">
      tailwan
    </li> 
    <li class="d-flex align-items-center justify-content-center col-6   p-md-0 ms-2  mb-3 p-1 pb-md-2">
      vue.js
      
    </li>
     
    <li class="d-flex align-items-center justify-content-center col-6   p-md-0 ms-2  mb-3 p-1 pb-md-2">
      github
    </li>
 
</ul>
 
  </div>
</template>

<script>
// @ is an alias   /src 

  
export default {
 

}
</script>
<style>
  h5 {
    color
    :#fff ;
  }
  .list-group{
    justify-content: space-evenly;
  }
  .list-group li {
  background:linear-gradient(344deg, #6f0e9f, #2d034e ,#c107beed) !important;
  padding: 5px;
}  
</style>
