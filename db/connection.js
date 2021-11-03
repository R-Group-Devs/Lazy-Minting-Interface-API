
 async function connectDatabase() {
    dbConnected = await mongoose.connect(process.env.MongoDB_URI);
}

module.exports = connectDatabase;