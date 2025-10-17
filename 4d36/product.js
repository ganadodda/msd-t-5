// routes/products.js
const express = require('express');
const router = express.Router();

// Simulated in-memory product list
let products = [
  { id: 1, name: 'Phone', price: 299 },
  { id: 2, name: 'Laptop', price: 899 }
];

// GET /products – return all products
router.get('/', (req, res) => {
  res.json(products);
});

// POST /products – add a new product
router.post('/', (req, res) => {
  const { name, price } = req.body;

  if (!name || price === undefined) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
