import ReactAbsoluteRect from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="app-container" style={{ height: 400 }}>
        <ReactAbsoluteRect>
          <p><img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" /></p>
          <p><img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" /></p>
          <p><img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" /></p>
          <p><img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" /></p>
          <p><img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" /></p>
          <p><img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" /></p>
          <p><img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" /></p>
          <p><img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" /></p>
          <p><img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" /></p>
          <p><img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" /></p>
          <p><img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" /></p>
          <p><img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" /></p>
          <p><img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" /></p>
          <p><img src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" /></p>
        </ReactAbsoluteRect>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
