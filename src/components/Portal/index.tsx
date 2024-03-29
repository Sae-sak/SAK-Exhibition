import ReactDOM from "react-dom";

// HOC
const Portal = (Component) => (props) => {
  if (typeof window !== "object") return;
  return ReactDOM.createPortal(
    <Component {...props} />,
    document.getElementById("portal")
  );
};

export default Portal;
