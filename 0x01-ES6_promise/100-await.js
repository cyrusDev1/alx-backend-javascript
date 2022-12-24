import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const val = await Promise.all([uploadPhoto(), createUser()])
    .then((value) => ({
      photo: value[0],
      user: value[1],
    })).catch((err) => {
      console.log(err);
    });
  return val;
}
