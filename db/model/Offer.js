const mongoose = require('mongoose');


var OfferSchema  = new mongoose.Schema({

   
    name:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        required:true
    },

    startTime:{
        type:Date,
        required:true,
        default:new Date()
    },
    expirationTime:{
        type:Date,
        required:true,
    },
    reduction:{
        type:Number,
        required:true
    }
})



var Offer = mongoose.model('offers', OfferSchema);


module.exports = {Offer};