function Button() {
  return (
    <div className="buttonOuter">
      <div className="internalButtonContent">
        <p>Contribute Your Own Explanation</p>
      </div>
      <style jsx>{`
        .buttonOuter {
          padding: 5px;
          width: 328px;
          height: 58px;
          background-color: #5EECC1;
          box-shadow: 0px 4px 0px #3CC795;
          border-radius: 10px;
          display: inline-block;
          color: #000000;
          font-size: 20px;
          font-weight: 600;
          text-align: center;
          vertical-align: center;
          line-height: 23px;
          font-size: 18px;
        }
      `}</style>
    </div>
  )
}

export default Button
