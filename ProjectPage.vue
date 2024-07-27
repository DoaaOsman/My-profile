<template> 
          <!-- <div class="row d-flex h-100 py-5  justify-content-center align-content-center " style="height: 90vh !important;" :class="{rtl:!$store.state.language ,dark:$store.state.dark}">
     
      <div class="center  justify-content-center pt-5" :class=" {dark :$store.state.dark } " >
        <div class="single-box col-5 col-md-3 h-75 m-2 p-2 " :class=" {dark :!$store.state.dark } " >
         
         <div class="img w-100 " ></div>
         <div class="text-box">
          <span> <strong> Stor </strong></span>
          <p> with MDB  </p>
          </div>
    
         </div>
      
        <div class="single-box col-5 col-md-3 h-75 m-2 p-2 "  :class=" {dark :!$store.state.dark } ">
          
         <div class="img " ></div>
         <div class="text-box">
          <span> <strong>supermarket </strong></span>
          <p>with Tialwand</p>
        </div>
    
         </div>
        
        <div class="single-box col-5 col-md-3 h-75 m-2 p-2 "  :class=" {dark :!$store.state.dark } ">
          
         <div class="img" ></div>
         <div class="text-box" >
          <span> <strong> hotel  </strong></span>
         <p>with Bootstrap</p>        
  </div>
  
         </div>
      
         <div class="single-box col-5 col-md-3 h-75 m-2 p-2 "  :class=" {dark :!$store.state.dark } ">
          
          <div class="img" ></div>
          <div class="text-box" >
           <span> <strong> Noon  </strong></span>
          <p>with Bootstrap</p>        
   </div>
   
          </div>
      
      </div>
     

     
    </div> -->
    <div class="row d-flex h-100 py-5  justify-content-center align-content-center " style="height: 90vh !important;" :class="{rtl:!$store.state.language ,dark:$store.state.dark}">
      
      <div class="col-7 col-sm-5 col-md-3 col-lg-2 m-2 m-lg-3  p-2 h-50 border "  style="center;background-size:cover;   border-radius:14px" :key="Project" v-for="Project in $store.state.Projects">
         <img :src="Project.img" class="img-thumbnail d-block m-auto w-100 h-75 mb-2"  style="center;background-size:cover; border-radius:10%;" alt=" ">

        <router-link to="/" class="text-light " > 
      {{Project.name}} 
      </router-link>
     </div>
  </div> 
 </template>

<script>
// @ is an alias to /src 

export default {
  
}
</script>

<style scoped>
.single-box {
 
    display: flex;
    transition: .3s;
    border: 1px  solid #ddd;
    border-radius:10px; 
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    color: #000;
    
}
.single-box:hover{
    background: #e84393 !important;
    color: #fff !important;
}
.img {
    display: flex;
    justify-content: center;
    align-items:center;
    width: 97%;
    height: 80%;
    border: 1px solid #ddd;
    border-radius: 1%;
    margin-bottom: 5px;
    background-size :cover;
    background-image: url(../../public/stor2.PNG);
     
}
.single-box:nth-child(1) .img {
    background-image: url(../../public/stor2.PNG);
} 
.single-box:nth-child(2) .img {
    background-image: url(../../public/romanStor.PNG);
} 
.single-box:nth-child(3) .img {
    background-image: url(../../public/form.stor.PNG);
} 
.single-box:nth-child(4) .img {
    background-image: url(../../public/noonHome.PNG);
}
span {
    font-size: 24px;
    font-weight: 500px;
    line-height: 40px;
}



.text-box p {
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
         
}
  
</style>