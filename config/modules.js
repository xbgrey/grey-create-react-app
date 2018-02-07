const path = require("path");
module.exports = {
    
    'react-native': 'react-native-web',

    // 项目页包
    pages: path.resolve(__dirname, "../src", "pages"),

    // 路由配置包
    entry: path.resolve(__dirname, "../src", "entry"),

    // 工具包
    utils: path.resolve(__dirname, "../src", "utils"),

    // 组件包
    component: path.resolve(__dirname, "../src", "component"),
};