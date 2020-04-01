let cart = new Vue ({
  el: '#cart',
  data: {      //хранилище внутренних данных
    image: 'http://via.placeholder.com/72x85',
    url: 'https://raw.githubusercontent.com/lindoro7/project_site/master/db_api/getBasket.json',
    cartShown: false,
    totalSum: null,
  },
  methods: {   //методы
    getProducts (url) {
      return fetch (url) 
              .then (d => d.json ())
    }
      
  },

  mounted () {
    this.getProducts (this.url)
          .then (data => {
            this.products = data.contents
          })
          .then (this.products.forEach(element => {
            this.totalSum += element.quantity * element.price
          })

          .finally (() => {
            console.log(this.products)
            console.log(this.totalSum)
          })
  }
})