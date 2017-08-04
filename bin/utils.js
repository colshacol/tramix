exports.mapCustomProps = (props) => {
  const propsArray = Object.entries(props);
  return func => {
    propsArray.forEach(func);
  };
};