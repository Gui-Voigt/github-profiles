<script setup>
    
</script>

<template>
    <header>
        <img alt="github logo" id="github_logo" src='../assets/github.svg'/>
        <h1>
            <span> Github </span>
            <p> profiles </p>
        </h1>
    </header>
</template>

<style scoped>
    header{
        background-color: var(--main-color);
        width: 100%;
        height: auto;
        padding: 0.8em;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 7.5px;
        color: white;
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
