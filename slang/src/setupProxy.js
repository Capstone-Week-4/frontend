const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://10.221.151.139:8080',
      changeOrigin: true,
    })
  );
};