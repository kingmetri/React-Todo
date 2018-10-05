import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  //this holds the current STATE of the application. You cannot hold state in a function must be class-based.
  //STATE live in the APP.JS
  state = { 
    
    todos:[
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    
    }
  ],
  input: ''
};


//The onchange event occurs when the value of an element has been changed.For 
//radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.
//e for event

//change
changeInputHandler = e => {
this.setState({[e.target.name] : e.target.value })

};

//add to the list
addToHandler = e =>{
e.preventDefault();
const todos = this.state.todos.slice(); //creates new array 

todos.push( {task:this.state.input, done: false, id:Date.now()});  //uses current time as unique id to push the new data into an array

this.setState({todos, input: ''}); // clearing...


}

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <div className="form-container">
        
        <input name= "input"  onChange={this.changeInputHandler}/>
        <button onClick= {this.addToHandler}>Add </button>
        <button>Clear </button>
        
        
        </div>
      </div>
    );
  }
}

export default App;
