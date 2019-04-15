
import { notification, message } from 'antd'
import history from 'utils/history'


/**
 * @param {*} content 提示内容
 * @param {*} duration 自动关闭的延时，单位秒。设为 0 时不自动关闭
 * @param {*} callBack 关闭时触发的回调函数
 * @param {*} level 消息提示类别
 */
const notice = (content, duration, callBack, level) => {
  switch (level) {
    case 'success':
      message.success(content, duration, callBack)
      break
    case 'info':
      message.info(content, duration, callBack)
      break
    case 'warning':
      message.warning(content, duration, callBack)
      break
    case 'warn':
      message.warn(content, duration, callBack) // alias of warning
      break
    case 'loading':
      message.loading(content, duration, callBack)
      break
  }
}

const notify = (payload) => {
  notification.open(payload)
}

const zUrl = (url)  => {
  return '//zdev.dian.so' + url    // 开发用
}


export default {
  notice,
  notify,
  history,
  zUrl
}