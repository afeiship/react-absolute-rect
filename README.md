# react-absolute-rect
> Absolute rect for react.

## installation
```shell
npm install -S @feizheng/react-absolute-rect
```

## update
```shell
npm update @feizheng/react-absolute-rect
```

## properties
| Name      | Type   | Default | Description |
| --------- | ------ | ------- | ----------- |
| className | string | -       |
| top       | number | 0       |
| right     | number | 0       |
| bottom    | number | 0       |
| left      | number | 0       |
| smooth    | bool   | false   |             |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-absolute-rect/dist/style.scss";

  // customize your styles:
  $react-absolute-rect-options: ()
  ```
2. import js
  ```js
  import ReactAbsoluteRect from '@feizheng/react-absolute-rect';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <div className="app-container" style={{ height: 400 }}>
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
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-absolute-rect/
