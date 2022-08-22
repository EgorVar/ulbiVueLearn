<template>
  <h1>{{count}}</h1>
  <my-button @click="$store.commit('incrementLikes')">Increment</my-button>
  <my-button @click="$store.commit('decrementLikes')">Decrement</my-button>
  <!-- <my-input v-model="inputData"></my-input> -->
  <input type="text" v-model.number="inputData">

  <h3>{{$store.getters.doubleLikes}}</h3>
  <h3>{{$store.state.likes}}</h3>
  <h3>{{$store.state.name}}</h3>

</template>

<script>
  import axios from 'axios'
  import Test from './components/Test.vue'
  import testMixin from './mixins/testMixin'
  export default {
    components: {
      Test
    },
    mixins: [testMixin],
    data(){
      return {
        count: 0,
        inputData: '',
        posts: [],
        show: true
      }
    },
    methods: {
      async fetchPosts() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = res.data
      }
    },
    mounted() {
      console.log('mounted')
    },
    watch: {
      inputData(newWalue) {
        console.log(newWalue)
      }
    },
    computed: {

      nameValue() {
        return 'Lida'
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
