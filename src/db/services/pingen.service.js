import User from '../models/user.model';

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

export async function requestPin(externalId) {
  let newPin;
  try {
    const user = await User.query()
      .where('externalId', externalId)
      .first();
      user.pin = JSON.stringify(Math.floor(Math.random() * 1000000));
      user.timestamp = 123;
    const updatedUser = await User.query()
      .where('id', user.id)
      .first()
      .update(user);
    newPin = await User.query()
      .findById(updatedUser);
  } catch (err) {
    return Promise.reject(err);
  }

  return JSON.parse(newPin.pin);
}

export async function verify(pin) {
  let user;
  console.log('pin', pin);
  try {
    user = await User.query()
      .where('pin', pin)
      .first();
      console.log('user', user);
  } catch (err) {
    return Promise.reject(err);
  }
  if (user.timestamp > 122) {
    return true;
  } else {
    return false;
  }
}
