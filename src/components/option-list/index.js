import React from 'react';
import OptionForm from '../option-form';
import './option-list.css';

class OptionList extends React.Component{
  render(){
    return (
      <section className='option-list'>
        <ul>
          {this.props.options.map((item, i) =>
            <li key={i}>
              <button className='xOut' onClick={() => this.props.optionRemove(item)}>x</button>
              <div>
                <p className='list-item-title'>{item.title}</p>
              </div>

              <OptionForm
                className='list-item-form'
                option={item}
                submitTitle='update option'
                handleSubmit={(option) => {
                  option.id = item.id;
                  this.props.optionUpdate(option);
                }}
              />
            </li>
        )}
        </ul>
      </section>
    )
  }
}

export default OptionList
