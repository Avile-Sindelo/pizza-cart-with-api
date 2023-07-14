//x-data directive in a seperate file
document.addEventListener('alpine:init', function(){
    Alpine.data('myCart', Cart);
});

//Axios 
const url = `https://pizza-api.projectcodex.net/api/pizzas`;

axios.get(url).then((result) => {
    const pizzas = result.data.pizzas;
    console.log(pizzas);
    
    // this.pizzas is declared on you AlpineJS Widget.
    //this.pizzas = pizzas;
});

