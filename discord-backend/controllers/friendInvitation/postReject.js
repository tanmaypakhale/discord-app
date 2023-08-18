const FriendInvitation = require('../../models/friendInvitation')
const friendsUpdate = require('../../socketHandlers/updates/friends')

const postReject = async (req,res) => {
    try{
        const {id} = req.body;
        const {userId} = req.user;

        const invitationExists = await FriendInvitation.exists({ _id: id});

        if(invitationExists){
            await FriendInvitation.findByIdAndDelete(id);

        }

        friendsUpdate.updateFriendsPendingInvitations(userId);
        return res.status(200).send('Invitation successfully rejected');
    }catch(err){
        console.log(err);
        return res.status(500).send('Something went wrong, please try again');
    }
}

module.exports = postReject;