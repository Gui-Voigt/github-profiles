<script>

export default{
    name: "Profile",
    props:{
        usrImg : String,
        usrName: String
    }

}

</script>


<template>
    
    <div>
        <img :src="usrImg">
        <span> {{usrName}} </span>
    </div>

</template>
    

<style scoped>
    div{
        width: 100vw;

        display:flex;
        align-items: center;
        justify-content: start;
        gap: 1rem;

        margin: 1rem;
        padding: .2rem
    }

    img{
        height: 70px;
        width: 70px;
        border-radius: 50%;
    }

    span{
        font-weight: 700;
        font-size: 1.2rem;
        font-family: "Open Sans", Arial;
        color: var(--main-color)
    }
</style>