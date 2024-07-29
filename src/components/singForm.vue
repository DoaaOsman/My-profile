<template>
  
 <section >
      <div class=" outform   col-sm-12 col-md-5 m-auto h-75 mt-5 text-light" > 
      <form class="form border  d-flex justify-content-center"   id="form" >
              
        <div class="form-floating mx-5 mb-2 mt-5">
                     <input type="email" class="form-control" placeholder="Email" name="email" v-model="Email" required>
                     <label class="text-dark">  <i class="bi bi-person-circle"></i>  Email</label>
                 </div>
                <div class="form-floating mx-5 mb-3 ">
                     <input type="password" class="form-control" placeholder="Password" name="pass" v-model="pass" required>
                     <label class="text-dark m-auto"> <i class="bi bi-eye-slash"></i> Password</label>
                 </div>
                <div class="form-floating mx-5">
                       <button class="btn btn-outline mb-1   text-center" value="submet" >Submet</button>
                      <p> Forget password  ?</p>
                  </div>
                  <div>
                         <P  class="mb-auto">or</P>
                         <h4>social media login</h4>
                          <div>
                            <a href="#"><i class="bi bi-twitter"></i></a>
                            <a href="#" ><i class="bi bi-facebook"></i></a>
                            <a href="#"><i class="bi bi-google"></i></a>
                            </div>
                      </div>
                  
                  dont have an account ? <a href="#"> sing up</a>
                
            </form>
     </div>
  </section>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .form {
    background-color : rgb(27 4 48 / 55%);
     }
 .btn ,a{
    color: #fff;
    margin: 10px;
    background-color: #270330;
 }
  button ,a :hover{
    color: #270330;
    background-color: #fff;
    border: 1px solid #270330;
 }
</style>