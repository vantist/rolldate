import './index.less';

import BScroll from '@better-scroll/core'
import Wheel from '@better-scroll/wheel'
import MouseWheel from '@better-scroll/mouse-wheel'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import {
  version
} from '../package.json';

BScroll.use(Wheel);
BScroll.use(MouseWheel);
dayjs.extend(customParseFormat);

let $ = (selector, flag) => {
  if (typeof selector != 'string' && selector.nodeType) {
    return selector;
  }

  return flag ? document.querySelectorAll(selector) : document.querySelector(selector);
}

function Rolldate(config = {}) {
  let _this = this,
    el;

  _this.extend(config);
  if (config.el) {
    el = $(config.el);

    if (!el || el.bindRolldate) {
      return;
    }
    el.bindRolldate = 1;

    _this.tap(el, function () {
      _this.show();
    })
  }
  // 设置默认日期
  if (config.value) {
    _this.setDefault();
  }
}
Rolldate.prototype = {
  constructor: Rolldate,
  domId: {
    YYYY: 'rolldate-year',
    MM: 'rolldate-month',
    DD: 'rolldate-day',
    HH: 'rolldate-hour',
    mm: 'rolldate-min',
    ss: 'rolldate-sec',
    A: 'rolldate-ampm'
  },
  baseConfig: function () {
    return { //插件默认配置
      el: '',
      format: 'YYYY-MM-DD',
      beginYear: 2000,
      endYear: 2100,
      value: null,
      min: null,
      max: null,
      init: null,
      moveEnd: null,
      confirm: null,
      reset: null,
      cancel: null,
      minStep: 1,
      showAMPM: false,
      keepAMPMLeft: false,
      trigger: 'tap',
      lang: {
        title: 'Select Date',
        cancel: 'Cancel',
        reset: 'Reset', 
        confirm: 'Confirm',
        year: 'Year',
        month: 'Month',
        day: 'Day',
        hour: 'Hour',
        min: 'Min',
        sec: 'Sec',
        am: 'AM',
        pm: 'PM'
      }
    };
  },
  extend: function (config) {
    let _this = this,
      opts = _this.baseConfig();

    for (let key in opts) {
      if (opts[key] && Object.prototype.toString.call(opts[key]) == '[object Object]') {
        for (let key2 in config[key]) {
          opts[key][key2] = config[key][key2] == undefined ? opts[key][key2] : config[key][key2];
        }
      } else {
        opts[key] = config[key] || opts[key];
      }
    }
    _this.config = opts;
  },
  createAmPmUI: function (hour) {
    const {
      lang
    } = this.config;
    const amActive = hour < 12 ? 'active' : '';
    const pmActive = hour >= 12 ? 'active' : '';
    return `<div id="${this.domId['A']}">
              <ul class="wheel-scroll">
                <li class="wheel-item ${amActive}" data-index="0" data-value="0">${lang.am}</li>
                <li class="wheel-item ${pmActive}" data-index="1" data-value="1">${lang.pm}</li>
              </ul>
            </div>`;
  },
  createUI: function () {
    let config = this.config,
      domId = this.domId,
      FormatArr = config.format.split(/-|\/|\s|:/g),
      len = FormatArr.length,
      ul = '',
      date = config.el ? ($(config.el).bindDate || new Date()) : (this.bindDate || new Date()),
      itemClass = '',
      lang = config.lang;

    for (let i = 0; i < len; i++) {
      let f = FormatArr[i],
        domMndex = 0;

      if (f === 'HH' && config.showAMPM && config.keepAMPMLeft) {
        ul += this.createAmPmUI(date.getHours());
      }

      ul += '<div id="' + domId[f] + '"><ul class="wheel-scroll">';

      if (f == 'YYYY') {
        for (let j = config.beginYear; j <= config.endYear; j++) {
          itemClass = j == date.getFullYear() ? 'active' : '';

          ul += `<li class="wheel-item ${itemClass}" data-index="${domMndex}" data-value="${j}">${j}${lang.year}</li>`;
          domMndex++;
        }
      } else if (f == 'MM') {
        for (let k = 1; k <= 12; k++) {
          const value = (k+'').padStart(2, '0');
          itemClass = k == date.getMonth() + 1 ? 'active' : '';
          ul += `<li class="wheel-item ${itemClass}" data-index="${domMndex}" data-value="${value}">${value}${lang.month}</li>`;
          domMndex++;
        }
      } else if (f == 'DD') {
        let day = this.getMonthlyDay(date.getFullYear(), date.getMonth());
        for (let l = 1; l <= day; l++) {
          const value = (l+'').padStart(2, '0')
          itemClass = l == date.getDate() ? 'active' : '';

          ul += `<li class="wheel-item ${itemClass}" data-index="${domMndex}" data-value="${value}">${value}${lang.day}</li>`;
          domMndex++;
        }
      } else if (f == 'HH') {
        const maxHour = config.showAMPM ? 11 : 23;
        for (let m = 0; m <= maxHour; m++) {
          const value = (m+'').padStart(2, '0')
          const displayValue = config.showAMPM ? m == 0 ? 12 : value : value;
          itemClass = m == (config.showAMPM ? date.getHours() % 12 : date.getHours()) ? 'active' : '';
          ul += `<li class="wheel-item ${itemClass}" data-index="${domMndex}" data-value="${value}">${displayValue}${lang.hour}</li>`;
          domMndex++;
        }
      } else if (f == 'mm') {
        for (let n = 0; n <= 59; n += config.minStep) {
          const value = (n+'').padStart(2, '0')
          itemClass = n == date.getMinutes() ? 'active' : '';

          ul += `<li class="wheel-item ${itemClass}" data-index="${domMndex}" data-value="${value}">${value}${lang.min}</li>`;
          domMndex++;
        }
      } else if (f == 'ss') {
        for (let o = 0; o <= 59; o++) {
          const value = (o+'').padStart(2, '0')
          itemClass = o == date.getSeconds() ? 'active' : '';

          ul += `<li class="wheel-item ${itemClass}" data-index="${domMndex}" data-value="${value}">${value}${lang.sec}</li>`;
          domMndex++;
        }
      }
      ul += '</ul></div>';
    }
    let $html = `<div class="rolldate-mask"></div>
            <div class="rolldate-panel">
                <header>
                    <span class="rolldate-btn rolldate-cancel">${lang.cancel}</span>
                    ${lang.title}
                    <span class="rolldate-btn rolldate-confirm">${lang.confirm}</span>
                </header>
                <section class="rolldate-content">
                    <div class="rolldate-dim mask-top"></div>
                    <div class="rolldate-dim mask-bottom"></div>
                    <div class="rolldate-wrapper">
                        ${ul}
                        ${ config.showAMPM && !config.keepAMPMLeft ? this.createAmPmUI(date.getHours()) : '' }
                    </div>
                </section>
                <footer>
                    <span class="rolldate-btn rolldate-reset">${lang.reset}</span>
                </footer>
            </div>`,
      box = document.createElement("div");

    box.className = `rolldate-container`;
    box.innerHTML = $html;
    document.body.appendChild(box);

    this.scroll = {};

    for (let i = 0; i < len; i++) {
      this.createBScroll.call(this, FormatArr[i], date);
    }

    if (config.showAMPM ) {
      this.createBScroll.call(this, 'A', date);
    }
    this.adjustMinMax(0);
    $('.rolldate-panel').className = 'rolldate-panel fadeIn';
  },
  adjustMonthlyDay: function (scroll) {
    const domId = this.domId;
    const lang = this.config.lang;
    if ([domId['YYYY'], domId['MM']].indexOf(scroll.wrapper.id) != -1 && this.scroll['YYYY'] && this.scroll['MM'] && this.scroll['DD']) {
      let day = this.getMonthlyDay(this.getSelected(this.scroll['YYYY']), this.getSelected(this.scroll['MM']) - 1),
        li = '';

      if (day != $('#' + domId['DD'] + ' li', 1).length) {

        for (let l = 1; l <= day; l++) {
          const value = (l+'').padStart(2, '0');
          li += `<li class="wheel-item" data-index="${l - 1}" data-value="${value}">${value}${lang.day}</li>`;
        }
        $('#' + domId['DD'] + ' ul').innerHTML = li;
        this.scroll['DD'].refresh();
      }
    }
  },
  createBScroll: function (formatAttr, date) {
    const $id = this.domId[formatAttr];
    const confirm = $('.rolldate-confirm');
    const reset = $('.rolldate-reset');
    const config = this.config;
    this.scroll[formatAttr] = new BScroll(`#${$id}`, {
      disableMouse: false,
      disableTouch: false,
      wheel: {
        selectedIndex: 0
      },
      mouseWheel: {
        speed: 1
      },
    });

    const that = this.scroll[formatAttr],
      active = $(`#${$id} .active`),
      index = active ? active.getAttribute('data-index') : Math.round(date.getMinutes() / config.minStep);

    that.wheelTo(index);

    that.on('scrollStart', () => {
      reset.classList.add('disabled');
      confirm.classList.add('disabled')
    });
    that.on('mousewheelStart', () => {
      reset.classList.add('disabled');
      confirm.classList.add('disabled')
    });

    // 滚动结束
    that.on('scrollEnd', () => {
      const isScrollEnd = Object.values(this.scroll).reduce((prev, curr) => curr.pending || curr, false);
      if (isScrollEnd) {
        confirm.classList.remove('disabled');
        reset.classList.remove('disabled');
      }

      if (config.moveEnd) {
        config.moveEnd.call(this, that);
      }

      this.adjustMinMax.call(this);
      this.adjustMonthlyDay.call(this, that);
    })
  },
  adjustMinMax: function (animateTime = 500) {
    const config = this.config;
    const date = this.getSelectedDate(),
      current = dayjs(date),
      min = dayjs(config.min, config.format),
      max = dayjs(config.max, config.format);
    if (current.isBefore(min)) {
      this.scrollToDateTime(min, animateTime);
    }
    if (current.isAfter(max)) {
      this.scrollToDateTime(max, animateTime);
    }
  },
  scrollToDateTime: function (date, animateTime = 500) {
    if (this.scroll['YYYY']) {
      this.scroll['YYYY'].wheelTo(date.year() - this.config.beginYear, animateTime);
    }
    if (this.scroll['MM']) {
      this.scroll['MM'].wheelTo(date.month(), animateTime);
    }
    if (this.scroll['DD']) {
      this.scroll['DD'].wheelTo(date.date() - 1, animateTime);
    }
    if (this.scroll['HH']) {
      if (this.config.showAMPM) {
        this.scroll['A'].wheelTo(Math.floor( date.hour() / 12), animateTime);
        this.scroll['HH'].wheelTo(date.hour() % 12, animateTime);
      } else {
        this.scroll['HH'].wheelTo(date.hour(), animateTime);
      }
    }
    if (this.scroll['mm']) {
      this.scroll['mm'].wheelTo(Math.round(date.minute() / this.config.minStep), animateTime);
    }
    if (this.scroll['ss']) {
      this.scroll['ss'].wheelTo(date.minute(), animateTime);
    }
  },
  tap: function (el, fn) {
    let _this = this,
      hasTouch = "ontouchstart" in window;

    if (hasTouch && _this.config.trigger == 'tap') {
      let o = {},
        touchstart = function (e) {
          let t = e.touches[0];

          o.startX = t.pageX;
          o.startY = t.pageY;
          o.sTime = +new Date;
        },
        touchend = function (e) {
          let t = e.changedTouches[0];

          o.endX = t.pageX;
          o.endY = t.pageY;
          if ((+new Date) - o.sTime < 300) {
            if (Math.abs(o.endX - o.startX) + Math.abs(o.endY - o.startY) < 20) {
              e.preventDefault();
              fn.call(this, e);
            }
          }
          o = {};
        };

      if (typeof fn == 'function') {
        el.addEventListener('touchstart', touchstart);
        el.addEventListener('touchend', touchend);
      } else {
        el.removeEventListener('touchstart', touchstart);
        el.removeEventListener('touchend', touchend);
      }
    } else {
      let click = function (e) {
        fn.call(this, e);
      };
      if (typeof fn == 'function') {
        el.addEventListener('click', click);
      } else {
        el.removeEventListener('click', click);
      }
    }
  },
  show: function () {
    let _this = this,
      config = _this.config,
      el;

    if (config.el) {
      el = $(config.el);

      if (!el.bindRolldate) {
        return;
      }
      if (el.nodeName.toLowerCase() == 'input') {
        el.blur();
      }
    }
    if ($('.rolldate-container')) {
      return;
    }
    if (config.init && config.init.call(_this) === false) {
      return;
    }

    _this.createUI();
    _this.event();
  },
  hide: function (flag) {
    let _this = this,
      el = $('.rolldate-panel.fadeIn');

    if (el) {
      el.className = 'rolldate-panel fadeOut';
      _this.destroy(flag);
    }
  },
  event: function () {
    let _this = this,
      mask = $('.rolldate-mask'),
      cancel = $('.rolldate-cancel'),
      confirm = $('.rolldate-confirm'),
      reset = $('.rolldate-reset');

    _this.tap(mask, function () {
      _this.hide(1);
    })
    _this.tap(cancel, function () {
      _this.hide(1);
    })
    _this.tap(confirm, function () {
      if (confirm.classList.contains('disabled')) return;

      let config = _this.config;

      const date = _this.getSelectedDate();
      let displayValue = dayjs(date).format(config.format);

      if (config.confirm) {
        let flag = config.confirm.call(_this, displayValue);
        if (flag === false) {
          return false
        } else if (flag) {
          displayValue = flag;
        }
      }
      _this.bindDateToEl(date, displayValue);
      _this.hide();
    })
    _this.tap(reset, function () {
      if (reset.classList.contains('disabled')) return;

      let config = _this.config,
        resetValue,
        el = config.el ? $(config.el) : null;
 
      if (config.reset) {
        const value = el ? el.value : '';
        resetValue = config.reset.call(_this, value);
        _this.setDefault(resetValue);
      } else {
        _this.setDefault();
      }

      let date;
      if (config.value) {
        date = el ? el.bindDate : _this.bindDate;
      } else {
        date = new Date();
      }

      _this.scrollToDateTime(dayjs(date));
      _this.adjustMinMax();
    })
  },
  bindDateToEl: function (date, displayValue) {
    let config = this.config,
      el;

    if (config.el) {
      el = $(config.el);
      if (el.nodeName.toLowerCase() == 'input') {
        el.value = displayValue;
      } else {
        el.innerText = displayValue;
      }
      el.bindDate = date;
    } else {
      this.bindDate = date;
    }
  },
  getSelectedDate: function () {
    // 建立映射關係，定義各滾輪值如何應用到日期上
    const setterMap = {
      'YYYY': (date, value) => date.setFullYear(value),
      'MM': () => {}, // 月份稍後處理
      'DD': () => {}, // 日期稍後處理
      'HH': (date, value, config, ampm) => {
        if (config.showAMPM) {
          const hour = parseInt(value) + (ampm || 0) * 12;
          date.setHours(hour);
        } else {
          date.setHours(value);
        }
      },
      'mm': (date, value) => date.setMinutes(value),
      'ss': (date, value) => date.setSeconds(value)
    };

    // 收集所有滾輪的數值
    const selected = {};
    let ampmValue;
    
    Object.entries(this.scroll).forEach(([key, scroll]) => {
      if (key === 'A') {
        ampmValue = this.getSelected(scroll);
        return;
      }
      selected[key] = parseInt(this.getSelected(scroll));
    });

    // 創建新的日期物件
    const date = new Date();
    
    // 先處理非日期和月份的設置
    Object.entries(selected).forEach(([key, value]) => {
      if (key !== 'MM' && key !== 'DD') {
        setterMap[key](date, value, this.config, ampmValue);
      }
    });
    
    // 日期和月份特殊處理，避免日期溢出問題
    if (selected.MM && selected.DD) {
      date.setDate(1); // 先設為1號，避免月份切換時的溢出問題
      date.setMonth(selected.MM - 1);
      
      // 確保日期不超過當月最大天數
      const maxDays = this.getMonthlyDay(date.getFullYear(), date.getMonth());
      date.setDate(Math.min(selected.DD, maxDays));
    }
    
    return date;
  },
  getMonthlyDay: function (year, month) {
    return dayjs().year(year).month(month).daysInMonth();
  },
  destroy: function (flag) {
    let _this = this,
      config = _this.config;

    for (let i in _this.scroll) {
      _this.scroll[i].destroy();
    }

    if (flag && config.cancel) {
      config.cancel.call(_this);
    }

    _this.tap($('.rolldate-mask'), 0);
    _this.tap($('.rolldate-cancel'), 0);
    _this.tap($('.rolldate-confirm'), 0);
    _this.tap($('.rolldate-reset'), 0);
    setTimeout(function () {
      let el = $('.rolldate-container');

      if (el) document.body.removeChild(el);
      el = null;
    }, 300);
  },
  getSelected: function (scroll) {
    return $('#' + scroll.wrapper.id + ' li', 1)[scroll.getSelectedIndex()].dataset.value;
  },
  setDefault: function (defaultValue) {
    const displayValue = defaultValue || this.config.value || '';
    const date  = dayjs(displayValue, this.config.format).toDate();

    if (!date || date == 'Invalid Date') {
      this.bindDateToEl(new Date(), displayValue);
    } else {
      this.bindDateToEl(date, displayValue);
    }
  }
}
Rolldate.version = version;

export default Rolldate;