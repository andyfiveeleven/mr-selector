import React from 'react';

class Modal extends React.Component {
  render(){
    return (
      <section className='modal'>
        <div className='pop-up'>
          <button onClick={this.props.close}>X</button>
          <button onClick={this.props.reset}>Reset Mr Selector</button>
          <h3>Your Selection Is!</h3>
          <p>{this.props.choice}</p>
        </div>
      </section>
    )
  }
}

export default Modal;
