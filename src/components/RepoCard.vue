<script>
export default {
    name: "RepoCard",

    props:{
        repoName: String,
        repoDesc: String,
        repoLeng: String,
        repoUrl: String,
        repoForks: Number
    }

}
</script>

<template>
    <section>
        <a :href="repoUrl" target="blank">{{repoName}}</a>
        <p>{{repoDesc}}</p>
        <div class="bottomCard">
            <p>{{repoLeng}}</p>
            <p>{{repoForks}}</p>
        </div>
    </section>
    
</template>

<style scoped>
    section{
        border-bottom: 1px solid var(--light);
    }

    a{
        color: #389adb;
        line-height: 3.4rem;
        font-weight: 700;
        font-size: 1.5rem;
    }

    a:hover{
        text-decoration: underline;
    }

    p{
        margin: .2rem 0 .5rem;
        font-weight: 400;
        line-height: 1rem;
        font-size: .8rem;
    }

    .bottomCard{
        display: flex;
        justify-content: start;
        gap: .5rem;

        width: 100%;
    }
</style>