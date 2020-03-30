"use strict"


let app = new Vue ({
  el: '#app',
  data: {      //хранилище внутренних данных
    name: 'John',
    body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam animi itaque iusto at distinctio quos veritatis dicta tenetur ad repellat!`,
    email: 'lol@kek.ru',
    url: 'https://jsonplaceholder.typicode.com/comments',
    comments: [],
    commentsNumber: 10,
    fPostShown: true,
  },
  methods: {   //методы
    getComments (url) {
      return fetch (url) 
        .then (d => d.json ())
      
    },
    reload (url) {
      this.getComments (this.getUrl)
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
    this.getComments (this.getUrl)
      .then (data => {
        this.comments = data
      })
  } 
})