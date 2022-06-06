const mongoose = require("mongoose")
const schema = mongoose.Schema
const Stake = new schema({
    wallet_address:{
        type:String
    },
    stake_type: {
        type: String,
    },
    amount: {
        type: String,
    },
    token:{
        type:Number
    },
    month: {
        type: Number,
    },
    start_date:{
        type:Date
    },
    end_date:{
        type:Date
    },
    start_timestamps:{
        type:Date
    },
    end_timestamps:{
        type:Date
    },
    status:{
        type:Number,
        default:0
    },
    is_delete:{
        type:Boolean,
        default:false
    }  
    
},{ timestamps: true }, { strict: false });
var detail = mongoose.model("Stake", Stake)
module.exports = detail