// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// --------------以下才是正文--------------

class SnapshotSandbox {
  private windowSnapshot: object;
  private modifyPropsMap: object;

  constructor() {
    this.windowSnapshot = {};
    this.modifyPropsMap = {};
  }

  // 激活
  active() {
    // 浅拷贝 window 生成快照
    for (let key in window) {
      if (Object.prototype.hasOwnProperty.call(window, key)) {
        this.windowSnapshot[key] = window[key];
      }
    }
    // 还原被修改项（如果之前被激活又失活过的话）
    Object.keys(this.modifyPropsMap).forEach((key) => {
      window[key] = this.modifyPropsMap[key];
    });
  }

  // 失活
  inactive() {
    // 将之前浅拷贝的 window 快照与当前的 window 进行对比
    // 如果不同，则：
    // 1、记录被修改项
    // 2、根据 window 快照还原 window
    for (let key in window) {
      if (Object.prototype.hasOwnProperty.call(window, key)) {
        if (window[key] !== this.windowSnapshot[key]) {
          this.modifyPropsMap[key] = window[key];
          window[key] = this.windowSnapshot[key];
        }
      }
    }
  }
}

// --------------以下才是测试--------------

const sandbox = new SnapshotSandbox();

function log() {
  console.log('name', window.name);
  console.log('age', window.age);
  console.log('obj', window.obj);
  console.log('obj2', window.obj2);
}

window.name = 'blueju';
window.obj = { a: 1, b: 2 };
window.obj2 = { a: 1, b: 2 };

console.group('首次激活沙箱前');
log();
console.groupEnd();

sandbox.active();
console.group('激活沙箱');
window.age = '18';
// 整体修改
window.obj = { a: 2, b: 4 };
// 直接修改
window.obj2.a = 'xxx';
window.obj2.b = 'yyy';
log();
console.groupEnd();

sandbox.inactive();
console.group('退出沙箱');
log();
console.groupEnd();

sandbox.active();
console.group('再次激活沙箱');
log();
console.groupEnd();
