<template>
  <div class="container">
    <my-header></my-header>
    <h1>This is the id {{ $route.params.id }}</h1>
    <div class="row">
      <div class="col-md-5 col-md-offset-0">
        <figure>
          <img class="product" v-bind:src="product.image" alt="product"/>
        </figure>
      </div>
      <div class="col-md-6 col-md-offset-0 description">
        <h1>{{ product.title }}</h1>
        <p v-html="product.description"></p>
        <p class="price">
          {{ product.price }}
        </p>
        <button
          class=""
          @click="edit"
        >Edit Product
        </button>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
    import myHeader from './Header'
    const axios = require('axios');

    export default {
        name: "Product",
        components: {
          myHeader
        },
        data() {
            return {
              product: ''
            }
        },
        created: function () {
            axios.get('/static/products.json').
            then(response => {
                this.product = response.data.products.filter(data => data.id == this.$route.params.id)[0]
                this.product.image = '/' + this.product.image;
            });
        },
        methods: {
            edit() {
              this.$router.push({ name: 'Edit'})
            }
        }
    }
</script>
<style scoped>
</style>
