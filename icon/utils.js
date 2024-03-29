/* eslint-disable */
var _svgBaseProps;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

import warning from 'antd/es/_util/warning'; // These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4

export var svgBaseProps = ((_svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
}),
_defineProperty(_svgBaseProps, 'aria-hidden', true),
_defineProperty(_svgBaseProps, 'focusable', 'false'),
_svgBaseProps);
var fillTester = /-fill$/;
var outlineTester = /-o$/;
var twoToneTester = /-twotone$/;
export function getThemeFromTypeName(type) {
  var result = null;

  if (fillTester.test(type)) {
    result = 'filled';
  } else if (outlineTester.test(type)) {
    result = 'outlined';
  } else if (twoToneTester.test(type)) {
    result = 'twoTone';
  }

  return result;
}
export function removeTypeTheme(type) {
  return type
    .replace(fillTester, '')
    .replace(outlineTester, '')
    .replace(twoToneTester, '');
}
export function withThemeSuffix(type, theme) {
  var result = type;

  if (theme === 'filled') {
    result += '-fill';
  } else if (theme === 'outlined') {
    result += '-o';
  } else if (theme === 'twoTone') {
    result += '-twotone';
  } else {
    warning(
      false,
      'Icon',
      "This icon '".concat(type, "' has unknown theme '").concat(theme, "'")
    );
  }

  return result;
} // For alias or compatibility

export function alias(type) {
  var newType = type;

  switch (type) {
    case 'cross':
      newType = 'close';
      break;
    // https://github.com/ant-design/ant-design/issues/13007

    case 'interation':
      newType = 'interaction';
      break;
    // https://github.com/ant-design/ant-design/issues/16810

    case 'canlendar':
      newType = 'calendar';
      break;

    default:
  }

  warning(
    newType === type,
    'Icon',
    "Icon '"
      .concat(type, "' is typo and depracated, please use '")
      .concat(newType, "' instead.")
  );
  return newType;
}
