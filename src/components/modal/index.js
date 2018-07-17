import React from 'react';

class Modal extends React.Component {
  render(){
    return (
      <section className='modal'>
        <div className='pop-up'>
          <button onClick={this.props.close}>X</button>
          <button onClick={this.props.reset}>{this.props.button2}</button>
          <h3>{this.props.header}</h3>
          <p>{this.props.flavor}</p>
        </div>
      </section>
    )
  }
}

export default Modal;
