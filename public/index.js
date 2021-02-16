import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAbsoluteRect from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-absolute-rect">
        <ReactAbsoluteRect>
          <h1>ReactAbsoluteRect</h1>
          <p>
            <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
          </p>
          <p>
            <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
          </p>
          <p>
            <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
          </p>
          <p>
            <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
          </p>
          <p>
            <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
          </p>
          <p>
            <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
          </p>
          <p>
            <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
          </p>
          <p>
            <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
          </p>
          <p>
            <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
          </p>
          <p>
            <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
          </p>
          <p>
            <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
          </p>
          <p>
            <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
          </p>
          <p>
            <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
          </p>
          <p>
            <img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
          </p>
        </ReactAbsoluteRect>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
