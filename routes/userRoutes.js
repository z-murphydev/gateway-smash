const router = require('express').Router();
const Users = require('../models/User');

router
.post('/create', async (req, res) => {

    if (!req.body) {
        return res.sendStatus(400);
    }

    try {
        const user = await Users.create(req.body);
        
        if(!user) {
            return res.sendStatus(500);
        }

        return res.sendStatus(200);

    } catch (err) {
        return res.sendStatus(500);
    }
})
.post('/score/update', async (req, res) => {
    const { _id, score } = req.body;
    try {
        const user = await Users.findOneAndUpdate({ _id }, { score }, { new: true });
        console.log(user);
        return res.sendStatus(200);

    } catch (err) {
        return res.sendStatus(500);
    }
    
})
module.exports = router;