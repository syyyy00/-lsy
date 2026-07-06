const calc = require("calc.js")
Page({
  data: {
    num: "0", // 显示的数字
    op: "+"   // 当前的运算符
  },
  result: null, // 存储计算结果
  isClear: false, // 标记是否清空当前显示的数字

  // 数字按钮点击事件
  numBtn: function(e) {
    var num = e.target.dataset.val;
    if (this.data.num === "0" || this.isClear) {
      this.setData({ num: num });
      this.isClear = false;
    } else {
      this.setData({ num: this.data.num + num });
    }
  },

  // 运算符按钮点击事件 (+, -, *, /, %, =)
  opBtn: function(e) {
    var op = this.data.op;
    var num = Number(this.data.num);
    this.setData({ op: e.target.dataset.val });

    if (this.isClear) {
      return;
    }
    this.isClear = true;

    if (this.result === null) {
      this.result = num;
      return;
    }

    // 执行计算
    if (op === "+") {
      this.result = calc.add(this.result, num);
    } else if (op === "-") {
      this.result = calc.sub(this.result, num);
    } else if (op === "*") {
     this.result = calc.mul(this.result, num);
    } else if (op === "/") {
      this.result = calc.div(this.result, num);
    } else if (op === "%") {
      this.result = this.result % num;
    }
    this.setData({ num: this.result + "" });
  },

  // 小数点按钮点击事件
  dotBtn: function(e) {
    if (this.isclear) {
      this.setData({ num: "0." });
      this.isclear = false;
      return;
    }
    if (this.data.num.indexOf(".") >= 0) {
      return;
    }
    this.setData({ num: this.data.num + "." });
  },

  // 删除按钮点击事件 (DEL)
  delBtn: function(e) {
    var num = this.data.num.substr(0, this.data.num.length - 1);
    this.setData({ num: num === "" ? "0" : num });
  },

  // 清空按钮点击事件 (C)
  resetBtn: function(e) {
    this.result = null;
    this.isclear = false;
    this.setData({ num: "0", op: "" });
  }
});