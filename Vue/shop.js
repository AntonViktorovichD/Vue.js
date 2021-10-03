let app = new Vue({
    el: '#app',
    data: {
        nameNewProduct: '',
        priceNewProduct: '',
        quantityNewProduct: '',
        editName: '',
        editPrice: '',
        editQuantity: '',
        newProduct: {},
        products: [
            {name: 'product1', price: 100, quantity: 4},
            {name: 'product2', price: 200, quantity: 5},
            {name: 'product3', price: 300, quantity: 6},
        ],

    },
    methods: {
        addProduct: function () {
            this.newProduct.name = this.nameNewProduct;
            this.newProduct.price = this.priceNewProduct;
            this.newProduct.quantity = this.quantityNewProduct;
            this.products.push(this.newProduct);
        },
        removeProduct: function (index) {
            this.products.splice(index, 1);
        },
        editProduct: function (index) {
            this.newProduct.name = this.editName;
            this.newProduct.price = this.editPrice;
            this.newProduct.quantity = this.editQuantity;
        },
        editConfirm: function (index) {
            this.products.splice(index, 1);
            this.products.push(this.newProduct);
            console.log(this.products);
        }

    },
    computed: {
        totalItem: function () {
            let sum = 0;
            // for (let i = 0; i < this.products.length; i++) {
            //     sum += (parseFloat(this.products[i].price) * parseFloat(this.products[i].quantity));
            // }
            this.products.forEach(function (item) {
                sum += (parseFloat(item.price) * parseFloat(item.quantity));
            });
            return sum;
        }
    }
});