// const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.Promise = global.Promise;
const productsRoutes = require('./routes/productsRouter');
const config = require('./config/config');
const DB = config.db_url;
const server_port = config.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({ origin: '*' }));
// app.use(express.static(path.join(__dirname,'client/build')));
app.use('/', productsRoutes);
app.use((req, res) =>  res.status(404).json({err: '404'}));
app.use((err, req, res) => {console.log(err.stack); res.status(500).json({err: '500'})});
// app.get('/', function (req, res, next) { res.sendFile(path.join(__dirname,'client/build/index.html'));
// });

mongoose.connect(DB, {useNewUrlParser: true })
    .then(() => console.log('Database is connected') , err => console.log('Can not connect to the database' +err));

app.listen(server_port, () => console.log('Server is running on ', server_port));