<script>
import Content from '../components/Content.vue'

export default{
    name: 'Home',

    components: {
        Content
    },

    props:{
        userLoaded: Boolean
    },

    data(){
    return{
      
    }
    },

    emits:['reqApi'],

    methods: {
        reqApi(userName){
            this.$emit('reqApi',userName)
        }
    }
}
</script>

<template>
    <Content @sendUsername="reqApi" :userLoaded="userLoaded"/>
</template>