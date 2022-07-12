<script>
import Profile from '../components/Profile.vue'
import Card from '../components/Card.vue'
import NavBar from '../components/NavBar.vue'
import FilterBar from '../components/FilterBar.vue'


export default {
    name: 'Repos',
    
    components: {
        Profile,
        Card,
        NavBar,
        FilterBar
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
            starredLength: 0,
            filterText: "",
            starredArray: this.starreds,
        }
    },

    methods:{
        filterChange(filterText){
            this.filterText = filterText
        }
    },

    mounted(){
        this.starredLength = this.starreds.length
    },

    computed:{
        filteredPosts(){
            
            return this.starredArray.filter( starred => starred.name.includes(this.filterText))
            
        }
    },


}
</script>

<template>
    <div class="container">
        <Profile :usrImg="usrImg" :usrName="usrName"/>
        
        <div>
            <NavBar :reposLength="reposLength" :starredLength="starredLength"/>
            <ul>
                <FilterBar @sendFilterText="filterChange"/>
                <li v-for="starred in filteredPosts" :key="starred.id">
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
        </div>
    </div>

    
</template>

<style scoped>

    .container{
        display: flex;
        flex-direction: column;
    }

    @media (min-width : 1065px){
        .container{
            flex-direction: row;
        }
    }   
        

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