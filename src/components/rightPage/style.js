import styled from 'styled-components';

export const RightPage = styled.div`
  width: 6.25rem;
  height: auto;
  padding: 0px 0.2rem;
`;

export const RightTopBox = styled.div`
  position: relative;
  height: 3rem;
  width: 100%;
  margin-bottom: 0.25rem;
    .right-top-borderBox12 {
        width: inherit;
        height: inherit;
        padding: 0.1875rem;
      .right-top {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          // &-content {
          //   display: flex;
          //   justify-content: space-between;
          //   align-items: center;
          //   margin-top: 0.1875rem;
          // }
          // .earth-gif {
          //   width: 2.75rem;
          //   height: auto;
          //   border-radius: 50%;
          //   overflow: hidden;
          // }
    }
  }
`;

export const RightCenterBox = styled.div`
  position: relative;
  height: 3.125rem;
  width: 100%;
  margin-bottom: 0.25rem;
  .right-center-borderBox12 {
        width: inherit;
        height: inherit;
        padding: 0.1875rem;
      .right-center {
          width: 100%;
          height: 100%;
          border-radius: 10px;
    }
  }
`;

export const RightBottomBox = styled.div`
  position: relative;
  height: 6rem;
  width: 100%;
  .right-bottom-borderBox13 {
    padding: 0.25rem 0.1875rem 0.1875rem;
    .right-bottom {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-color: rgba(19, 25, 47, 0.6);
      .feedback-box {
        margin-top: 0.1rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        &-item {
          display: flex;
          align-items: center;
          flex-direction: column;
          height: 1.75rem;
          .dis-text {
            font-weight: bold;
            margin-top: 0.0625rem;
            color: #b2cfee;
            font-size: 0.2rem;
            background: linear-gradient(to bottom, #fff, #6176F4);
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
          }
        }
      }
      .offline-portal-box {
        margin-top: 0.125rem;
      }
    }
  }
`;


export const Right11 = styled.div`
  display: flex;
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
  width: 100%;
  height: 2rem;
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
      padding: 0 0;
      width: 45%;
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