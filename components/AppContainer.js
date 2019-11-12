const AppContainer = props => (
  <div className="appContainerStyle">
    {props.children}
  <style jsx>{`
    .appContainerStyle {
      height: -webkit-fill-available;
      padding: 20px;
      padding-left: 40px;
      border-radius: 30px;
      background-color: white;
      height: 700px;
      display: flex;
      flex-direction: column;
      flex-basis: 100%;
      flex: 1;
      margin-top: 20px;
      width: 130%;
      background-color: white;
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
  `}</style>
  </div>
);

export default AppContainer;
