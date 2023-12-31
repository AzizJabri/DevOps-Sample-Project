const server = require('./server');
const PORT = 3000;
const startServer = () => {
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
};

startServer();