const AppContainer = props => (
  <div className="appContainerStyle">
    {props.children}
  <style jsx>{`
    .appContainerStyle {
      padding: 20px;
      padding-left: 40px;
      border-radius: 30px;
      background-color: white;
      height: 100%;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 100%;
      flex: 1;
      margin-top: 20px;
      width: 130%;
      background-color: white;
      height: 700px;
    }
    @media (max-width: 600px) {
      .appContainerStyle {
        width: 90%;
        margin: 0 auto;
      }
    }
  `}</style>
  <style jsx global>{`
    body {
      background-color: #6462EF;
    }
    html,
    body {
    	height: 100%;
    }
  `}</style>
  </div>
);

export default AppContainer;
