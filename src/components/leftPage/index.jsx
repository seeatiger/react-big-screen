import React, { PureComponent } from 'react';
import { LeftPage, LeftTopBox, LeftBottomBox } from './style';
import { ModuleTitle } from '../../style/globalStyledSet';
import { BorderBox12, BorderBox13 } from '@jiaminghi/data-view-react';
import TrafficSituation from './charts/TrafficSituation';
import UserSituation from './charts/UserSituation';
import { connect } from 'dva';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { userSitua, userSitua1, trafficSitua, accessFrequency, peakFlow } = this.props;
    return (
      <LeftPage>
        {/* 顶部图表 */}
        <LeftTopBox>
          <BorderBox12 className='left-top-borderBox12'>
            <div className='left-top'>
              <ModuleTitle>
                <i className='iconfont'>&#xe78f;</i>
                <span>最近七天异常</span>
              </ModuleTitle>
              <div className='title-dis'>
              </div>
              {/* 图表 */}
              <TrafficSituation trafficSitua={trafficSitua}></TrafficSituation>
            </div>
          </BorderBox12>
        </LeftTopBox>

        {/* 底部图表 */}
        <LeftBottomBox>
          <BorderBox13 className='left-bottom-borderBox13'>
            <div className='left-bottom'>
              <ModuleTitle>
                <i className='iconfont'>&#xe88e;</i>
                <span>源异常事件</span>
              </ModuleTitle>
              {/* 图表 */}
              <UserSituation userSitua={userSitua} userSitua1={userSitua1}></UserSituation>
            </div>
          </BorderBox13>
        </LeftBottomBox>
      </LeftPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    accessFrequency: state.leftPage.accessFrequency,
    peakFlow: state.leftPage.peakFlow,
    userSitua: state.leftPage.userSitua,
    userSitua1: state.leftPage.userSitua1,
    trafficSitua: state.leftPage.trafficSitua,
  };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
