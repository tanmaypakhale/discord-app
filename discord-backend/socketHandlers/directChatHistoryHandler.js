const Conversation = require('../models/conversation');;
const chatUpdates = require('./updates/chat');

const directChatHistoryHandler = async (socket, data) => {
    try{
        const {userId} = socket.user;
        const {recieverUserId} = data;
        
        const conversation = await Conversation.findOne({
            participants: {$all: [userId, recieverUserId] },
            type: 'DIRECT',
        });

        if(conversation){
            chatUpdates.updateChatHistory(conversation._id.toString(), socket.id);
        }
    }catch(err){
        console.log(err);
    }
};

module.exports = directChatHistoryHandler;