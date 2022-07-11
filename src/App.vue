<script setup>
import './styles/global.css'
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import getUser from './services/getUser'
import getRepos from './services/getRepos'
import getStarred from './services/getStarred'




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
      userInfos : {},
      reposInfos : {},
      starredInfos: {},
      userLoaded : false,

    }
  },

  methods: {
    reqApi(userName){
      console.log(this.userLoaded)
      this.clearUser()

      let userRequest = getUser(userName)
      this.userInfos = userRequest[0]

      let reposRequest = getRepos(userName)
      this.reposInfos = reposRequest[0]
      
      let starredRequest = getStarred(userName)
      this.starredInfos = starredRequest[0]

      this.userLoaded = (userRequest[1] && reposRequest[1])
      console.log((userRequest[1] && reposRequest[1]))
    },

    clearUser(){
      this.userInfos = {}
      this.reposInfos = {}
      this.starredInfos = {}
      this.userLoaded = false
    }
  },


}

</script>

<template>
  <div>
    <Header @changeUser="clearUser" :userLoaded="userLoaded"/>
    <Content @sendUsername="reqApi" :userLoaded="userLoaded"/>
  </div>
</template>

<style>
</style>
