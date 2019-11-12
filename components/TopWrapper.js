const TopWrapper = props => (
  <div className="topWrapperStyle">
    {props.children}
  <style jsx>{`
    .topWrapperStyle {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
    }
  `}</style>
  </div>
)

export default TopWrapper
