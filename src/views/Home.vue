<script>
import Content from '../components/Content.vue'
import ErrorMessage from '../components/ErrorMessage.vue'

export default{
    name: 'Home',

    components: {
        Content,
        ErrorMessage
    },

    props:{
        userLoaded: Boolean
    },

    data(){
        return{
            errorMessageAsVisible : false
        }
    },

    emits:['reqApi'],

    methods: {
        reqApi(userName){
            this.$emit('reqApi',userName)
        },

        
    },

    created(){
        console.log(this.$route.params.isFailled)
        if ( this.$route.params.isFailled ) {
            this.errorMessageAsVisible = true
        }
    }

}
</script>

<template>
    <div>
        <Content @sendUsername="reqApi" :userLoaded="userLoaded"/>
        <ErrorMessage v-if="errorMessageAsVisible"/> 
    </div>
</template>

<style scoped>
    div{
        display: flex;
        flex-direction: column
    }
</style>