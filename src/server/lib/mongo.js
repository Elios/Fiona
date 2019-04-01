import configlite from 'config-lite'
import Mongolass from 'mongolass'
import moment from 'moment'
import objectIdToTimestamp from 'objectid-to-timestamp'

// 读取mongodb配置文件
const config = configlite(__dirname)

// 使用mongolass与mongodb交互
const mongolass = new Mongolass()

// 连接mongodb
mongolass.connect(config.default.mongodb)

// 根据 id 生成创建时间 created_at
mongolass.plugin('addCreatedAt', {
  afterFind (results) {
    for (let r of results) {
      r.cteated_at = moment(objectIdToTimestamp(r._id)).format('YYYY-MM-DD HH:mm')
    }
    return results
  },
  afterFindOne (result) {
    result.created_at = moment(objectIdToTimestamp(result._id)).format('YYYY-MM-DD HH:mm')
    return result
  }
})

// 创建collection  users
exports.User = mongolass.model('User', {
  uname: { type: 'string', required: true },
  pwd: { type: 'string', required: true },
  gender: { type: 'string', required: true, enum: ['male', 'female', 'unknown'], default: 'unknown' },
  email: { type: 'string', required: true },
  phone: { type: 'string', required: true }
})

exports.User.index({ uname: 1 }, { unique: true }).exec() // uname升序建立唯一索引
