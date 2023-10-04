<template>
 <div class="container">        <!-- es lo principal que se mostrara en el navegador -->
    <h1>Rick and Morty</h1>
    <FilterByStatus />
    <FilterByName />
    <ListCharacter />
 </div>
</template>

<script>
import FilterByStatus from './components/FilterByStatus.vue';
import FilterByName from './components/FilterByName.vue';
import ListCharacter from './components/ListCharacter.vue'; //dirección del archivo


export default {   //Se extrae App.vue y ListCharacter.vue
  name: 'App',
  components: {
    ListCharacter,
    FilterByStatus,
    FilterByName
}
}
</script>

<style lang="scss">
:root{
  --background-body: #24282f;
  --background-card: #3C3E44;
  --text-white: #fff;
  --text-gray: #c0c0c0;
  --text-orange: #FF9800;
}

*{
  box-sizing: border-box;
  margin: 0;
  border: 0;
}

body{
  background-color: var(--background-body);
  color: var(--text-white);
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1{
  margin-bottom: 3rem;
  text-align: center;
  
}

.container{
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
  //border: 5px red solid;
}

img{
  width: 100%;
}

</style>
