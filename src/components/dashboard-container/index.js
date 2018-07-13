import React from 'react';
import uuid from 'uuid/v1';


let renderIf = (test, component) => test ? component : undefined

class DashboardContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      //fill in some stuff here probably
    }

    this.optionCreate = this.optionCreate.bind(this);
    this.optionDelete = this.optionDelete.bind(this);
    this.optionUpdate = this.optionUpdate.bind(this);
  }

  optionCreate(option){
    option.id = uuid();
    let {app} = this.props;
    app.setState(prevState => ({
      options: prevState.options.concat([option])
    }))
  }

  optionDelete(option){
    let {app} = this.props;
    app.setState(prevState => ({
      options: prevState.options.filter((item) => {
        return item.id !== option.id
      })
    }))
  }

  optionUpdate(option){
    let {app} = this.props;
    app.setState(prevState => ({
      options: prevState.options.map((item) => {
        return item.id === option.id ? option: item;
      })
    }))
  }

  render(){
    let {app} = this.props;

    console.log('__STATE__', app.state);

    return (
      <section className='dashboard'>
        <h1> look, a dashbarod container</h1>

        <button>RANDOM SELECTION</button>
      </section>
    )
  }
}

export default DashboardContainer;
