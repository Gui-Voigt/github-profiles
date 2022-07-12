<script>
import Profile from '../components/Profile.vue'
import RepoCard from '../components/RepoCard.vue'
import NavBar from '../components/NavBar.vue'


export default {
    name: 'Repos',
    
    components: {
        Profile,
        RepoCard,
        NavBar
    },

    props:{
        usrImg : String,
        usrName: String,
        repos: Array
    },


}
</script>

<template>

    <Profile :usrImg="usrImg" :usrName="usrName"/>
    <NavBar/>
    
    <ul>
        <li v-for="repo in repos" :key="repo.id">
            <RepoCard :repoName="repo.name" :repoDesc="repo.description" :repoLeng="repo.language" :repoForks="repo.forks" :repoUrl="repo.html_url"/>        
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