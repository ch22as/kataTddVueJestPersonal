<template>
  <div class="container worker">

      <input type="text" placeholder="Introduzca texto" name="" >

      <button @click="send" >Enviar</button>



  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Worker',
    methods: {
        ...mapActions({
            send: 'FETCH'
        })
    }
}
</script>

<style>
.worker{
    margin:1%;
    padding:1%;
    background: black;
}

</style>