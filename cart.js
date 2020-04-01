let cart = new Vue ({
  el: '#cart',
  data: {      //хранилище внутренних данных
    image: 'http://via.placeholder.com/72x85',
    url: 'https://raw.githubusercontent.com/lindoro7/project_site/master/db_api/getBasket.json',
    cartShown: false,
    products: [],
    totalSum: null,
    
  },
  methods: {   //методы
    getProducts (url) {
      return fetch (url) 
              .then (d => d.json ())
    },
    
      
  },


  mounted () {
    this.getProducts (this.url)
          .then (data => {
            this.products = data.contents
          })
          .then (() => {
            if (!this.products) {
              this.totalSum = 0
              document.querySelector(".cartNotEmpty").style.display="none"
            } else {
              this.products.forEach(el => {
                this.totalSum += el.quantity * el.price
              })
              console.log(this.totalSum)
          }
          })
          .finally (() => {
            console.log(this.products)
          })
          

  }
})