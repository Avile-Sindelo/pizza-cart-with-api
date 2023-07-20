function CartWithApi(){
    let pizzasObj = {};
    //Axios 
    const url = `https://pizza-api.projectcodex.net/api/pizzas`;

    axios.get(url).then((result) => {
        const pizzasArr = result.data.pizzas;
        //convert the array into an object
        for(let i = 0; i < pizzasArr.length; i++){
            console.log(i);
            pizzasObj[i] = pizzasArr[i];
        }
    });
    
    return pizzasObj;
}

console.log(CartWithApi());