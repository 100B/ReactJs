import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products : [
        {
          id : 1,
          name : 'Apple Iphone 6 Plus 16GB',
          price: '15.000.000',
          image : "https://phuckhangmobile.com/file/iphone-6-plus-bac-900-19515f.jpg",
          status : true,
        },
        {
          id : 2,
          name : 'Samsung Galaxy S7',
          price: '18.000.000',
          image : "https://didonghathanh.com.vn/wp-content/uploads/2019/11/anh-dai-dien-samsung-s7-edge-didonghathanh-dep-99.jpg",
          status : true,
        },
        {
          id : 3,
          name : 'Oppo F1s',
          price: '7.000.000',
          image : "https://cdn.tgdd.vn/Products/Images/42/81592/oppo-f1s-7-300x300.jpg",
          status : true,
        }
      ],
      isActive : true
    };
    // this.onSetState = this.onSetState.bind(this);
  }

  onSetState = () => {
    // if(this.state.isActive === true){
    //   this.setState({
    //     isActive : false
    //   });
    // } else{
    //   this.setState({
    //     isActive : true
    //   });
    // }

    this.setState({
      isActive : !this.state.isActive
    });
  }

    render() {

      let elements = this.state.products.map((product, index) => {
        let result = '';
          if(product.status){
            result =  <tr key= { index }>
                        <td> { index }</td>
                        <td>{ product.name }</td>
                        <td>
                          <span className="label label-success"> { product.price } VNĐ</span>
                        </td>
                      </tr>
          }
        return result;
      });

        return (
          <div>
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <a className="navbar-brand">State</a>
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <div className="row">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Giá</th>
                      </tr>
                    </thead>
                    <tbody>
                      { elements }
                    </tbody>
                  </table>
                  
                  <button type="button" className="btn btn-warning" onClick={ this.onSetState } >
                    Active : { this.state.isActive === true ? 'true' : 'false' }
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default App;


// hoc den day https://youtu.be/zv5HI-ng3I0?list=PLJ5qtRQovuEOoKffoCBzTfvzMTTORnoyp