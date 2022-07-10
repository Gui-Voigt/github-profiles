<script setup>
import './styles/global.css'
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import getUser from './services/getUser'
import getRepos from './services/getRepos'



</script>

<script>

export default{
  name: 'App',

  components: {
    Header,
    Content
  },

  data(){
    return{
      userInfos : "",
      reposInfos : "",
      userLoaded : false,
      reposResponse: ""

    }
  },

  methods: {
    reqApi(userName){
      let reposResponse = getRepos(userName)

      this.userInfos = getUser(userName)
      this.reposInfos = reposResponse[0]
      this.userLoaded = reposResponse[1]
    }
  },


}

</script>

<template>
  <div>
    <Header />
    <Content @sendUsername="reqApi" />
  </div>
</template>

<style>
</style>
