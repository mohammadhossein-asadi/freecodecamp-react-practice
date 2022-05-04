const ComplexJSXElement = () => {
  const JSX = (
    <div>
      {/* Comment */}

      <h1>h1</h1>
      <p>p</p>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </div>
  );
  return <div>{JSX}</div>;
};

export default ComplexJSXElement;
