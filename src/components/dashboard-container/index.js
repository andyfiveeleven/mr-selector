import React from 'react';
import uuid from 'uuid/v1';

import OptionList from '../option-list';
import OptionForm from '../option-form';
import Modal from '../modal'

let renderIf = (test, component) => test ? component : undefined

class DashboardContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      choiceMade: false,
      choice: ''
    }

    this.optionCreate = this.optionCreate.bind(this);
    this.optionDelete = this.optionDelete.bind(this);
    this.optionUpdate = this.optionUpdate.bind(this);
    this.selectorFunction = this.selectorFunction.bind(this);
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

  selectorFunction(){
    let {app} = this.props
    let position = Math.floor(Math.random()*app.state.options.length)
    console.log()
    console.log('choice', app.state.options[position].title);
  }

  render(){
    let {app} = this.props;

    console.log('__STATE__', app.state);

    return (
      <section className='dashboard'>
        <h1> look, a dashbarod container</h1>

        <OptionForm
          handleSubmit={this.optionCreate}
          submitTitle='add option'
        />

        <OptionList
          optionRemove={this.optionDelete}
          optionUpdate={this.optionUpdate}
          options={app.state.options}
        />

        <button
          onClick={this.selectorFunction}
          >
        >RANDOM SELECTION</button>
      </section>
    )
  }
}

//TODO build a modal to display the choice, possibly change the "choice made" in state from a boolean to a string value. When the modal is closed, change state to blank string.

export default DashboardContainer;
