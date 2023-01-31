import ReactDOM from "react-dom";

// HOC
const Portal = (Component) => (props) => {
  return ReactDOM.createPortal(
    <Component {...props} />,
    document.getElementById("portal")
  );
};

export default Portal;
