const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello pan710113.github.io',
    }
  },

  computed: {

    test_list() {

      let result_list = []
      
      result_list.push('AAA')
      result_list.push('BBB')
      result_list.push('CCC')

      return result_list
    }
  },

  methods: {

  },

  mounted() {
    
    console.log('mounted');
  }

}).mount('#app')