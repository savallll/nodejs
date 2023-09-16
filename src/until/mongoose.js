module.exports = {
    multiMongoose: function(mongoose){
        return mongoose.map(mongoose => mongoose.toObject())
    },
    mongoose: function(mongoose){
        return mongoose? mongoose.toObject() : mongoose
    }
};