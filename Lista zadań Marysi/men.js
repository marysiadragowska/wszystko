var storge = window.localStorage;
var taskList = new Vue({
    el: '#app',
    data: {
        items:[], 
        newItem:""
    },
    created(){
        this.items =JSON.parse(storge.getItem('items')) || [];
        console.log(this.items);

    },
    methods:{
        addItem:function(){
            var text = this.newItem;
            if(text){
                this.items.push({
                    text:text,
                    done:false
                });
                this.newItem= '';
            }

            storge.setItem('items', JSON.stringify(this.items));
        },
        clear:function(){
         this.items =[];   
        },
        checkItem:function(item){
           item.done = !item.done;
           console.log(item.done);
           storge.setItem('items', JSON.stringify(this.items));
        }
    }
});