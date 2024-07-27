<template>

    <div class="pt-5 text-dark center p-2 viewPage " :class=" {dark :$store.state.dark }"> 
 
      <form action="" method="post"  class="form rounded col-7 col-md-5 col-xl-4 m-auto mt-5 shadow-sm p-2 h-75 d-flex flex-column justify-content-center"   :class=" {light :!$store.state.dark } "  id="form" >
        <div class="form-floating mx-3 mb-2 mt-3">
          <input type="text" class="form-control text-center text-dark " placeholder="Name" name="email" v-model="Email" required>
            <label class="text-dark" > Name </label>
        </div> 
    
        <div class="form-floating mx-3 mb-2">
          <input type="email" class="form-control text-center text-dark" placeholder="Email" name="email" v-model="Email" required>
           <label class="text-dark"> Email </label>
         </div>
            <div class="form-floating mx-3 mb-2 text-dark">
              <textarea class="form-control" id="floatingTextarea2" style="height: 100px !important"></textarea>
                <label for="floatingTextarea2">Messag</label>
            </div>
            <div class="form-floating mx-3 p-0 mb-2 ">
             <button class="btn btn-outline  form-control text-center bt-0 pb-1 mt-3" value="submet" >
               Send
             </button>  
             </div>
          <div>
             <P  class="mb-auto">or</P>
              <div >
                 <a href="#"><i class="bi bi-twitter m-1"></i></a>
                 <a href="#" ><i class="bi bi-facebook m-1"></i></a>
                 <a href="#"><i class="bi bi-google m-1"></i></a>
                 
               </div>
                  </div>  
       </form>
    </div>  
</template>

<script>
// @ is an alias   /src 

export default {
  
     
}
</script>
<style>
.shadow-sm {
    box-shadow: 0px 0px 22px -10px!important;
}
input :focus ,input:active{
  outline: none !important;
  box-shadow: #440953 !important;
}
  .btn {
    color: #fff;
    background-color: #270330;
  }
  .btn:hover, .btn:active {
    color: #270330;
    background-color: #fff;
    border: 1px solid #270330;
  }
 a {
   color:#270330;
   text-decoration: none;
   font-size: medium !important;;
 }
 a:hover{
  color: #440953;
 }
  .form-floating>.form-control, .form-floating>.form-control-plaintext, .form-floating>.form-select {
    line-height: 0.25;
    
}
.form-floating>.form-control {
    height: calc(1.5rem + 13px) !important;
}
.form-floating>label {
    padding: 0.6rem 0.75rem !important ;
}
.form-floating>.form-control {
     padding: 0 ;
} 
button {
    padding-top:0 !important
}
.dark{
  background-color:#020200 !important ;
  color :#fff !important
}
.light {
  background-color:#fff !important;
  color: #020200 !important;
}
</style>
