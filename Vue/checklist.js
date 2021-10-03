let app = new Vue({
    el: '#app',
    data: {
        selected: undefined,
        checked: false,
        newItemName: '',
        newItemPrice: '',
        showItemName: '',
        showItemPrice: '',
        itemObj: {},
        tasks: [
            {id: 0, name: 'task1', price: '300$', show: false, hide: true},
            {id: 1, name: 'task2', price: '400$', show: false, hide: true},
            {id: 2, name: 'task3', price: '500$', show: false, hide: true},
        ],
    },
    methods: {
        removeItem: function (index) {
            this.tasks.splice(index, 1);
        },
        addItem: function () {
            this.itemObj.name = this.newItemName;
            this.itemObj.price = this.newItemPrice;
            this.tasks.push(this.itemObj);
        },
        showItem: function (index) {
            this.tasks[index].show = true;
            this.tasks[index].hide = false;
        },
        renameItem: function (index) {
            this.tasks[index].name = this.showItemName;
            this.tasks[index].price = this.showItemPrice;
            this.tasks[index].show = false;
            this.tasks[index].hide = true;
            console.log(this.tasks[index]);
        }
    }
});