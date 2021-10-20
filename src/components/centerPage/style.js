import styled from 'styled-components';
import cir0 from '../../assets/images/cir0.png';
import cir1 from '../../assets/images/cir1.png';
import cir2 from '../../assets/images/cir2.png';

export const CenterPage = styled.div`
  // margin-top: 0.25rem;
   width: 6.425rem;

  // display: flex;
  // flex-direction: column;
  align-items: center;
  height: auto;
  padding: 0.2rem;
  padding-bottom: 0px;

  @keyframes bganomation{
    0%{width: 50%;}
    50%{width: 0%;}
    100%{width: 50%;}
  }

  @keyframes rotate1{
    100%{
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes retate2{
    100%{transform: translate(-50%, -50%) rotate(-360deg);}
  }
  .map_bg{
    position: absolute;
    top: 54%;
    left: 15%;
    width: 60.8vh;
    height: 60.8vh;
    min-width: 280px;
    min-height: 280px;
    transform: translate(-50%,-50%);
    background: url(${cir0})  center no-repeat;
    background-size: 60.8vh 60.8vh;
    opacity: 0.3;
  }
  .circle_allow{
    position: absolute;
    top: 54%;
    left: 15%;
    width: 62vh;
    height: 62vh;
    min-width: 280px;
    min-height: 280px;
    transform: translate(-50%,-50%);
    background: url(${cir1})  center no-repeat;
    background-size: 62vh 62vh;
    animation: retate2 10s linear infinite;
  }

  .circle_bg{
    position: absolute;
    top: 54%;
    left: 15%;
    width: 64vh;
    height: 64vh;
    transform: translate(-50%,-50%);
    background: url(${cir2}) center no-repeat;
    background-size: 64vh 64vh;
    animation: rotate1 10s linear infinite;
    opacity: 0.4;
  }
  
`;

export const CenterBottom = styled.div`
  display: flex;
  margin-bottom: 0.25rem;
  margin-top: 0.875rem;
  width: 100%;
  // height: 3.25rem;
  height: auto;
  .detail-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-between;
    justify-content: space-around;
    width: 100%;
    &-item {
      display: flex;
      align-items: center;
      position: relative;
      height: 1.5625rem;
      padding: 0 0.125rem;
      width: 32%;
      border-radius: 5px;
      border: 1px solid #343f4b;
      background-color: rgba(19, 25, 47, 0.8);
      img {
        width: 1.25rem;
        height: 1.25rem;
      }
      .detail-item-text {
        margin-left: 0.125rem;
        h3 {
          color: #bcdcff;
          font-size: 16px;
          margin-bottom: 0.25rem;
        }
        span {
          font-weight: 500px;
          font-size: 0.25rem;
          font-weight: bolder;
          background: linear-gradient(to bottom, #fff, #4db6e5);
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }
        .unit {
          font-size: 0.2rem;
          margin-left: 0.125rem;
        }
      }
    }
  }
`;


