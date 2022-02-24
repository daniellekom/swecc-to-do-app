const {initializeApp,cert,getApps} = require('firebase-admin/app');
const {getFirestore} = require('firebase-admin/firestore')

const serviceAccount = require('../credentials.json');

//all of this is allowing us to securely connect our API to our database
//we can find this in the docs 
exports.connectDb = () => {
if(!getApps().length){
    initializeApp({
       credential: cert(serviceAccount) 
    });
}
return getFirestore()
};