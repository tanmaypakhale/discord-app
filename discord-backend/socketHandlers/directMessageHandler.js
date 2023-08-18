const Conversation = require('../models/conversation');
const Message = require('../models/message');
const chatUpdates = require('./updates/chat');
const serverStore = require('../serverStore');

const directMessageHandler = async (socket,data) => {
    try{
        console.log('direct message event is being handled')
        const {userId} = socket.user;
        const {recieverUserId, content} = data;

        const message = await Message.create({
            content: content,
            author: userId,
            date: new Date(),
            type: 'DIRECT',
        })

        const conversation = await Conversation.findOne({
            participants: { $all: [userId, recieverUserId] },
        });

        if(conversation){
            conversation.messages.push(message._id);
            await conversation.save();

            chatUpdates.updateChatHistory(conversation._id.toString());
        }else{
            const newConversation = await Conversation.create({
                messages: [message._id],
                participants: [userId, recieverUserId],
            });
            chatUpdates.updateChatHistory(newConversation._id.toString());
        }

    }catch(err){
        console.log(err);
    }
}

module.exports = directMessageHandler;