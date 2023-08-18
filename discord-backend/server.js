const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const socketServer = require('./socketServer');
const authRoutes = require('./routes/authRoutes.js');
const friendInvitationRoutes = require('./routes/friendInvitationRoutes')
const PORT = process.env.API_PORT || 5002;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use('/api/friend-invitation',friendInvitationRoutes);

const server = http.createServer(app);

socketServer.registerSocketServer(server);

server.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
});


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database Connected")
}).catch(err => {
    console.log("Not Connected",err.message);
})