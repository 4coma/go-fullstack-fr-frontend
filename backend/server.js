const http  = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);

server.listen(process.env.PORT || 3000);

// nodemon a été installé en local, à part ça rien de modifié dans le code