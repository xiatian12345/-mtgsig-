
0.绕过版本，目前只测试了h5的闪购平台
1.安装nodejs，版本必须为v18.20.3
2.安装依赖，在backend目录下执行npm install
3.配置账号信息，用EditThisCookie插件导入商家端cookie，放入到mtck.json文件中
4.配置config.jso中的chromepath和端口
5.启动服务，在backend目录下执行node index.js

6.如果要测试，可以用postman或者api.js