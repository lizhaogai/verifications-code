const PhoneMessageSender = require('alidayu-node');
const errs = require('errs');
const PromissA = require('bluebird')

module.exports = function (appKey, appSecret, options) {
    this.sender = new PhoneMessageSender(appKey, appSecret);
    this.send = function (par, mobile, sendType) {
        return PromissA.fromCallback(cb => this.sender.smsSend({
            sms_free_sign_name: (options && options['sign']),
            sms_param: par,
            rec_num: mobile,
            sms_template_code: (options && options['templates'][sendType])
        }, cb));
// return new Promise((resolve, reject) => {
//     console.log((options && options['templates'][sendType]));
//      sendResult => {
//         console.log(sendResult);
//         if (sendResult['error_response']) {
//           return  reject(errs.create({
//                 code: 'SEND_VALID_CODE_FAILED',
//                 status: 401,
//                 statusCode: 401,
//                 message: 'send failed'
//             }));
//         } else {
//            return resolve();
//         }
//     });
// });
    }
    ;
}
;
