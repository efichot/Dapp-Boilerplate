/* ------------------------- External Dependencies -------------------------- */
const _ = require('lodash')
const admin = require('firebase-admin');
const functions = require('firebase-functions');
const twilio = require('twilio');
/* ------------------------- Internal Dependencies -------------------------- */
const db = require('../database');
/* ---------------------------- Initialization ------------------------------ */
const accountSid = functions.config().twilio.accountsid
const authToken = functions.config().twilio.authtoken

const twilioClient = new twilio(accountSid, authToken);
/* ---------------------------- Cloud Functions ------------------------------ */
/**
 * @func twilioTextSend
 * @desc Send text messages via Twilio 
 * @param {Object} message
 * @var textRecipient
 * @var textBody
 */
export const twilioTextSend = (key, message) => {
  try {
    console.log(message)
    twilioClient.messages.create({
      to: message.textRecipient,
      body: message.textBody,
      from: '+14152756694' // Valid Twilio number
    })
    .then( message => {
      const payload = {
        uid: key,
        twilioMessage: message.sid
      }
      db.databaseWrite({
        entity: 'infrastructure',
        branches: ['messages', 'outbound', 'monitoring'],
        payload: payload,
        config: {
          writeType: 'push'
        }
      });
    });
  } catch (error) {
    console.log(error)
  }
}

/**
 * @func twilioTextBatchSend
 * @desc Send text messages via Twilio 
 * @param {Array} messages
 */
export const twilioTextBatchSend = (messages) => {
  _.map(messages, message=>{
    twilioClient.messages.create({
      to: message.textRecipient,
      body: message.textBody,
      from: '+14159914545' // Valid Twilio number
    })
    .then((message) => console.log(message.sid));
  })
}

export const twilioVoiceSend = ()=>{}