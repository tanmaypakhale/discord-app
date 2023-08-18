import store from '../store/store'
import { setLocalStream } from '../store/actions/roomActions'

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
    })

    
}