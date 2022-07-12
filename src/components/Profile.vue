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
        width:auto;

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

    @media (min-width : 1065px){
        div{
        flex-direction: column;
        min-width: 355px;
        }

        img{
            height: 210px;
            width: 210px;
        }
    }


    span{
        font-weight: 700;
        font-size: 1.2rem;
        font-family: "Open Sans", Arial;
        color: var(--main-color)
    }
</style>