const PhoneSender = require('./mobileMessageSender');
module.exports = function (options) {
    this.phoneSender = new PhoneSender(options.appKey, options.appSecret, options);
    this.send = function (par, to, option) {
        if (option.type == 'phone') {
            return this.phoneSender.send(par, to,option.sendType);
        } else {

        }
    };
    return this;
};
