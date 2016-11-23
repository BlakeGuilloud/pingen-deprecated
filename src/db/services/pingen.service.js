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
