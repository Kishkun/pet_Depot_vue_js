<template>
  <header>
    <div class="navbar navbar-default">
      <div class="navbar-header">
        <h1>{{ siteName }}</h1>
      </div>
    </div>
    <div class="nav navbar-nav navbar-right cart">
      <router-link
        active-class="active"
        tag="button"
        class="btn btn-default btn-lg"
        :to="{ name: 'Form'}">
        <span class="glyphicon glyphicon-shopping-cart">
          {{ cartItemCount }}
        </span>Checkout
      </router-link>
    </div>
  </header>
</template>
<script>
    export default {
        name: "my-header",
        props: [
            'cartItemCount'
        ],
        data() {
            return {
                siteName: 'Vue.js Pet Depot',
                showProduct: true
            }
        },
        computed: {

        },
        methods: {
            chowCheckout() {
                this.$router.push({name: 'Form'})
            }
        }
    }
</script>
<style scoped>
  a {
    text-decoration: none;
    color: #000;
  }
</style>
