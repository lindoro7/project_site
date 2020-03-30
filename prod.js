"use strict"


let prod = new Vue ({
  el: '#prod',
  data: {      //хранилище внутренних данных
    name: '',
    image: 'http://via.placeholder.com/261x280',
    price: '',
    url: 'https://raw.githubusercontent.com/lindoro7/project_site/master/db_api/catalogData.json',
    products: [],
  },
  methods: {   //методы
    getProducts (url) {
      return fetch (url) 
              .then (d => d.json ())
    }
  },
  computed: {

  },
  mounted () {
    this.getProducts (this.url)
          .then (data => {
            this.products = data
          })
          .finally (() => {
            console.log(this.products)
          })
  }

 
})

