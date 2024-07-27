<template> 
    <div  class="col-2  h-100 w-25 align-items-center justify-content-start">
          <ul class="list-style-none px-1 mx-2 h-25  d-flex justify-content-center flex-column">
                <li class="border m-1 bg-light"> <a href="#"><i class="bi bi-whatsapp m-1"></i></a></li>
                <li class="border m-1 bg-light"> <a href="#"><i class="bi bi-twitter m-1"></i></a></li>
                <li class="border m-1 bg-light"> <a href="#" ><i class="bi bi-facebook m-1"></i></a></li>
                <li class="border m-1 bg-light raonded"> <a href="#"><i class="bi bi-google m-1"></i></a></li>
                 
          </ul>
        </div>
      
  
</template>

<script>
export default {
  name: 'tableProtact',
   
}
</script>

 <style scoped>
h3 {
  margin: 40px 0 0;
} 
a {
  color: #864d94;
}
.table {
  overflow-y: hidden;
}
th {
    padding: 15px;
    border: none;
    margin: 6px;
    background-color: #270330;
    color: #FFF;
    border-radius: 30px;

}
.table tr:hover {
  background-color:#c4c0c5;

}
.modal-body {
  direction: rtl;
   
}
ul{
  list-style:none;
  justify-items: center;
  border-radius: 10px;
  background:linear-gradient(344deg, #ebe4ef, #854fae ,#f0d9f0ed) !important
}
li{
  border-radius: 50%;
}
table .sticky-top{
  top: 130px;
}
div{
  position: absolute;
}
.align-items-center {
  display: flex;
     justify-content: flex-end;
}
</style>
