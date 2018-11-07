'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _infact = require('./infact');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function isDescendentOf(element, ancestor) {
  while (element) {
    if (element === ancestor) {
      return true;
    }
    element = element.offsetParent;
  }

  return false;
}

var DraggablePigeon = function (_Component) {
  _inherits(DraggablePigeon, _Component);

  function DraggablePigeon(props) {
    _classCallCheck(this, DraggablePigeon);

    var _this = _possibleConstructorReturn(this, (DraggablePigeon.__proto__ || Object.getPrototypeOf(DraggablePigeon)).call(this, props));

    _this.wa = function (e, t, o) {
      return window.addEventListener(e, t, o);
    };

    _this.wr = function (e, t) {
      return window.removeEventListener(e, t);
    };

    _this.bindMouseEvents = function () {
      _this.wa('mousedown', _this.handleDragStart);
      _this.wa('mousemove', _this.handleDragMove);
      _this.wa('mouseup', _this.handleDragEnd);
    };

    _this.bindTouchEvents = function () {
      _this.wa('touchstart', _this.handleDragStart, { passive: false });
      _this.wa('touchmove', _this.handleDragMove, { passive: false });
      _this.wa('touchend', _this.handleDragEnd, { passive: false });
    };

    _this.unbindMouseEvents = function () {
      _this.wr('mousedown', _this.handleDragStart);
      _this.wr('mousemove', _this.handleDragMove);
      _this.wr('mouseup', _this.handleDragEnd);
    };

    _this.unbindTouchEvents = function () {
      _this.wr('touchstart', _this.handleDragStart);
      _this.wr('touchmove', _this.handleDragMove);
      _this.wr('touchend', _this.handleDragEnd);
    };

    _this.handleDragStart = function (event) {
      if (isDescendentOf(event.target, _this._dragRef)) {
        event.preventDefault();

        _this.setState({
          isDragging: true,
          startX: (event.touches ? event.touches[0] : event).clientX,
          startY: (event.touches ? event.touches[0] : event).clientY,
          deltaX: 0,
          deltaY: 0
        });

        if (_this.props.onDragStart) {
          _this.props.onDragStart();
        }
      }
    };

    _this.handleDragMove = function (event) {
      if (!_this.state.isDragging) {
        return;
      }

      event.preventDefault();

      var x = (event.touches ? event.touches[0] : event).clientX;
      var y = (event.touches ? event.touches[0] : event).clientY;

      _this.setState({
        deltaX: x - _this.state.startX,
        deltaY: y - _this.state.startY
      });

      if (_this.props.onDragMove) {
        var _this$props = _this.props,
            left = _this$props.left,
            top = _this$props.top,
            offset = _this$props.offset,
            pixelToLatLng = _this$props.pixelToLatLng;

        _this.props.onDragMove(pixelToLatLng([left + x - _this.state.startX + (offset ? offset[0] : 0), top + y - _this.state.startY + (offset ? offset[1] : 0)]));
      }
    };

    _this.handleDragEnd = function (event) {
      if (!_this.state.isDragging) {
        return;
      }

      event.preventDefault();

      var _this$props2 = _this.props,
          left = _this$props2.left,
          top = _this$props2.top,
          offset = _this$props2.offset,
          pixelToLatLng = _this$props2.pixelToLatLng;
      var _this$state = _this.state,
          deltaX = _this$state.deltaX,
          deltaY = _this$state.deltaY;

      _this.props.onDragEnd && _this.props.onDragEnd(pixelToLatLng([left + deltaX + (offset ? offset[0] : 0), top + deltaY + (offset ? offset[1] : 0)]));

      _this.setState({
        isDragging: false,
        deltaX: 0,
        deltaY: 0
      });
    };

    _this.setRef = function (ref) {
      _this._dragRef = ref;
    };

    _this.state = {
      isDragging: false,
      deltaX: 0,
      deltaY: 0
    };
    return _this;
  }

  _createClass(DraggablePigeon, [{
    key: 'componentDidMount',
    value: function () {
      this.bindMouseEvents();
      this.bindTouchEvents();
    }
  }, {
    key: 'componentWillUnmount',
    value: function () {
      this.unbindMouseEvents();
      this.unbindTouchEvents();
    }
  }, {
    key: 'render',
    value: function () {
      var _props = this.props,
          left = _props.left,
          top = _props.top,
          className = _props.className,
          style = _props.style;
      var _state = this.state,
          deltaX = _state.deltaX,
          deltaY = _state.deltaY;

      return _infact.React.createElement('div', {
        style: _extends({}, style || {}, {
          position: 'absolute',
          transform: 'translate(' + (left + deltaX) + 'px, ' + (top + deltaY) + 'px)'
        }),
        ref: this.setRef,
        className: 'pigeon-drag-block' + (className ? ' ' + className : '') }, this.props.children);
    }
  }]);

  return DraggablePigeon;
}(_infact.Component);

DraggablePigeon.propTypes = {
  anchor: _propTypes2.default.array.isRequired,
  offset: _propTypes2.default.array,
  className: _propTypes2.default.string,
  left: _propTypes2.default.number,
  top: _propTypes2.default.number,
  pixelToLatLng: _propTypes2.default.func
};
exports.default = DraggablePigeon;