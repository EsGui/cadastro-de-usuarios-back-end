const app = require('./app');

PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log('server running on port 3001'));
