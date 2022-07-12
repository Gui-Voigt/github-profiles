<script>
export default {
    name: 'NavBar',

    props:{
        reposLength : Number,
        starredLength: Number
    },

    
}
</script>

<template>

<navbar>
    <ul>
        <li>
            <router-link class="rl" to="/repos"> Repos <span> {{reposLength}} </span> </router-link>
            
        </li>
        
        <li>
        <router-link class="rl" to="/starred"> Starred <span> {{starredLength}} </span> </router-link>
        </li>
    </ul>
</navbar>

</template>

<style scoped>
    ul{
        display: flex;
        flex-direction: row;
        justify-content: start;
    }

    li{
        width: 200px;

        display: flex;
        gap: .25rem;
        align-items: baseline;
        justify-content: center;
        padding: .5rem 0;

        border-bottom: none;

        list-style: none;
        font-size: 1.5rem;
        font-weight: 900;
    }

    .router-link-active {
        border-bottom: 5px solid var(--secundary-color);
        width: 100%;
    }

    .rl{
        color:var(--main-color);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span{
        background-color: var(--light);
        border: 1px solid transparent;
        border-radius: 1rem;
        display: inline-block;
        line-height: 18px;
        min-width: 25px;
        padding: 0 6px;
        text-align: center;
        font-size: 1rem;
        font-weight: 900;
        color: var(--main-color);
    }

    
</style>