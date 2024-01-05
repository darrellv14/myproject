import { useState } from 'react';
import Counter from './Counter';
import FunctionalCounter from './FunctionalCounter';

export default function ConditionalComponent(){
  const [display, setDisplay] = useState(true);

  // Cara Conditional Rendering pake elements
  // let output;
  // if(display) {
  //   output = <h3>This is a conditional component</h3>;
  // } else {
  //   output = <h3>Nothing to see here</h3>;
  // }
  // return <div>{output}</div>

  // Cara ternary
  return display ? (
    <div>
      <h3>This is a conditional component</h3>
    </div>
  ) : (
    <div>
      <h3>Nothing to see here</h3>
    </div>
  );
}