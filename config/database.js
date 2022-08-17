const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      //This was causing it to bug out for some reason. Apparently it's not used in newer versions of mongo?
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB