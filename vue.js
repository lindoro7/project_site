"use strict"


let app = new Vue ({
  el: '#app',
  data: {      //хранилище внутренних данных
    product_name: ``,
    product_image: ``,
    url: 'https://jsonplaceholder.typicode.com/comments',
    products: [],
    cartShown: false,
  },
  methods: {   //методы
    getProducts (url) {
      return fetch (url) 
        .then (d => d.json ())
      
    },
    reload (url) {
      this.getProducts (this.getUrl)
      .then (data => {
        this.comments = data
      })
    }

  },
  computed: {  //вычисляемые значения, как методы, но только возвращают значения. Vue смотрит как на данные
    getUrl () {
      return `${this.url}?_limit=${this.commentsNumber}`
    }
  },
  mounted () {
    this.getProducts (this.getUrl)
      .then (data => {
        this.comments = data
      })
  } 
})