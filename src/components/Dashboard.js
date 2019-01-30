import React, { Component } from 'react';
import Tshirts from './products/Tshirts'

class Dashboard extends Component {
  state = {
    products: [
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
  }
  render() {

    return (
        <React.Fragment>
             Dashboard
          <div className="container-fluid py-5 ">
            <div className="row justify-content-center">
            {this.state.products.map(shirt => (
              <Tshirts key={shirt.id} shirt={shirt}/>
            ))}
            </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Dashboard