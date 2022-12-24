import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    return await Promise.all([uploadPhoto(), createUser()])
      .then((value) => ({
        photo: value[0],
        user: value[1],
      }));
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
