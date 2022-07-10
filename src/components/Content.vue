<script>

export default{
  name: 'Content',

  emits:['sendUsername'],

  data(){
    return{
        inputName: ""
    }
  },
  
}

</script>

<template>

    <div id="content">
       <label>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"></path></svg>
       
        <input type="text" name="search" id="search" placeholder="Insert a username" v-model="inputName" @keyup.enter='$emit("sendUsername", inputName)'>

       </label>    
    </div>

</template>


<style scoped>

#content{
    display: flex;
    flex-direction: column;
    align-items: center;
}

label{
    display: flex;
    align-items: center;

    margin: 2rem 0;
    width: 85%;
    max-width: 341px;

    border: 2px solid var(--light);
    border-radius:5px;
    padding: .5em;
}

svg{
    height: 1.4em;
}

input{
    color:var(--main-color);
    border: none;
    padding-left: 1em;
    font-weight: bold;
}

input:focus{
    outline:none
}

</style>