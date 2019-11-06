function RatingButton(props) {
  return (
    <div className="buttonOuter">
      <div className="internalButtonContent">
        {props.children}
      </div>
      <style jsx>{`
        .buttonOuter {
          padding: 10px;
          width: 150px;
          height: 125px;
          background-color: ${props.mainColor};
          box-shadow: 0px 4px 0px ${props.bottomColor};
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
          top: 5px;
        }
        @media (max-width: 600px) {
          .buttonOuter {
            width: 130px;
            height: 120px;
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  )
}

export default RatingButton
