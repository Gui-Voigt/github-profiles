<script setup>
import './styles/global.css'
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import apiRequest from './services/api'



</script>

<script>

export default{
  name: 'App',

  components: {
    Header,
    Content
  },

  data(){
    userInfos : {}
    reposInfos : {}
  },

  methods: {
    reqApi(userName){
    apiRequest(userName)      
    }
  },


}

</script>

<template>
  <div>
    <Header />
    <Content @sendUsername="reqApi" />
    {{userInfos}}
  </div>
</template>

<style>
</style>
