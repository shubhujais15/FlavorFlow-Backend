const corsAnywhere = require('cors-anywhere');

// const host = 'localhost';
const port = 8080;

corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, () => {
  console.log(`CORS Anywhere server running on :${port}`);
});
