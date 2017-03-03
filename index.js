const PhoneSender = require('./mobileMessageSender');
module.exports = function (options) {
    this.phoneSender = new PhoneSender(options.appKey, options.appSecret, options);
    this.send = function (code, to, type) {
        if (type == 'phone') {
            return this.phoneSender.send(code, to);
        } else {

        }
    };
    return this;
};