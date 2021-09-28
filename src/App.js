import userEvent from '@testing-library/user-event';
import React, { Component } from 'react';
import './App.css';

class App extends Component {

    showInfoProduct(product){
        if(product.status){
            return   <h3>
                        ID : {product.id} <br/>
                        Name : {product.name} <br/>
                        Price : {product.price} VND <br/>
                        Status : { product.status ? 'Active' : 'Pending' }
                    </h3>
        }
    }

    render() {
        var a = 5;
        var b = 7;
        var name = 'Toan dep trai';
        var product = {
            id: 1,
            name: 'Iphone 7 Plus',
            price: 15000000,
            status: true,
        }

        var users = [
            {
                id : 1,
                name : 'Nguyen Van A',
                age : 18,
            },
            {
                id : 2,
                name : 'Tran Van B',
                age : 24,
            },
            {
                id : 3,
                name : 'Ly Thi C',
                age : 30,
            },
        ];
        var elements = users.map((user, index) => {
            return  <div key= { user.id }>
                        <h2>Tên : {user.name} </h2>
                        <p>Tuổi : {user.age} </p>
                    </div>
        })
        return (
            <div>                
                <nav className="navbar navbar-inverse">
                    <div>
                        <a className="navbar-brand">Title</a>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Link</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="ml-30">
                    <h2>
                        a : { a } <br/>
                        b : { b } <br/>
                        a + b = { a + b}
                    </h2>
                    <h3>
                        name : { name }
                    </h3>
                    { this.showInfoProduct(product) }
                    <br/>
                    <hr/>
                    { elements }
                </div>                
            </div>
        )
    }
}

export default App;


// hoc den bai nay https://www.youtube.com/watch?v=gqsrcCUxnF0&list=PLJ5qtRQovuEOoKffoCBzTfvzMTTORnoyp&index=7