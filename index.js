const path = require('path');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');

/**
 * 异步加载Antd Icon组件
 */
class AsyncAntdIconPlugin {
  apply(compiler) {
    new NormalModuleReplacementPlugin(/antd\/es\/icon\/index\.js/, path.resolve(__dirname, 'AsyncIcon.js')).apply(compiler);
  }
}

module.exports = AsyncAntdIconPlugin;
