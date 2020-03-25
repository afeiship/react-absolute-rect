import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-absolute-rect';

export default class ReactAbsoluteRect extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    className: PropTypes.string,
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    smooth: PropTypes.bool
  };

  static defaultProps = {
    /**
     * Css style.top(number).
     */
    top: 0,
    /**
     * Css style.right(number).
     */
    right: 0,
    /**
     * Css style.bottom(number).
     */
    bottom: 0,
    /**
     * Css style.left(number).
     */
    left: 0,
    /**
     * If open css-behavior smooth.
     */
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
        data-smooth={smooth}
        className={classNames(CLASS_NAME, className)}
        style={_style}
        {...props}
      />
    );
  }
}
