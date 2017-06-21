const PhoneSender = require('./mobileMessageSender');
module.exports = function (options) {
  this.phoneSender = new PhoneSender(options.appKey, options.appSecret, options);
  this.send = function (params, to, option) {
    if (option.type == 'phone') {
      return this.phoneSender.send(params, to, option.template);
    } else {

    }
  };
  return this;
};
