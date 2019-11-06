function RatingButton() {
  return (
    <div className="buttonOuter">
      <div className="internalButtonContent">
        <img src="/images/get-it-face.png"/>
        <p>I get this</p>
      </div>
      <style jsx>{`
        .buttonOuter {
          padding: 10px;
          width: 150px;
          height: 125px;
          background-color: #B775E0;
          box-shadow: 0px 4px 0px #9F0B37;
          border-radius: 20px;
          display: inline-block;
          color: white;
          font-size: 20px;
          font-weight: 600;
          text-align: center;
        }
        .buttonOuter:hover {
          filter: brightness(103%);
          transform: scale(1.1);
          transform-origin: center;
        }
        .buttonOuter:active {
          filter: brightness(105%);
        }
        .internalButtonContent {
          position: relative;
          top: 10px;
        }
        img {
          width: 65px;
          height: 65px;
        }
        p {
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default RatingButton
