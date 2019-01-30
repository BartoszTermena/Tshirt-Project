const initState = {
    store: []
};

const storeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TSHIRT': 
            console.log('CREATE_TSHIRT', action.shirt)
            return state;
        case 'CREATE_TSHIRT_error':
            console.log('CREATE_TSHIRT_error', action.err);
            return state;
        default: 
            return state;
    }
}
export default storeReducer;