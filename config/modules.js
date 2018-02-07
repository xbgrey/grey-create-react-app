const path = require("path");
module.exports = {
    
    'react-native': 'react-native-web',

    // 项目页面包
    pages: path.resolve(__dirname, "../src", "pages"),

    // 路由配置面包
    entry: path.resolve(__dirname, "../src", "entry"),
};