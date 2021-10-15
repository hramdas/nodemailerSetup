const User = require('../model/user')
const express = require('express')

const router = express.Router()
const sendMail = require('../utils/sendmail')

router.post('', async (req, res)=>{
    //const user = await User.create(req.body)
    sendMail({
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
    })

    console.log(req.body)

    return res.status(200).send(req.body)
})

module.exports = router