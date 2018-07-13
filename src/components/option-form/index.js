import React from 'react';
import './_option-form.scss';

class OptionForm extends Ract.Component{
  constructor(props){
    super(props);

    let title = props.option ? props.option.title : '';
    let weight = props.option ? props.option.weight: 1;

    this.state = { title, weight };

    this.handleChage = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value, type} = e.target

    if (type === 'number') { //type is the type of the field
      try {
        this.setState({
          [name]: parseInt(value)
        })
      } catch (err) {
        console.error(err);
      }
    } else {
      this.setState({
        [name]:value
      })
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return(
      <form className='option-form' onSubmit={this.handleSubmit}>
        <input
          name='title'
          placeholder='choice'
          type='text'
          value={this.state.title}
          onChage={this.handleChange}
        />

        <button
      </form>
    )
  }
}
