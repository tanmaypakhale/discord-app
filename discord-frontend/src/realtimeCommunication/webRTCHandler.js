import store from '../store/store'
import { setLocalStream } from '../store/actions/roomActions'
import Peer from 'simple-peer'

const getConfiguration = () =>{
    const turnIceServers = null;

    if(turnIceServers){

    }else{
        console.log('Using only STUN server');
        return {
            iceServers: [
                {
                    urls: 'stun: stun.1.google.com:19302'
                }
            ],
        }
    }
}

const onlyAudioConstraints = {
    'video': false,
    'audio': true
}
const defaultConstraints = {
    'video': true,
    'audio': true
}

export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
    const constraints = onlyAudio ? onlyAudioConstraints: defaultConstraints;
    
    navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
        store.dispatch(setLocalStream(stream));
        callbackFunc();
        console.log(store.getState().room.localStream);
    }).catch((err) => {
        console.log(err);
        console.log('cannot get an access to local stream');
    });
};

let peers ={};

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
    const localStream = store.getState().room.localStream;

    if(isInitiator){
        console.log('preparing new peer connection as initiator')
    }else{
        console.log('preparing new peer connection as not initiator')

    }
    peers[connUserSocketId] = new Peer({
        initiator: isInitiator,
        config: getConfiguration(),
        stream: localStream,
    });

    peers[connUserSocketId].on('signal',data => {
        const signalData = {
            signal: data,
            connUserSocketId: connUserSocketId,
        };
    });

    peers[connUserSocketId].on('stream',(remoteStream) => {
        
    })
};