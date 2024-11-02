// This file is inteneded to contain platform (Native OS, Android, iOS etc) related services

import {Linking, Platform} from 'react-native';

import LoggerService from '$common/services/LoggerService';
import {COMMON} from '$common/constants/strings.constants';

const isAndroid = () => Platform.OS === 'android';
const isIOS = () => Platform.OS === 'ios';

const makeAudioCall = (phoneNumber?: string) => {
  if (typeof phoneNumber === 'undefined') {
    LoggerService.warn(COMMON.errorsMsg.phoneNotAvailable);
    return;
  }
  openPhoneClient('audio', phoneNumber);
};

const openPhoneClient = (callType: string, phoneNo: string) => {
  if (callType === 'audio') {
    openNativeURL(
      Platform.OS === 'android' ? `tel:${phoneNo}` : `telprompt:${phoneNo}`,
    );
    return;
  }
  LoggerService.error(`This type of calling is not yet supported`);
};

const sendTextMessage = (phoneNo?: string) => {
  if (typeof phoneNo === 'undefined') {
    LoggerService.warn(COMMON.errorsMsg.phoneNotAvailable);
    return;
  }
  openMessageClient('text', phoneNo);
};

const openMessageClient = (msgType: string, phoneNo: string) => {
  if (msgType === 'text') {
    openNativeURL(`sms:${phoneNo}`);
    return;
  }
  LoggerService.error(`This type of message is not yet supported`);
};

const sendEmail = (emailId?: string) => {
  if (typeof emailId === 'undefined') {
    LoggerService.warn(COMMON.errorsMsg.emailNotAvailable);
    return;
  }
  openEmailClient(emailId);
};

const openEmailClient = (emailId: string) => {
  openNativeURL(`mailto:${emailId}`);
};

const showDirections = (locationStr?: string) => {
  if (typeof locationStr === 'undefined') {
    LoggerService.warn(COMMON.errorsMsg.locationNotAvailable);
    return;
  }
  openLocationClient(locationStr);
};

const openLocationClient = (locationStr: string) => {
  openNativeURL(
    Platform.OS === 'android'
      ? `geo:0,0?q=${locationStr}`
      : `maps:0,0?q=${locationStr}`,
  );
};

const sendWhatsAppTextMessage = (phoneNo?: string) => {
  if (typeof phoneNo === 'undefined') {
    LoggerService.warn(COMMON.errorsMsg.phoneNotAvailable);
    return;
  }
  openWhatsAppMessageClient('text', phoneNo);
};

const openWhatsAppMessageClient = (msgType: string, phoneNo: string) => {
  if (msgType === 'text') {
    // make sure to prefix country code
    phoneNo = phoneNo.indexOf('+') !== -1 ? phoneNo : `+91${phoneNo}`;
    openNativeURL(`whatsapp://send?phone=${phoneNo}`);
    return;
  }
  LoggerService.error(`WhatsApp Text message is not yet supported`);
};

/**
 * @description Function to open native url to open other apps like phone, message, email etc
 * @param url - URL to be used for opening other apps.
 */
const openNativeURL = (url: string) => {
  Linking.canOpenURL(url)
    .then(supported => {
      if (!supported) {
        LoggerService.error(`Unsupported URL: ${url}`);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch(err =>
      LoggerService.error(`ERROR while openning Native URL ${err}`),
    );
};

export {
  isAndroid,
  isIOS,
  makeAudioCall,
  sendTextMessage,
  sendWhatsAppTextMessage,
  sendEmail,
  showDirections,
};
