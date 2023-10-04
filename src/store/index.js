import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: []
  },
  getters: {
  },
  mutations: {  //Mutaciones modifican a los state mediante las acciones
    setCharacters(state, payload){
    state.characters = payload
  },
  setCharactersFilter(state, payload) {
    state.charactersFilter = payload
  }
  },
  actions: {
    //se consume la API
    async getCharacters({commit}){
      try{
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)
      } catch (error){
          console.error(error)
        }
    },
    //Logica del filtro por estado
    filterByStatus({commit, state},status){
      const results = state.characters.filter((character) =>{
        return character.status.includes(status)
      })
      commit('setCharactersFilter', results)
    },
    filterByName({commit, state},name ){
      const formatName = name.toLowerCase()  //Pasa a minuscula
      const results = state.characters.filter((character) =>{
        const characterName = character.name.toLowerCase()

        if(characterName.includes(formatName)){
          return character
        }
      })
      commit('setCharactersFilter', results)
    }
  },
  modules: {
  }
})
