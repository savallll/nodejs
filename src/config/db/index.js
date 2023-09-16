const mongoose = require('mongoose')


async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nodejs');
        console.log('connect successfull')
    } catch (error) {
        console.log('connect fail')
    }
}

module.exports = {connect}
