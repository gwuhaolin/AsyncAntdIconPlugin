# Webpack异步分割Antd Icon插件
```js
const AsyncAntdIconPlugin = require('async-antd-icon-plugin');
module.exports = {
    plugins: [
        new AsyncAntdIconPlugin(),
    ]
}
```

输出：
````text
├── out
│   ├── anticon_2e18846702554dfdcb77.js
│   ├── main_0001c095d5b80f7b207a.js
````
