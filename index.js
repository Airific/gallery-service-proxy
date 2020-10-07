const express = require('express');
const path = require('path');
const port = 3005;
const app = express();
// const { createProxyMiddleware} = require('http-proxy-middleware');

app.use('/:id', express.static(path.join(__dirname, './public')));

// app.use(
//   '/listings/gallery/:id',
//   createProxyMiddleware({
//     target: 'http://localhost:3001',
//     changeOrigin: true,
//   })
// );

// app.use(
//   '/listings/reviews/:id',
//   createProxyMiddleware({
//     target: 'http://localhost:3003',
//     changeOrigin: true,
//   })
// );

// app.use(
//   '/listings/moreplaces/:id',
//   createProxyMiddleware({
//     target: 'http://localhost:3002',
//     changeOrigin: true,
//   })
// );


app.listen(port, () => {
  console.log("listening to port 3005");
});

