let app = new Vue({
    el: '#app',
    data: {
        show: false,
        id: 0,
        date: '',
        mode: 'create',
        newItem: '',
        itemsObj: {},
        items: [],
    },
    methods: {
        addText: function () {
            this.date = new Date();
            this.date = this.date.getHours() + ':' + this.date.getMinutes() + ':' + this.date.getSeconds();
            if (this.mode == 'update') {
                this.items[this.id]['text'] = this.newItem;
            } else {
                this.items.push({'id': this.id, 'date': this.date, 'text': this.newItem, 'show': false, 'hide': false});
            }
            this.newItem = '';
            this.mode == 'create';
        },
        showItem: function (index) {
            this.items[index].show = true;
            this.newItem = this.items[index].text;
        },
        editText: function (index) {
            this.id = index;
            this.mode = 'update';
        },
    }
});