<template>
   <section>
    <div class="characters">
        <div class="characters_item" v-for="character in characters" :key="character.id">
         <CardCharacter :character="character" />
        </div>
    </div>
   </section>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

import CardCharacter from '@/components/CardCharacter.vue'
    export default {
        components: {
            CardCharacter
        },
        setup() {
            const store = useStore()
            const characters = computed (() => {
                return store.state.charactersFilter
            })

            onMounted(() => {
                store.dispatch('getCharacters')  //para acceder a los accions 
            })

            return{
                characters
            }
        }
    }
</script>

<style lang="scss">
.characters{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 3rem;
    //border: 5px red solid;
}
</style>