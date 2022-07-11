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
    userLoaded: Boolean
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

    <div id="content" v-if="!userLoaded">
       <SearchBar  @sendUsername="sendUsername"/>
    </div>

</template>


<style scoped>

#content{
    display: flex;
    flex-direction: column;
    align-items: center;
}



</style>