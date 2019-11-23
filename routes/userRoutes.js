const router = require('express').Router();
const Users = require('../models/User');

router
.get('/leaderboard', async (req, res) => {
    
    const allUsers = await Users.find({}).exec();

    console.log(allUsers);

    const sorted = allUsers.sort((a, b) => {
        if (a.score > b.score) return -1;
    });

    return res.status(200).json(sorted);
})
.post('/create', async (req, res) => {

    if (!req.body) {
        return res.status(400).json({error: 'Creation information is missing!'});
    }

    try {
        const user = await Users.create(req.body);
        
        if(!user) {
            return res.status(500).json({error: 'Unable to create user'});
        }

        return res.sendStatus(200);

    } catch (err) {
        return res.status(500).json({error: err});
    }
})
.post('/score/update', async (req, res) => {
    
    if(!req.body) {
        return res.status(400).json({error: 'Update information is missing!'});
    }
    
    const { _id, score } = req.body;


    try {
        await Users.findOneAndUpdate({ _id }, { score }, { new: true });

        const newUsers = await Users.find().exec();

        const sorted = newUsers.sort((a, b) => {
            if (a.score > b.score) return -1;
        });

        return res.status(200).json(sorted);

    } catch (err) {
        return res.status(500).json({error: err});
    }
    
})
module.exports = router;