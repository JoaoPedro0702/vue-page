<template>

    <div>
        <Header />
        <!-- <Form /> -->        
        <router-view />   
        <Footer />
    </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'


export default {
 name: 'App',
  components: {
    Header,
    Footer
    
  }
}
</script>

<style scoped>

</style>


