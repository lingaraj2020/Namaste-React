/**
 *
 * <div id="parent">
 *      <div id="child">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
 * <div id="child2">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */
import React from "react";
import ReactDOM from "react-dom/client";

//jsx=>react.createlement=>reactelement=>jsobject=>html
//jsx(transpilled before it reaches JS)- parcel - Babel
const jsxheading = <h1>"namaste react by jsx</h1>;
console.log(jsxheading);

//React components //class based component -old way //functional component - new
//React functional component
const ele=<span>React element</span>


const Title =()=>(
  <h1>Namaste react using functional component
  {ele}
  {/* <HeadingComponent/> */}
  </h1>
)

const number=1000;
const HeadingComponent = () => (
  <div>
    {number+100}
    <Title/>
    {Title()}
    <Title></Title>
    namaste react baba
  </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
