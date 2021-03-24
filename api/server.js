const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 9999;

const serverURI = 'http://localhost:' + PORT
const mongoURI = 'mongodb+srv://Lina:Bytmig123@cluster0.dzwtr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.listen(PORT, () => console.log('Server running at: ' + serverURI));

mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('connected to database'))