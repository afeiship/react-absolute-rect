import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-absolute-rect';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    smooth: PropTypes.bool
  };

  static defaultProps = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    smooth: false
  };

  render() {
    const {
      className,
      top,
      right,
      bottom,
      left,
      style,
      smooth,
      ...props
    } = this.props;
    const _style = objectAssign({ top, right, bottom, left }, style);
    return (
      <section
        className={classNames(CLASS_NAME, className)}
        style={_style}
        {...props}
      />
    );
  }
}
