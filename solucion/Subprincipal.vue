<template>
  <div class="container subprincipal">
    <h1>Subprincipal</h1>
    <img src="https://picsum.photos/200/300" alt="Imagen random" />
    <Worker/>
  </div>
</template>

<script>
import Worker from './Worker.vue';

export default {
    name: 'Subprincipal',
    components: {
        Worker
    }

}
</script>

<style>
.subprincipal {
  background: blue;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>