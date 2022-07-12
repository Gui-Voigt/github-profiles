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
    Content,
  },

  data(){
    return{
      userInfos : {},
      reposInfos : [],
      starredInfos: [],
      userLoaded : false,

      reposLength : 0
      
    }
  },

   methods: {
    reqApi(userName){

            console.log(this.userLoaded)

            let userRequest = getUser(userName)
            this.userInfos = userRequest[0]

            let reposRequest = getRepos(userName)
            this.reposInfos = reposRequest[0]
            
            let starredRequest = getStarred(userName)
            this.starredInfos = starredRequest[0]


            this.userLoaded = (userRequest[1] && reposRequest[1] && starredRequest[1])

            this.$router.push("/repos")
    },


    clearUser(){
      this.userInfos = {}
      this.reposInfos = {}
      this.starredInfos = {}
      this.userLoaded = false
      this.$router.push("/")
    },

  },


}

</script>

<template>
  <div>
    <Header @changeUser="clearUser" :userLoaded="userLoaded"/>

    <router-view @reqApi="reqApi" 
      :userLoaded="userLoaded" 
      :usrImg="userInfos.avatar_url" :usrName="userInfos.name" :repos="reposInfos" :starreds="starredInfos"
      :reposLength='0' :starredLength='0'
    />
  
  </div>
</template>

<style>
</style>
