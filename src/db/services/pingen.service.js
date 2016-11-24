import User from '../models/user.model';
import Pin from '../models/pin.model';

export async function register(user) {
  let newUser;

  try {
    newUser = await User.query()
      .insertWithRelated(user);
  } catch (err) {
    return Promise.reject(err);
  }

  return newUser;
}

export async function requestPin(id) {
  let newPin;
  console.log('dateNow', Date.now());
  try {
    const pinObj = {
      pin: JSON.stringify(Math.floor(Math.random() * 1000000)),
      timestamp: Date.now(),
      userId: JSON.parse(id),
    };
    newPin = await Pin.query()
      .insertWithRelated(pinObj);
  } catch (err) {
    return Promise.reject(err);
  }
  return newPin;
}

export async function verify(pin, id) {
  let newPin;

  try {
    newPin = await Pin.query()
      .findById(id);
    console.log('verifed pin', pin);
  } catch (err) {
    return Promise.reject(err);
  }
  if (newPin.pin === pin) {
    const newTime = Date.now() - newPin.timestamp;
    if ((newTime / 1000) < 30) {
      return true;
    } else {
      return 'PIN is too old';
    }
  } else {
    return 'PIN is wrong';
  }
}
