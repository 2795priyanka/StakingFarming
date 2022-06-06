const res = require("express/lib/response");
const Stake = require("../model/stake")


exports.create_stake = async (req, res) => {
   
    try {
        const {
            stake_type,
            amount,
            month,
            wallet_address,
            token

        } = req.body

        if (wallet_address == undefined || wallet_address == null || wallet_address == "") {
            return res.json({ status: 402, message: "Please enter wallet address" })
        }
        if (stake_type == undefined || stake_type == null || stake_type == "") {
            return res.json({ status: 402, message: "Please enter stake type" })
        }
        var start_date = new Date()
        var end_date = new Date()
        var start_timestamps = start_date
        if (stake_type == "lock") {
            end_date = end_date.setMinutes(end_date.getMinutes() + 5);
            end_timestamps = end_date
        }
        if (stake_type == "unlock") {
            end_date = end_date.setMonth(end_date.getMonth() + Number(month));
            end_timestamps = end_date
            console.log("unlock",end_timestamps)
        }

        
        var stake_data = {
            wallet_address: wallet_address,
            stake_type: stake_type,
            amount: amount,
            month: month,
            start_date: start_date,
            start_timestamps: start_timestamps,
            end_date: end_date,
            end_timestamps: end_timestamps,
            token: token
        }
        console.log("stake_data",stake_data)
        var save = await Stake.create(stake_data)
        // console.log("save", save)
        return res.json({ status: 200, message: "stake created successfully", data: save })

    } catch (err) {
        console.log(err)
        return res.json({ status: 500, message: err.message })
    }
}

exports.total_stake = async (req, res) => {
    try {
        var wallet_address = req.query.wallet_address
        var total_stake = await Stake.find({ wallet_address: wallet_address })
        if (total_stake.length <= 0) {
            return res.json({ status: 400, message: "No stack", data: total_stake })
        }
        return res.json({ status: 200, data: total_stake })

    } catch (err) {
        return res.json({ status: 500, message: err.message })
    }
}
exports.stake_by_id = async (req, res) => {
    try {
        var id = req.query.id
        var total_stake = await Stake.findOne({ _id: id })
        if (!total_stake) {
            return res.json({ status: 400, message: "No stack" })
        }
        return res.json({ status: 200, data: total_stake })

    } catch (err) {
        return res.json({ status: 500, message: err.message })
    }
}
exports.remove_stake= async(req, res)=>{
    try{
        var id = req.query.id
        var remove_stake = await Stake.updateOne({_id:id}, {$set:{status:1}})
        console.log("remove_stake",remove_stake)
        return res.json({status:200, message: "Unstake !!!"})
    }catch(err){
        return res.json({status: 500, message:err.message})
    }
}