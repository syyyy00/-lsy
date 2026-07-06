# 微信小程序简易计算器 (Mini Program Calculator)

这是一个基于微信小程序原生框架开发的简易计算器项目。它实现了基础的加减乘除及取余运算，并特别处理了 JavaScript 浮点数计算的精度问题，确保计算结果的准确性。

##  项目功能
-  基础四则运算（加、减、乘、除）
-  取余运算 (%)
-  连续运算与等号计算
-  退格 (DEL) 与 清空 (C) 功能
-  浮点数精度修正（解决 0.1 + 0.2 ≠ 0.3 的问题）
-  适配移动端屏幕的响应式布局

## ️ 技术栈
- **核心框架**：微信小程序原生开发 (WXML, WXSS, JavaScript)
- **开发工具**：微信开发者工具
- **算法处理**：自定义 `calc.js` 高精度数学运算工具库

##  项目结构
miniprogram-calculator
├── app.js / app.json / app.wxss # 小程序全局配置
├── pages
│ └── index
│ ├── index.js # 页面逻辑与事件处理
│ ├── index.json # 页面配置（导航栏标题等）
│ ├── index.wxml # 页面结构（按钮与显示区）
│ └── index.wxss # 页面样式（Flex布局与配色）
├── utils
│ └── calc.js # 高精度数学运算工具库
└── README.md # 项目说明文档

##  核心亮点：浮点数精度处理
在 JavaScript 中，直接使用 `+ - * /` 进行浮点数运算容易出现精度丢失（例如 `0.1 + 0.2` 结果为 `0.30000000000000004`）。

本项目引入了自定义的 `utils/calc.js` 工具库，通过以下逻辑解决该问题：
1. 将参与运算的浮点数转化为整数。
2. 使用整数进行精确的数学运算。
3. 将运算结果按比例还原为正确的小数。

## ‍♂️ 如何运行
1. 下载并安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)。
2. 克隆本仓库到本地：
   ```bash
   git clone https://github.com/你的用户名/miniprogram-calculator.git
3.打开微信开发者工具，选择“导入项目”。
4.选择项目目录，AppID 选择“测试号”即可。
5.点击“编译”，即可在模拟器中查看效果。
<img width="396" height="723" alt="图片" src="https://github.com/user-attachments/assets/bb58ba24-58ef-4c78-bf5f-e10cf7fb8fae" />
