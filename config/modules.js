const path = require("path");
module.exports = {
    
    'react-native': 'react-native-web',

    // 项目页包
    pages: path.resolve(__dirname, "../src", "pages"),

    // api目录-路由目-全局状态-录包
    entry: path.resolve(__dirname, "../src", "entry"),

    // 工具包
    utils: path.resolve(__dirname, "../src", "utils"),

    // 组件包
    component: path.resolve(__dirname, "../src", "component"),
};