const initState = {
    store: [
        {
            id: 1,
            title: "Black tshirt",
            img: "../../shirts/1.jpg",
            price: 34.99
          },
          {
            id: 2,
            title: "Red tshirt",
            img: "../../shirts/2.jpg",
            price: 31.99
          },
          {
            id: 3,
            title: "Black tshirt",
            img: "../../shirts/1.jpg",
            price: 34.99
          },
          {
            id: 4,
            title: "Black tshirt",
            img: "../../shirts/1.jpg",
            price: 34.99
          },
          {
            id: 5,
            title: "Black tshirt",
            img: "../../shirts/1.jpg",
            price: 34.99
          },
          {
            id: 6,
            title: "Black tshirt",
            img: "../../shirts/1.jpg",
            price: 34.99
          }
    ]
};

const storeReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_TSHIRT':
        return state;
      case 'CREATE_TSHIRT_ERROR':
        console.log('create tshirt error', action.err);
          return state;
        default:
          return state;
    }
}
export default storeReducer;