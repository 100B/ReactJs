import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="thumbnail">
                    <img alt="Inphone" src="https://cdn.tgdd.vn/Products/Images/42/87846/iphone-6s-plus-32gb-hh-600x600-600x600-600x600-600x600.jpg" />
                    <div className="caption">
                        <h3>Iphone 6 Plus</h3>
                        <p>
                            16.000.000 VND
                        </p>
                    </div>
                    <button type="button" className="btn btn-success">Mua hang</button>
                </div>
            </div>  
    );
  }
}

export default Product;

