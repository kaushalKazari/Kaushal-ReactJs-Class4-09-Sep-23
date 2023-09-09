// import area
import React from 'react';
import ReactDOM from 'react-dom/client';


// Every component has its own data/states
class A extends React.Component{
  // 1. properties/Variables
  state;

  // 2. constractor
  constructor(){
    super();
    // state is the JS Object of the class which can hold some data
    this.state={ // state initialization
      name:'Rakesh',
      surname:'Sharma',
      address:'Bnaras'
    }
  }

  // 3. methods
  render(){    
    // updating the exiting state
    this.setState={
      ...this.state, // ... spred operator ES6
      name:'SUryabhan'
    }
    return(
      <>
        <h1>OkLabs {this.props.name} {this.props.surname} {this.props.children}</h1>
        <h2>{this.state.name} {this.state.surname} {this.state.address}</h2>
      </>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<A name='Divyansh' surname='Kumar'> New Delhi </A>
  </>
);
