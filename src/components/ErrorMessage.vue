<script>
    export default {
        name: "ErrorMessage",
    }
</script>

<template>
    <span>
        Check the <em>username</em> and try again
    </span>
</template>

<style scoped>
    span{
        border:none;
        border-radius: 7px;
        align-self: center;

        max-width: 350px;
        margin-top: 20px;
        padding: .5rem .25rem;

        background-color: var(--secundary-color);

        font-size: .9em;
        font-weight: 700;
        color:var(--main-color)
    }

    em{
        color: white;
        font-weight: 500;
    }
</style>