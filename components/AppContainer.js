const AppContainer = props => (
  <div className="appContainerStyle">
    {props.children}
  <style jsx>{`
    .appContainerStyle {
      margin: 20;
      padding: 20;
      maxWidth: 950;
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
