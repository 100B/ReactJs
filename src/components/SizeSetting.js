import React, { Component } from 'react';

class SizeSetting extends Component {

  changeSize(value){
    this.props.onChangeSize(value);
  }


  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Size : { this.props.fontSize }px</h3>
        </div>
        <div className="panel-body">
          <button type="button" className="btn btn-success" onClick={() => this.changeSize(-2)}>Giảm</button>&nbsp;
          <button type="button" className="btn btn-success" onClick={() => this.changeSize(+2)}>Tăng</button>
        </div>
      </div>
    );
  }
}

export default SizeSetting;


// hoc den day https://youtu.be/zv5HI-ng3I0?list=PLJ5qtRQovuEOoKffoCBzTfvzMTTORnoyp