const express = require('express');
const app = express();
const port = 8001;
const productRoutes = require('./routes/products.routes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

app.use('/api/products', productRoutes);
