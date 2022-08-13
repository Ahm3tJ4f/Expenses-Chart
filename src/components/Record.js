import React, {Component} from 'react';


class Record extends Component{

  constructor(props) {
    super(props);
  }

  render() {
    
    const { entry,value } = this.props;
    
    const randomHeight = Math.floor(Math.random()*100);

    return <div className='Record'>
        <div style={{height: `${randomHeight+10}%`}} className = 'Record__value' ></div>
        <div className = 'Record__name'>{entry}</div>
    </div>;

  }


}

export default Record;


