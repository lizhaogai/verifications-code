const PhoneMessageSender = require('alidayu-node');
const errs = require('errs');

module.exports = function (appKey, appSecret, options) {
  this.sender = new PhoneMessageSender(appKey, appSecret);
  this.send = function (params, mobile, template) {
    return new Promise((resolve, reject) => {
      this.sender.smsSend({
        sms_free_sign_name: (options && options['sign']),
        sms_param: params,
        rec_num: mobile,
        sms_template_code: (options && options['templates'][template])
      }, (result) => {
        let r = true;
        if (result['error_response'])
          r = false;
        return resolve(r);
      });
    });
  };
};
