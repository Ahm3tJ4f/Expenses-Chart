import React, {Component} from 'react';


class Record extends Component{

  constructor(props) {
    super(props);
  }

  render() {
    
    const { entry,value } = this.props;
    
    const randomHeight = Math.floor(Math.random()*100);

    return <li className='Record'>
        <span style={{height: `${randomHeight+10}%`}} className = 'Record__value' ></span>
        <span className = 'Record__name'>{entry}</span>
    </li>;

  }


}

export default Record;


