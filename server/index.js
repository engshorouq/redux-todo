const app = require('./app');

app.listen(app.get('PORT'), () => {
    console.log(`server is running on port http://localhost:${app.get('PORT')}`);
})