const PhoneSender = require('./mobileMessageSender');
module.exports = function (options) {
    this.phoneSender = new PhoneSender(options.appKey, options.appSecret, options);
    this.send = function (par, to, type) {
        if (type == 'phone') {
            return this.phoneSender.send(par, to);
        } else {

        }
    };
    return this;
};