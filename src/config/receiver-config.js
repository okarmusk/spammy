const receiverConfig = {
  mail: process.env.RECEIVER_MAIL,
  name: process.env.RECEIVER_NAME ? process.env.RECEIVER_NAME : '',
  surname: process.env.RECEIVER_SURNAME ? process.env.RECEIVER_SURNAME : ''
};

exports.receiverConfig = receiverConfig;
