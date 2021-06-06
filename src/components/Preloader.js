const Preloader = (props) => {
  return <div className={props.load ? "preloader" : "preloader-none"}></div>;
};

export default Preloader;
