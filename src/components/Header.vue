<script>
export default{
    name: "Header",

    emits:["changeUser"],

    props: {    
        userLoaded: String
  },
}
</script>

<template>
    <header>
        <div class="left-header">
            <img alt="github logo" id="github_logo" src='../assets/github.svg'/>
            <h1>
                <span> Github </span>
                <p> profiles </p>
            </h1>
        </div>

        <div class="right-header">
            <button v-if="userLoaded" @click="$emit('changeUser')">CHANGE USERNAME</button>
        </div>
    </header>
</template>

<style scoped>
    header{
        background-color: var(--main-color);
        width: 100%;
        height: auto;
        padding: 0.8em;

        display:flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }

    .left-header{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 7.5px;
    }

    button{
        background: none;
        border: 1px solid white;
        color: white;
        border-radius:7px;
        font-size: .6rem;
        font-weight: 500;
        letter-spacing: 1px;
        padding: .3rem;
        font-family: arial;
        transition: .3s
    }

    button:hover{
        color:var(--seecundary-color);
        cursor: pointer;
        font-size: .625rem;
        border-color: var(--seecundary-color)
    }

    img{
        height:30px;
    }

    h1{
        letter-spacing: 1px;
        display:flex;
        align-items: center;
        font-size: 21px;
        gap: 7px        
    }

    span{
        font-weight: 700;
    }

    p {
        font-weight: 400;
    }
</style>
