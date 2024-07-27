<template>
  
<nav-bar/>
<said-nav/>
  <router-view/>
   <footer-page/> 
</template>

<script> 
import navBar from './components/navBar.vue';
import FooterPage from './components/footerPage.vue';
import saidNav from './components/saidNav.vue';
  
 export default {
  components: { 
    navBar , 
    FooterPage ,
    saidNav
   },
   
}
</script>
<style>
#app {
  font-family: cairo, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-transform:capitalize !important;
  letter-spacing: 2px;
  color: #fff; 
} 
:root{
  outline-color:#e84393;
}
.dark{
  background-color:#020200 !important ;
  color :#fcfcfc !important;
  transition: all 2s;
}
.light {
   background-color:#fcfcfc !important;
  color: #000000 !important;
  transition: all 2s !important;


}
.viewPage{
  height: 95vh;
 }
.navbar-toggler, nav a.router-link-exact-active {
    color:  #110314 !important;
    background-color: #dbdbd354;
    border-radius: 0px 18px 0px;
    padding: x 8px; ;
}

.navbar-toggler {
   border: none;
   box-shadow: inset 2px 2px 4px 0rem;
} 
nav.navbar.navbar-expand-md.navbar-dark.shadow-nav.sticky.mb-2.p-0 {
    background-color: #0e0218;
}
</style>