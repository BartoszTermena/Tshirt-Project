import React from 'react';
import './Setting.css';



const Setting = ({color, text}) => {
  return (
    <div className="card bg-light container">
      <h3 className="text-center">Settings</h3>
      <h4>Change T-shirt color</h4>
      <div className="tshirt-color">
        <img src="../../img/white.png" alt="white" onClick={color} id="white"/>
        <img src="../../img/black.png" alt="black" onClick={color} id="black"/>
        <img src="../../img/grey.png" alt="grey" onClick={color} id="grey"/>
        <img src="../../img/blue.png" alt="blue" onClick={color} id="blue" />
        <img src="../../img/red.png" alt="red" onClick={color} id="red" />
      </div>
      <hr />
      <h4>Write Text</h4>
        <input onChange={text} name="upperText" type="text" className="form-control form-control-sm mb-2" placeholder="Upper Text" />
        <input onChange={text} name="lowerText" type="text" className="form-control form-control-sm" placeholder="Lower Text" />
      <hr />
      <h4>Upload Image</h4>
      <div className="form-group">
        <input type="file" className="form-control" />
      </div>
      <hr />
      <h4>Text size</h4>
        <input type="range" min="0" max="100"/>
      <hr />
      <h4>Text Color</h4>
        <select className="form-control form-control-sm mb-2">
          <option>White</option>
          <option>Black</option>
          <option>Red</option>
          <option>Blue</option>
        </select>
      <hr />
      <button className="btn btn-primary btn-sm mb-2">Save</button>
    </div>
  )
}
export default Setting;