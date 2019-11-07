const AppContainer = props => (
  <div className="appContainerStyle">
    {props.children}
  <style jsx>{`
    .appContainerStyle {
      width: 750px;
      margin: 0 auto;
      margin: 20;
      margin-top: 80px;
      padding: 20;
    }
    @media (max-width: 600px) {
      .appContainerStyle {
        width: 90%;
        margin: 0 auto;
      }
    }
  `}</style>
  </div>
);

export default AppContainer;
