const APP_LOG_LIFECYCLE_EVENTS = false;

let webStore = new Vue({
    el: '#app',
    data: {
        siteName: 'Vue.js Pet Depot',
        product: {
            id: 1001,
            title: 'Cat Food, 25lb bag',
            description: 'A 25 pound bag of <em>irresistible</em>, ' +
                'organic goodness for you cat.',
            price: 2000,
            image: './img/cat.jpg',
            availableElementary: 10,
            rating: 4
        },
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
        states: {
            Minsk: 'Minsk',
            Grodno: 'Grodno',
            Brest: 'Brest',
            Gomel: 'Gomel',
            Vitebsk: 'Vitebsk'
        }
    },
    methods: {
        addToCart() {
            this.cart.push(this.product.id);
            // console.log(this.cart);
        },
        chowCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },
        submitForm() {
            alert('Submit');
        },
        checkRating(n) {
            return  this.product.rating - n >= 0;
        }
    },
    computed: {
        cartItemCount() {
            return this.cart.length || '';
        },
        canAddToCart() {
            return this.product.availablEinventory > this.cartItemCount;
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