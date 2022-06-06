const express = require('express');
const router = express.Router();

const { 
    create_stake,total_stake,stake_by_id, remove_stake
}=require("../controller/stake")

router.post("/create_stake",create_stake);
router.post("/total_stake",total_stake);
router.get("/stake_by_id",stake_by_id);
router.post("/remove_stake",remove_stake);


module.exports = router;