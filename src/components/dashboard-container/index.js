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
    if(app.state.options.length > 0){
      let position = Math.floor(Math.random()*app.state.options.length)
      console.log('choice', app.state.options[position].title);
      let chosenOption = app.state.options[position].title;
      app.setState(prevState =>({
        choice: chosenOption,
        modalOpen: true
      }))
    }else{
      app.setState(prevState => ({
        modalOpen: true
      }))
    }
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

        {renderIf(app.state.modalOpen && app.state.options.length === 0,
          <Modal
           close={() => app.setState({modalOpen:false})}
           reset={() => app.setState({options: [], choice:'', modalOpen: false})}
           header='You Must Enter an Option'
           button2='Start over, reset everything'
          >
          </Modal>
        )}

        {renderIf(app.state.modalOpen && app.state.options.length > 0,
           <Modal
           flavor={app.state.choice}
           close={() => app.setState({modalOpen:false})}
           reset={() => app.setState({options: [], choice:'', modalOpen: false})}
           header='Your selection is:'
           button2='Reset Mr Selector'
           >
           </Modal>

        )}
      </section>
    )
  }
}

//TODO build a modal to display the choice, possibly change the "choice made" in state from a boolean to a string value. When the modal is closed, change state to blank string.

export default DashboardContainer;
