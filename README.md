# react-absolute-rect
> Absolute rect for react.

## installation
```shell
npm install -S @feizheng/react-absolute-rect
```
## properties
| property  | type | description |
| --------- | ---- | ----------- |
| className | -    | -           |
| top       | -    | -           |
| right     | -    | -           |
| bottom    | -    | -           |
| left      | -    | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-absolute-rect/dist/style.scss";

  // customize your styles:
  $react-absolute-rect-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAbsoluteRect from '@feizheng/react-absolute-rect';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactAbsoluteRect />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-absolute-rect/
