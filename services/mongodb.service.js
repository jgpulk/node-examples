const mongoose = require('mongoose');

const url = 'mongodb+srv://'+process.env.MONGO_USERNAME+':'+process.env.MONGO_PASSWORD+'@cluster0.sahal7x.mongodb.net/'+process.env.MONGO_DB

async function connectToDatabase(){
    try {
        await mongoose.connect(url)
        console.log('Database connected')
    } catch (error) {
        console.log(error);
    }
}

mongoose.connection.on('error', (err) => {
    console.log(err)
    connectToDatabase()
})

mongoose.connection.on('disconnected', () => {
    console.error('Lost MongoDB connection')
    connectToDatabase()
});

connectToDatabase()