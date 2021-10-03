Vue.component('my-component', {
    props: ['name'],
    template: '<div>Привет, {{ name }}!</div>',
});

let app = new Vue({
    el: '#app',
});