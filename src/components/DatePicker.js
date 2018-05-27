import '../icons/calendar'
import '../icons/cross'
import config from 'veui/managers/config'

config.defaults({
  icons: {
    calendar: 'calendar',
    clear: 'cross'
  },
  placeholder: '选择时间',
  rangePlaceholder: '开始选择时间段',
  ui: {
    style: {
      values: []
    },
    size: {
      values: []
    }
  }
}, 'datepicker')
