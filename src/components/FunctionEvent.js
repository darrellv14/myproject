function FunctionEvent() {
  const handleClick = () => {
    console.log('Button is Clicked');
  };
  return(
    <div>
      Functional Component
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

export default FunctionEvent;