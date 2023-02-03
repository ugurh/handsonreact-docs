import React, { Component } from 'react';

class ExplainBindingsComponent extends Component {
    
    handleClickMe = () =>{
        console.log(this);
        alert("Hello");
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickMe}>Click handleClickMe</button>            
            </div>
        );
    }
}

export default ExplainBindingsComponent;