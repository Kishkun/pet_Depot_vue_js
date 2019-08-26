const APP_LOG_LIFECYCLE_EVENTS = false;

let webStore = new Vue({
    el: '#app',
    data: {
        siteName: 'Vue.js Pet Depot',
        cart: [],
        showProduct: true,
        order: {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            zip: '',
            state: '',
            method: 'Home',
            business: 'Business Address',
            home: 'Home Address',
            gift: 'Do Not Send As A Gift',
            sendGift: 'Send As A Gift',
            dontSendGift: 'Do Not Send As A Gift'
        },
        products: [],
        states: {
            Minsk: 'Minsk',
            Grodno: 'Grodno',
            Brest: 'Brest',
            Gomel: 'Gomel',
            Vitebsk: 'Vitebsk'
        }
    },
    methods: {
        addToCart(aProduct) {
            this.cart.push(aProduct.id);
            // console.log(this.cart);
        },
        chowCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },
        submitForm() {
            alert('Submit');
        },
        checkRating(n, myProduct) {
            return  myProduct.rating - n >= 0;
        },
        canAddToCart(aProduct) {
            return aProduct.availableElementary > this.cartCount(aProduct.id);
        },
        cartCount(id) {
            let count = 0;
            // this.cart.forEach(item => {
            //     if(item.id === id) {
            //         count++
            //     }
            // });
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    count++
                }
            }
            return count;
        }
    },
    computed: {
        cartItemCount() {
            return this.cart.length || '';
        },
        sortedProducts() {
            if(this.products.length > 1) {
                let productsArray = this.products.slice(0);
                function compare(a, b) {
                    if(a.title.toLowerCase() < b.title.toLowerCase()) {
                        return -1;
                    }
                    if(a.title.toLowerCase() > b.title.toLowerCase()) {
                        return 1
                    }
                    return 0
                }
                return productsArray.sort(compare);
            }
        }
    },
    filters: {
        formatPrice(price) {
            if (!parseFloat(price)) {
                return '';
            }
            if (price > 99999) {
                let priceString = (price / 100).toFixed(2),
                    priceArray = priceString.split('').reverse(),
                    index = 3;
                while (priceArray.length > index + 3) {
                    priceArray.splice(index + 3, 0, ',');
                    index += 4;
                }
                return '$' + priceArray.reverse().join('');
            } else {
                return '$' + (price / 100).toFixed(2);
            }
        }
    },
    beforeCreate() {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log('beforeCreate');
        }
    },
    created() {
        axios.get('./product.json')
            .then((response) => {
               this.products = response.data.products;
               console.log(this.products);
            });



        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log('created');
        }
    },
    beforeMount() {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log('beforeMount');
        }
    },
    mounted() {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log('mounted');
        }
    },
    beforeUpdate() {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log('beforeUpdate');
        }
    },
    updated() {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log('updated');
        }
    },
    beforeDestroy() {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log('beforeDestroy');
        }
    },
    destroyed() {
        if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log('destroyed');
        }
    }

});
// console.log(webStore.siteName);
// console.log(webStore);