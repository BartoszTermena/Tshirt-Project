export const createTshirt = (tshirt) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database 
        const firestore = getFirestore();
        firestore.collection('tshirts').add({
            ...tshirt,
            author: 'Chandler',
            authorId: 123,
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