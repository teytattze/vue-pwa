const app = Vue.createApp({
	el: '#app',
	data: function () {
		return {
			sitename: 'After School Club',
			product: {
				title: 'Math',
				location: 'London',
				price: 100,
				quantity: 5,
				image: './images/math.png',
			},
		};
	},
	methods: {
		addToCart: function () {
			if (this.product.quantity > 0) {
				this.product.quantity -= 1;
			}
		},
	},
	computed: {
		isDisabled: function () {
			return this.product.quantity === 0;
		},
		buttonText: function () {
			return this.product.quantity === 0 ? 'Sold Out' : 'Add to Cart';
		},
	},
});

app.mount('#app');
