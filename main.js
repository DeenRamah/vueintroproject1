const app = Vue.createApp({
    data(){
        return{
            love: 0,
            Product: 'Deen and Taliah',
            Image: './images/deen.jpg',
            inTaliah: true,
            details: ['50% Taliah in Love','30% Both in Love', '15% Deen innit'],
            variants:[
                {id: 2234, color: 'fel', image: '.images/fel.jpg'},
                {id:2235, color: 'deen', image: '.images/deen.jpg'},
            ]
        }
    },
    methods:{
        addToLove(){
            this.love += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})