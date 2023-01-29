import ReactDOM from "react-dom";

// HOC
const AlertPortal = (Component) => (props) => {
  return ReactDOM.createPortal(
    <Component {...props} />,
    document.getElementById("alert")
  );
};

export default AlertPortal;
