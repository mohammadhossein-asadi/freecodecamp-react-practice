import "./App.css";
import SimpleJsxElement from "./components/SimpleJsxElement";
import ComplexJSXElement from "./components/ComplexJSXElement";
import RenderHtmlElement from "./components/RenderHtmlElement";
import HTmlClassInJSX from "./components/HTmlClassInJSX";
import ClosingTag from "./components/ClosingTag";
import FunctionalComponent from "./components/FunctionalComponent";
import ReactComponent from "./components/ReactComponent";

function App() {
  return (
    <>
      <SimpleJsxElement />
      <ComplexJSXElement />
      <RenderHtmlElement />
      <HTmlClassInJSX />
      <ClosingTag />
      <FunctionalComponent />
      <ReactComponent />
    </>
  );
}

export default App;
