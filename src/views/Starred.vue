<script>
import Profile from '../components/Profile.vue'
import Card from '../components/Card.vue'
import NavBar from '../components/NavBar.vue'


export default {
    name: 'Repos',
    
    components: {
        Profile,
        Card,
        NavBar
    },

    props:{
        usrImg : String,
        usrName: String,
        starreds: Array,
        reposLength: Number,
    },

    data(){
        return{
            cardType: 'starred',
            starredLength: 0
        }
    },

    mounted(){
        this.starredLength = this.starreds.length
    }


}
</script>

<template>

    <Profile :usrImg="usrImg" :usrName="usrName"/>
    <NavBar :reposLength="reposLength" :starredLength="starredLength"/>
    
    <ul>
        <li v-for="starred in starreds" :key="starred.id">
            <Card 
                :repoName="starred.name" 
                :repoDesc="starred.description" 
                :starCount="starred.stargazers_count" 
                :repoForks="starred.forks" 
                :repoUrl="starred.html_url" 
                :cardType="cardType"
            />        
        </li>
    </ul>

    
</template>

<style scoped>

    ul{
        margin:0 auto;
        display: flex;
        flex-direction: column;
        align-self: center;
        width: 90%;
    }

    li{
        list-style: none;
    }

</style>