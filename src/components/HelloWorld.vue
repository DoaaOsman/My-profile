<template>
  <div class="row center viewPage text-dark" :class=" {dark :$store.state.dark } ">
  <div class="col-7 col-md-6 mt-5  m-2 m-auto d-flex align-items-center justify-content-center">
    <div class="center col-8 col-md-6 ">
      <p>Hello</p>
      <p>my name is</p>
      <h1>Doaa <span>O</span>sman</h1>  
       <p>I am Devoloment <br> & Designer</p>
 </div> 
    <button type="file" class="btn btn-outline center  text-light border ms-1 ms-md-4 p-2 px-lg-4">
    download cv     
    </button>
  </div>
   
  <div class="col-10 m-auto col-md-5 mt-5">
      <img class="img-fluid" src="../../public/profil.jpg">
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1::first-letter , h1 span{
    color:  #e84393;
  }
a {
  color: #310646;
} 
.btn{
   border-radius: 40px;
   background-color: #05b1d3 !important 
}
 
</style>
