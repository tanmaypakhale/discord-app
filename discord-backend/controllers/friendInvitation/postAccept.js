const friendInvitation = require("../../models/friendInvitation");
const FriendInvitation = require("../../models/friendInvitation");
const User = require('../../models/user');
const friendsUpdates = require('../../socketHandlers/updates/friends')

const postAccept = async (req,res) => {
    try{
        const {id} = req.body;
        const invitation = await FriendInvitation.findById(id);

        if(!invitation){
            return res.status(401).send('Error occured. Please try again');
        }

        const {senderId, recieverId} = invitation;

        const senderUser = await User.findById(senderId);
        senderUser.friends = [...senderUser.friends, recieverId];

        const recieverUser = await User.findById(recieverId);
        recieverUser.friends = [...recieverUser.friends, senderId];
        
        await senderUser.save();
        await recieverUser.save();

        await FriendInvitation.findByIdAndDelete(id);


        friendsUpdates.updateFriends(senderId.toString());
        friendsUpdates.updateFriends(recieverId.toString());

        friendsUpdates.updateFriendsPendingInvitations(recieverId.toString());

        return res.status(200).end('Friend successfully added');
    }catch(err){
        console.log(err);
        return res.status(500).send('Something went wrong, Please try again');
    }
}



module.exports = postAccept;