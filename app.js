console.log('hello');

new Vue({
    el:'#vue-app',
    data:{
        age:25
    },
    methods:{
        add:function () {
            this.age++;

        },
        subract:function(){
            this.age--;
        }


    }
});