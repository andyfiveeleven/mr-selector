import React from 'react';
import OptionForm from '../option-form';
import './_option-list.scss';

class OptionList extends React.Component{
  render(){
    return (
      <section className='option-list'>
        <ul>
          {this.props.options.map((item, i) =>
            <li key={i}>
              <button onClick={() => this.props.optionRemove(item)}>x</button>
              <div>
                <p>title: {item.title}</p>
              </div>

              <OptionForm
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
