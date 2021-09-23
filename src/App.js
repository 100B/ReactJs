import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        var a = 5;
        var b = 7;
        var name = 'Toan dep trai';
        var product = {
            id: 1,
            name: 'Iphone 7 Plus',
            price: 15000000
        }
        return (
            <div>                
                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand">Title</a>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Link</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <h2>
                        a : { a } <br/>
                        b : { b } <br/>
                        a + b = { a + b}
                    </h2>
                    <h3>name : { name }</h3>
                    <h3>
                        ID : {product.id} <br/>
                        Name: {product.name} <br/>
                        Price: {product.price} VND <br/>
                    </h3>
                </div>                
            </div>
        )
    }
}

export default App;


// hoc den bai nay https://www.youtube.com/watch?v=hQC5cjOGIgU&list=PLJ5qtRQovuEOoKffoCBzTfvzMTTORnoyp&index=5