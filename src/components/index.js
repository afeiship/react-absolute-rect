import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CLASS_NAME = 'react-absolute-rect';
const val = (value, defaults) => {
  return typeof value === 'undefined' ? defaults : value;
};

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
     * Css style for top, right, bottom, left.
     */
    trbl: PropTypes.number,
    /**
     * If open css-behavior smooth.
     */
    smooth: PropTypes.bool
  };

  static defaultProps = {
    trbl: 0,
    smooth: false
  };

  get trblStyle() {
    const { top, right, bottom, left, trbl } = this.props;

    return {
      top: val(top, trbl),
      right: val(right, trbl),
      bottom: val(bottom, trbl),
      left: val(left, trbl)
    };
  }

  render() {
    const { className, top, right, bottom, left, style, smooth, ...props } = this.props;
    const _style = { ...this.trblStyle, ...style };

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
