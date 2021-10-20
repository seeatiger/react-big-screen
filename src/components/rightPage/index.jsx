import React, { PureComponent } from 'react';
import {BorderBox1, BorderBox12,BorderBox13 } from '@jiaminghi/data-view-react';
import BrowseCategories from './charts/BrowseCategories';
import OfflinePortal from './charts/OfflinePortal';
import Feedback from './charts/Feedback';
import { ModuleTitle } from '../../style/globalStyledSet';
import { connect } from 'dva';
import {
  RightPage,
  RightTopBox,
  
  RightBottomBox,
} from './style';
import {  Right11 } from './style';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {detailsList, offline, browseCategories, userIdentityCategory } = this.props;
    return (
      <RightPage>
        <RightTopBox>
          <BorderBox12 className='right-top-borderBox12'>
          <div className='right-top'>
            <ModuleTitle>
              <i className='iconfont'>&#xe7f7;</i>
              <span>关联数据类别分布</span>
            </ModuleTitle>
            <div className='right-top-content'>
                <Right11>
                  <div className='detail-list'>
                    {detailsList
                      ? detailsList.map((item, index) => {
                          return (
                            <div className='detail-list-item' key={index}>
                              <img
                                src={require(`../../assets/images/center-details-data${
                                  index + 1
                                }.png`)}
                                alt={item.title}
                              />
                              <div className='detail-item-text'>
                                <h3>{item.title}</h3>
                                <span>{item.number}</span>
                                <span className='unit'>{item.unit}</span>
                              </div>
                            </div>
                          );
                        })
                      : ''}
                      
                  </div>
              </Right11>
            </div>
          </div>
          </BorderBox12>
        </RightTopBox>



        <RightBottomBox>
          <BorderBox13 className='right-bottom-borderBox13'>
            <div className='right-bottom'>
              <ModuleTitle>
                <i className='iconfont'>&#xe790;</i>
                <span>放射源统计</span>
              </ModuleTitle>
              {/* 反馈 */}
              <div className='feedback-box'>
                <div style={{position: 'relative'}}>
                {offline
                  ? offline.feedback.map((item, index) => {
                      return (
                        <div className='feedback-box-item' key={index}>
                          <Feedback FeedbackData={item}></Feedback>
                          <span className='dis-text'>{item.title}</span>
                        </div>
                      );
                    })
                  : ''}
                  </div><div style={{position: 'relative'}}>
                  {offline
                  ? offline.feedback.map((item, index) => {
                      return (
                        <div className='feedback-box-item' key={index}>
                          <Feedback FeedbackData={item}></Feedback>
                          <span className='dis-text'>{item.title}</span>
                        </div>
                      );
                    })
                  : ''}</div>
                  <div style={{position: 'relative'}}>
                  {offline
                  ? offline.feedback.map((item, index) => {
                      return (
                        <div className='feedback-box-item' key={index}>
                          <Feedback FeedbackData={item}></Feedback>
                          <span className='dis-text'>{item.title}</span>
                        </div>
                      );
                    })
                  : ''}</div>
                  <div style={{position: 'relative'}}>
                  {offline
                  ? offline.feedback.map((item, index) => {
                      return (
                        <div className='feedback-box-item' key={index}>
                          <Feedback FeedbackData={item}></Feedback>
                          <span className='dis-text'>{item.title}</span>
                        </div>
                      );
                    })
                  : ''}</div>
              </div>
              {/* 门店 */}
              <div className='offline-portal-box'>
                {offline ? (
                  <OfflinePortal
                    offlinePortalData={offline.offlinePortalData}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
          </BorderBox13>
        </RightBottomBox>
      </RightPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    browseCategories: state.rightPage.browseCategories,
    userIdentityCategory: state.rightPage.userIdentityCategory,
    offline: state.rightPage.offline,
    detailsList: state.rightPage.detailsList,
  };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
