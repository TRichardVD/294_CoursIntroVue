const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: true,
        };
    },
    methods: {
        AddToCart() {
            this.cart += 1;
        },
    },
});
