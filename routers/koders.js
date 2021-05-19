const router = require('express').Router();
const Koder = require('../models/koderModel');

/*Filter by gender*/
router.get('/', async (req, res) => {
    const koderGender = req.query.gender;

    if(koderGender) {
        res.json({
            error: null,
            message: 'all koders',
            data: {
                koders: await Koder.find({ gender: koderGender})
            }
        })
    } else {
        res.json({
            error: null,
            message: 'all koders',
            data: {
                koders: await Koder.find({})
            }
        })
    }
   
})

router.post('/',  async (req, res) =>{
    const newKoder = req.body;
    
    if(!newKoder.name || !newKoder.lastName || !newKoder.age || !newKoder.gender){
        return res.status(400).json({
            error: true,
            message: 'Bad request'
        })
    }

    await Koder.create(newKoder)
    console.log("Added new Koder")
    res.json({
        error: null,
        message: 'New Koder',
       
    })


})



module.exports = router;