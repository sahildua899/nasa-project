const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL

mongoose.connection.once('open', ()=> {
    console.log('MongoDB connection Ready')
});

mongoose.connection.on('error', (err)=>{
    console.error(err)
})

async function mongoConnect() {
    await mongoose.connect(process.env.MONGO_URL);
}

module.exports = {
    mongoConnect
}