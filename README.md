# rolldate [![npm](https://img.shields.io/npm/v/@vantist/rolldate)](https://www.npmjs.com/package/@vantist/rolldate) [![npm](https://img.shields.io/npm/dm/@vantist/rolldate)](https://www.npmjs.com/package/@vantist/rolldate)
此插件為[jquery-date](https://github.com/weijhfly/jqueryDatePlugin "jquery-date")的全新版本，主要為了解決舊版參數設計不夠合理、滑動效率不高、依賴jquery、沒有可選的主題風格等問題，並增加了回調函數，使插件有更大的靈活性。

## 2025/03/31 3.4.2 版本更新
1. 修正 3/31 時選擇 4/30 會跳到 5/30 的問題

## 2024/06/11 3.4.0 版本更新
1. 新增 `reset` 按鈕及參數設定

## 2023/05/18 3.3.0 版本更新
1. 新增 `showAMPM` `keepAMPMLeft` 參數設定
2. format 小時由 `hh` 改為 `HH`
3. 新增 `am` `pm` 語系設定

## 2023/05/17 3.2.0 版本更新
1. 新增 `min` `max` 參數設定
2. 升級 better-scroll v1 -> v2
3. 支援滑鼠滾輪捲動日期

## 2019/05/24 3.0版本更新
上一個版本為2.1.5, 新版本(從3.0.0開始)的改動：

1. 使用方式由new rolldate.Date改為new Rolldate;  
2. 回調函數調整：tapBefore更名為init，confirmBefore更名為confirm，取消confirmEnd，增加cancel;  
3. 日期格式(format)調整為無限制，可根據規則隨意組合;      

## 2019/02/03重要版本更新
上一個版本為1.5.1, 新版本(從2.0.0開始)與此前版本的不同之處：

1. 將滑動插件由iscroll替換為better-scroll，提升了兼容性;  
2. 改變了界面風格，操作更加方便;  
3. 取消了rolldate.css文件，只需引入js即可;  
4. 移除了主題風格、日期初始化的滑動時間設置；  

注意2.0.0之前的版本將不再維護，如有需要請訪問：[舊版rolldate](https://weijhfly.github.io/rolldate-index2.html "rolldate")
## 演示
[rolldate](https://weijhfly.github.io/rolldate-index.html "rolldate")(下方直接掃碼即可體驗)  

![rolldate](https://weijhfly.github.io/images/rolldate-demo.jpg)

## 使用方式
### es6
```js
import Rolldate from 'rolldate'
new Rolldate({
  el:'#date'
})
```
### commonJS
```js
var Rolldate = require('rolldate');
new Rolldate({
  el:'#date'
})
```
### amd
```js
require(['rolldate'],function(Rolldate){
  new Rolldate({
    el:'#date'
  })
})
```
### cmd
```js
seajs.use('rolldate',function(undefined){
    //插件沒有遵循cmd規範，這裡的Rolldate是全域的
    new Rolldate({
      el:'#date'
    })
});
```
## 參數、方法說明
名稱|必填|預設值|說明
---|:-:|:-:|---
el|否|無|綁定插件的dom元素，插件內部使用document.querySelector，<br>也可以直接傳遞dom元素對象，只支援單個
format|否|'YYYY-MM-DD'|日期格式，無限制。規則：年-YYYY 月-MM 日-DD 時-HH 分-mm 秒-ss 使用/、-、空格、:之一分隔，可隨意組合
beginYear|否|2000|日期開始年份
endYear|否|2100|日期結束年份
min|否|null|最小值，例如'2023-01-01'
max|否|nuill|最大值，例如'2023-01-01'
value|否|無|日期初始化的預設值，例如'2018-03-18'
lang|否|年、月、日...|配置插件語言，預設：title:'Select Date',cancel:'Cancel',confirm:'Confirm',<br>year:'Year',month:'Month',day:'Day',hour:'Hour',min:'Min',sec:'Sec',am:'AM',pm:'PM'
minStep|否|1|分鐘按指定數分隔
showAMPM|否|false|是否使用 12 小時制顯示
keepAMPMLeft|否|false| false = (HH:mm A), true = (A HH:mm)
init|否|null|插件觸發前的回調函數，return false可阻止插件執行
moveEnd|否|null|插件滾動後的回調函數，函數返回一個參數(better-scroll實例)
confirm|否|null|確認按鈕觸發前的回調函數，return false可阻止插件執行，<br>return其他值可修改日期，函數返回一個參數(選中的日期)
reset|否|null|重置按鈕觸發前的回調函數，return 的值可以指定元件重置至指定的日期，<br>沒指定則重置成預設值，沒預設值則重置至現在時間
cancel|否|null|插件取消時觸發的回調函數
trigger|否|'tap'|預設使用tap解決移動端click事件300ms延遲，可選click替換tap。注意使用tap會阻止其他綁定的click事件的觸發
show|否|無|主動觸發插件，當trigger為tap時，主動觸發插件應該使用此方法
hide|否|無|主動隱藏插件  

```js
//完整參數、方法示例
var rd = new Rolldate({
    el: '#date',
    format: 'YYYY-MM-DD',
    beginYear: 2000,
    endYear: 2100,
    min: '2023-01-01',
    max: '2023-12-31',
    minStep:1,
    lang:{title:'自訂標題'},
    trigger:'tap',
    init: function() {
      console.log('插件開始觸發');
    },
    moveEnd: function(scroll) {
      console.log('滾動結束');
    },
    confirm: function(date) {
      console.log('確認按鈕觸發');
    },
    reset: function() {
      console.log('重置按鈕觸發');
    },
    cancel: function() {
      console.log('插件操作取消');
    }
})
rd.show();
rd.hide();

```
