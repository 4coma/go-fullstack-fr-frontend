const http  = require('http');

const server = http.createServer((req, res) => 
{
    res.end('voilà la réponse du serveur ! ');
});

server.listen(process.env.PORT || 3000);

// nodemon a été installé en local, à part ça rien de modifié dans le code