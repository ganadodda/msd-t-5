// index.js
const express = require('express');
const cors = require('cors');
const os = require('os');
const http = require('http');
const productsRouter = require('./routes/products');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Custom HTTP logger using native http module
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/products', productsRouter);

// Start server
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);

  // OS Info
  console.log('--- System Info ---');
  console.log('Platform:', os.platform());
  console.log('CPU Cores:', os.cpus().length);
});
