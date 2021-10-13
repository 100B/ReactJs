import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';

class App extends Component {
  render(){
    return(
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1><hr/>
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {/* Form */ } 
            <TaskForm />
            <div className="panel panel-warning">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    Thêm công Việc
                    <span
                      className="fa fa-times-circle text-right"
                    ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form>                    
                      <div class="form-group">
                        <label for="">Tên: </label>
                        <input 
                          type="text" 
                          class="form-control" 
                          name="name"
                        />
                      </div>

                      <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            
          </div>
        </div>
        
      </div>
    )
  }
}


hoc den day https://youtu.be/yCW6PP87-OU?list=PLJ5qtRQovuEOoKffoCBzTfvzMTTORnoyp&t=909