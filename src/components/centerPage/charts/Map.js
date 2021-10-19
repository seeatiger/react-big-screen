import React, { PureComponent } from 'react';
import Chart from '../../../utils/chart';
import { mapOptions } from './options';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
    };
  }

  render() {
    const { renderer } = this.state;
    const { mapData } = this.props;
    return (
      <div
        style={{
          width: '6.425rem',
          height: '12.125rem',
        }}>
          {
            mapData?<Chart renderer={renderer} option={mapOptions(mapData)} />:''
          }
      </div>
    );
  }
}

export default Map;
