const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const { get404, get500 } = require("./controllers/error");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/auth', authRoutes);

app.use(get404);

app.use(get500);


app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})
