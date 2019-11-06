const AppContainerStyle = {
  margin: 20,
  padding: 20,
};

const AppContainer = props => (
  <div style={AppContainerStyle}>
    {props.children}
  </div>
);

export default AppContainer;
