import React from 'react'
//Adding the above import solves the problems described below:
//  Line 6:   'React' must be in scope when using JSX  react/react-in-jsx-scope
//   Line 7:  'React' must be in scope when using JSX  react/react-in-jsx-scope
import {
    Button,
    Radio
} from "antd";
import './App.css';

function App() {
  return (
      <div className="App">
          <Button type="primary">Button</Button>
            <br/>
          <Radio.Group value='large' >
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
      </div>
  );
}

export default App;
