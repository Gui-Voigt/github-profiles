<script>
import Profile from '../components/Profile.vue'
import Card from '../components/Card.vue'
import NavBar from '../components/NavBar.vue'
import FilterBar from '../components/FilterBar.vue'
import ErrorMessage from '../components/ErrorMessage.vue'


export default {
    name: 'Repos',
    
    components: {
        Profile,
        Card,
        NavBar,
        FilterBar,
        ErrorMessage
    },
    

    props:{
        usrImg : String,
        usrName: String,
        repos: Array,
        starredLength: Number
    },

    data(){
        return{
            cardType: 'repo',
            filterText: '',
            reposLength: 0,
            reposArray: this.repos,
            loaded: false
        }
    },

    mounted(){
        this.reposLength = this.repos.length

    },

    methods:{
        filterChange(filterText){
            this.filterText = filterText
        }
    },

    computed:{
        filteredPosts(){
            
            return this.reposArray.filter( repo => repo.name.includes(this.filterText))
            
        }
    },


}
</script>

<template>
    <div>
        <Profile :usrImg="usrImg" :usrName="usrName"/>
        
        <NavBar :reposLength="reposLength" :starredLength="starredLength"/>

        
        <ul>
            <FilterBar @sendFilterText="filterChange"/>
            <li v-for="repo in filteredPosts" :key="repo.id">
                <Card :repoName="repo.name" :repoDesc="repo.description" :repoLeng="repo.language" :repoForks="repo.forks" :repoUrl="repo.html_url" :cardType="cardType"/>        
            </li>
        </ul>

    </div>
    
</template>

<style scoped>

    div.errorMessage{
        margin:0 auto;
        width: 90%;
        display: flex;
        flex-direction: column;

    }

    ul{
        margin:0 auto;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-self: center;
    }

    li{
        list-style: none;
    }

</style>