const express = require('express');
const router = express.Router();
const Joi = require('joi');
const auth = require('../middleware/auth.js')
const validator = require('express-joi-validation').createValidator({});
const friendInvitationControllers = require('../controllers/friendInvitation/friendInvitationController.js')

const postInvitationSchema = Joi.object({
    targetMailAddress: Joi.string().email(),

})

const inviteDecisionSchema = Joi.object({
    id: Joi.string().required(),

})

router.post('/invite',auth,validator.body(postInvitationSchema),friendInvitationControllers.controllers.postInvite)
router.post('/accept',auth,validator.body(inviteDecisionSchema),friendInvitationControllers.controllers.postAccept)
router.post('/reject',auth,validator.body(inviteDecisionSchema),friendInvitationControllers.controllers.postReject)


module.exports = router;