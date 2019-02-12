export const createTshirt = (tshirt) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database 
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('tshirts').add({
            ...tshirt,
            author: profile.firstName,
            authorId: authorId,
            createdAt: new Date()
        })
        .then(() => {
            dispatch({type: 'CREATE_TSHIRT', tshirt});
        })
        .catch(err => {
            dispatch({type: 'CREATE_TSHIRT_ERROR', err});
        })
    }
};