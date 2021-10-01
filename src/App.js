import React, { Component } from 'react';
import './App.css';
import Product from './components/Product';

class App extends Component {

    onClick(){
        console.log('Day la app component');
    }

    onClick2(text){
        console.log(text);
    }

    render() {
        var products = [
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
        ];

        let elements = products.map((product, index) => {
            let result = '';
                if(product.status){
                    result =    <Product
                                    key={product.id}
                                    price={ product.price }
                                    image={ product.image }
                                >
                                    { product.name }
                                </Product>
                }
            return result;
        });

        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand">Props</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                { elements }
                            </div>                            
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">                                
                                <button type="button" className="btn btn-danger" onClick={ this.onClick }>
                                    Click Me !
                                </button>
                                <button type="button" className="btn btn-danger" onClick={ () => { this.onClick2('ABC') } }>
                                    Click Me 2 !
                                </button>                    
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;


// hoc den day https://youtu.be/gqsrcCUxnF0?list=PLJ5qtRQovuEOoKffoCBzTfvzMTTORnoyp&t=249