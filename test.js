var config = {
  "appKey": "23651462",
  "appSecret": "39ed86dfcc8173d886d51d2164c4b7fa",
  "sign": "小刚测试",
  "templates": {
    "register": "SMS_48820180",
    "forgetPassword": "SMS_48820180",
  },
  "type": "phone"
};

var Sender = require('./index');

var sender = new Sender(config);
sender.send({code: '1213'}, '17725791770', {type: 'phone', template: 'register'}).then((data) => {
  console.log('success', data)
}).catch(e => {
  console.log('error', e)
});
