const PhoneMessageSender = require('alidayu-node');
const errs = require('errs');

module.exports = function (appKey, appSecret, options) {
    this.sender = new PhoneMessageSender(appKey, appSecret);

    this.send = function (code, mobile) {
        return new Promise((resolve, reject) => {
            this.sender.smsSend({
                sms_free_sign_name: (options && options['sign']),
                sms_param: {code: code},
                rec_num: mobile,
                sms_template_code: (options && options['template'])
            }, sendResult => {
                if (sendResult['error_response']) {
                    reject(errs.create({
                        code: 'SEND_VALID_CODE_FAILED',
                        status: 401,
                        statusCode: 401,
                        message: 'send failed'
                    }));
                } else {
                    resolve();
                }
            });
        });
    };
};