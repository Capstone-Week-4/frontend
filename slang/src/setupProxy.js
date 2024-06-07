const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/login',   
    createProxyMiddleware(  
  {
        target: "http://43.203.98.168:8080",
        changeOrigin: true,
    })
  );
};