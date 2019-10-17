/* eslint-disable */
import * as React from 'react';
import 'antd/es/icon/style';
import * as tslib from 'tslib';
// 为了解决antd icon全量打包体积太大的问题
var LazyIcon = React.lazy(function() {
  return import(/* webpackChunkName: "anticon" */ './icon/index.js');
});
var AsyncIcon = (function(_super) {
  tslib.__extends(AsyncIcon, _super);

  function AsyncIcon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AsyncIcon.prototype.componentDidCatch = function() {
    // 防止异步分割代码加载失败是影响主流程运行
  };
  AsyncIcon.prototype.render = function() {
    return (React.createElement(React.Suspense, { fallback: React.createElement('i', { className: 'anticon' }) },
      React.createElement(LazyIcon, tslib.__assign({}, this.props))));
  };
  return AsyncIcon;
}(React.Component));
export default AsyncIcon;
