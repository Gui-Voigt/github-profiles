<script>
export default {
    name: "RepoCard",

    props:{
        repoName: String,
        repoDesc: String,
        repoLeng: String,
        repoUrl: String,
        starCount: Number,
        repoForks: Number,
        cardType: String
    },
    
    data(){
        return{
            languageIcon : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMTAuOTM1djIuMTMxbC0xMCA0LjkzNHYtMi4yM2w3LjY0LTMuNzctNy42NC0zLjc3OXYtMi4yMjFsMTAgNC45MzV6bS0yNCAwdjIuMTMxbDEwIDQuOTM0di0yLjIzbC03LjY0LTMuNzcgNy42NC0zLjc3OXYtMi4yMjFsLTEwIDQuOTM1eiIvPjwvc3ZnPg==",
            starIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgLjI4OGwyLjgzMyA4LjcxOGg5LjE2N2wtNy40MTcgNS4zODkgMi44MzMgOC43MTgtNy40MTYtNS4zODgtNy40MTcgNS4zODggMi44MzMtOC43MTgtNy40MTYtNS4zODloOS4xNjd6Ii8+PC9zdmc+",
            forkIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjEgNGgtMnYyaC0ydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2MnptLTQuMTMgNGMtLjU3NyAyLjMxNy0yLjQ0NSAyLjcyMy00LjgxNyAzLjIyMy0xLjcxLjM2LTMuNjQzLjc3NS01LjA1MyAyLjA4NXYtNy40OTJjMS4xNjItLjQxMyAyLTEuNTExIDItMi44MTYgMC0xLjY1Ny0xLjM0My0zLTMtM3MtMyAxLjM0My0zIDNjMCAxLjMwNS44MzggMi40MDMgMiAyLjgxNnYxMi4zNjdjLTEuMTYyLjQxNC0yIDEuNTEyLTIgMi44MTcgMCAxLjY1NyAxLjM0MyAzIDMgM3MzLTEuMzQzIDMtM2MwLTEuMjk1LS44MjQtMi4zODgtMS45NzMtMi44MDguMjctMy45MjIgMi41Ny00LjQwOCA1LjQzOC01LjAxMiAyLjYxMS0uNTUgNS43MzMtMS4yMyA2LjQzNS01LjE4aC0yLjAzem0tMTIuNjctNWMwLS45OTMuODA4LTEuOCAxLjgtMS44czEuOC44MDcgMS44IDEuOC0uODA4IDEuOC0xLjggMS44LTEuOC0uODA3LTEuOC0xLjh6bTMuNiAxOGMwIC45OTMtLjgwOCAxLjgtMS44IDEuOHMtMS44LS44MDctMS44LTEuOC44MDgtMS44IDEuOC0xLjggMS44LjgwNyAxLjggMS44eiIvPjwvc3ZnPg==",
       }
    }

}
</script>

<template>
    <section>
        <a :href="repoUrl" target="blank">{{repoName}}</a>
        <p>{{repoDesc}}</p>
        <div class="bottomCard">

            <p v-if="cardType == 'repo' ">
                <img :src='languageIcon'>
                {{repoLeng}}
            </p>

            <p v-else>
                <img :src='starIcon'>
                {{starCount}}
            </p>

            <p>
                <img :src='forkIcon'>
                {{repoForks}}
            </p>
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

    img{
        width: 1em;
    }

    .bottomCard{
        display: flex;
        justify-content: start;
        gap: .5rem;

        width: 100%;
    }
</style>