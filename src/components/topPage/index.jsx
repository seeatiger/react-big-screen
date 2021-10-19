import React, { PureComponent, Fragment } from 'react';
import { formatTime } from '../../utils';
import {BorderBox8,
  Decoration10,
  Decoration8,
  Decoration6,
  BorderBox13,
} from '@jiaminghi/data-view-react';

import { TopBox, TimeBox } from './style';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '南 京 放 射 源 在 线 监 视',
      timeStr: '',
      weekday: [
        '星期天',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
      ],
    };
  }

  // 设置时间
  componentDidMount() {
    this.setTimingFn();
  }

  setTimingFn() {
    this.timing = setInterval(() => {
      let dateYear = formatTime(new Date(), 'yyyy-MM-dd');
      let dateDay = formatTime(new Date(), 'HH: mm: ss');
      let dateWeek = this.state.weekday[new Date().getDay()];
      this.setState({
        timeStr: `${dateYear} | ${dateDay} ${dateWeek}`,
      });
    }, 1000);
  }

  render() {
    const { title } = this.state;
    return (
      <Fragment>
        <TopBox>
          <div className='top_box'>
            <div className='title-box'>
              <div className='title'>
                <BorderBox8 reverse="true" className="border1">
                  <span className='title-text'>{title}</span>
                </BorderBox8>
              </div>

              <Decoration8
                reverse={true}
                className='top_decoration8'
                color={['#568aea', '#000000']}
              />
            </div>
            <Decoration10 className='top_decoration10 top_decoration10_reverse' />
            <TimeBox>
              <h3>{this.state.timeStr}</h3>
            </TimeBox>
          </div>
        </TopBox>
      </Fragment>
    );
  }
}

export default index;