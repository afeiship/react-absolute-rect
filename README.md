# react-absolute-rect
> Absolute rect for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-absolute-rect
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| top       | number | false    | 0       | Css style.top(number).                |
| right     | number | false    | 0       | Css style.right(number).              |
| bottom    | number | false    | 0       | Css style.bottom(number).             |
| left      | number | false    | 0       | Css style.left(number).               |
| smooth    | bool   | false    | false   | If open css-behavior smooth.          |


## usage
1. import css
  ```scss
  @import "~@jswork/react-absolute-rect/dist/style.css";

  // or use sass
  @import "~@jswork/react-absolute-rect/dist/style.scss";

  // customize your styles:
  $react-absolute-rect-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAbsoluteRect from '@jswork/react-absolute-rect';
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

  ```

## documentation
- https://afeiship.github.io/react-absolute-rect/


## license
Code released under [the MIT license](https://github.com/afeiship/react-absolute-rect/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-absolute-rect
[version-url]: https://npmjs.org/package/@jswork/react-absolute-rect

[license-image]: https://img.shields.io/npm/l/@jswork/react-absolute-rect
[license-url]: https://github.com/afeiship/react-absolute-rect/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-absolute-rect
[size-url]: https://github.com/afeiship/react-absolute-rect/blob/master/dist/react-absolute-rect.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-absolute-rect
[download-url]: https://www.npmjs.com/package/@jswork/react-absolute-rect
