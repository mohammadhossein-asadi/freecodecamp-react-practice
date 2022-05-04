import "./App.css";
import SimpleJsxElement from "./components/SimpleJsxElement";
import ComplexJSXElement from "./components/ComplexJSXElement";
import RenderHtmlElement from "./components/RenderHtmlElement";
import HTmlClassInJSX from "./components/HTmlClassInJSX";
import ClosingTag from "./components/ClosingTag";

function App() {
  return (
    <>
      <SimpleJsxElement />
      <ComplexJSXElement />
      <RenderHtmlElement />
      <HTmlClassInJSX />
      <ClosingTag />
    </>
  );
}

export default App;
