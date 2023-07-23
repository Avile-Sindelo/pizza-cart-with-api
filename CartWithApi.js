function CartWithApi(){
   return{
    pizzas: [],
    addToCart(pizzaID){
        let data = {
          cart_code: '8xV4qdpxUz',
          pizza_id: pizzaID
        }

        let url = 'https://pizza-api.projectcodex.net/api/pizza-cart/add';

        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log('Response:', data))
        .catch(error => console.error('Error:', error));
    },

    removeFromCart(pizzaID){
      let data = {
        cart_code: '8xV4qdpxUz',
        pizza_id: pizzaID
      }

      let url = 'https://pizza-api.projectcodex.net/api/pizza-cart/remove';

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => console.log('Response:', data))
      .catch(error => console.error('Error:', error));
    },

    getCart(){
      const url = `https://pizza-api.projectcodex.net/api/pizza-cart/8xV4qdpxUz/get`; // Replace this with the actual API endpoint URL

      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Process the JSON data returned from the server
          console.log('Response data:', data);
        })
        .catch(error => {
          // Handle errors that occurred during the fetch call
          console.error('Error:', error.message);
        });
    },

    payForCart(amount){
      let data = {
        cart_code: '8xV4qdpxUz',
        amount: amount
      }

      let url = 'https://pizza-api.projectcodex.net/api/pizza-cart/pay';

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => console.log('Response:', data))
      .catch(error => console.error('Error:', error));
    },

    test(){
        alert('Add this pizza into the cart - - This is from the factory!');
    }
   }
}


// second cart_code: eTwy7w9fUF