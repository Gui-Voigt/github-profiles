<script>
import SearchBar from './Searchbar.vue'

export default{
  name: 'Content',

  emits:['sendUsername'],

  data(){
    return{
        inputName: ""
    }
  },

  props: {
    userLoaded: String
  },

  components:{
    SearchBar
  },

  methods:{
    sendUsername(userName){
        this.$emit('sendUsername',userName)
    }
  }

  
}

</script>

<template>

    <div id="content">
       <SearchBar v-if="!userLoaded" @sendUsername="sendUsername"/>
    </div>

</template>


<style scoped>

#content{
    display: flex;
    flex-direction: column;
    align-items: center;
}



</style>