const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
        };
    },
    methods: {
        updateCart(id) {
            if (this.cart.includes(id)) return;
            this.cart.push(id);
        },
        removeCart(id) {
            this.cart = this.cart.filter((value) => {
                return value !== id;
            });
        },
    },
});
