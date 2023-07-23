//x-data directive in a seperate file
document.addEventListener('alpine:init', function(){
    Alpine.data('myCart', Cart);
});


document.addEventListener('alpine:init', function(){
    Alpine.data('apiCart', CartWithApi);
});


