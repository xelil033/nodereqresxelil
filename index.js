const express = require('express');
const app = express();

const products = [
    {id: 1, ad: 'Milk', cost: 1.8, miqdar: 10},
    {id: 2, ad: 'Biscuits', cost: 0.5, miqdar: 30},
    {id: 3, ad: 'Yogurt', cost: 2.5, miqdar: 10},
    {id: 4, ad: 'Pencil', cost: 0.6, miqdar: 40},
    {id: 5, ad: 'Sweets', cost: 7.2, miqdar: 15},
    {id: 6, ad: 'Coffee', cost: 0.5, miqdar: 20},
    {id: 7, ad: 'Bread', cost: 1.1, miqdar: 20},
    {id: 8, ad: 'Pasta', cost: 2.1, miqdar: 20},
    {id: 9, ad: 'Cake', cost: 20, miqdar: 20},
    {id: 10, ad: 'Water', cost: 1.2, miqdar: 30},
];

app.get('/product', (req, res) => {
    res.json(products);
});

app.get('/product/:id', (req, res) => {
    const productId = Number(req.params.id);
    const oneproduct = mehsullar.find(p => p.id === productId);
    if(oneproduct){
        res.json(p);
    } else {
        res.status(404).send("No product");
    }
});

app.listen(3000, () => {
    console.log("Server calisir.");
});