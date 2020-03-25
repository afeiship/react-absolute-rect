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
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Css style.top(number).
     */
    top: PropTypes.number,
    /**
     * Css style.right(number).
     */
    right: PropTypes.number,
    /**
     * Css style.bottom(number).
     */
    bottom: PropTypes.number,
    /**
     * Css style.left(number).
     */
    left: PropTypes.number,
    /**
     * If open css-behavior smooth.
     */
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
        data-smooth={smooth}
        className={classNames(CLASS_NAME, className)}
        style={_style}
        {...props}
      />
    );
  }
}
