const MinusButton = ({ setCounter }) => {
  return <div onClick={() => setCounter((prev) => prev - 1)}>-1</div>;
};

export { MinusButton };
