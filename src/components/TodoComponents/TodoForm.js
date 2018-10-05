import React from "react";


const TodoForm = props => {

return (
    <div>
   

    <div className="form-container">
    
    <input name= "input"  onChange={this.changeInputHandler}/>

    <button onClick= {this.addToHandler}>Add </button>

    <button>Clear </button>
    
    
    </div>
  </div>



);

}

export default TodoForm;