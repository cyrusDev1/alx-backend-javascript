import { uploadPhoto, createUser } from './utils';

export default function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((value) => ({
      photo: value[0],
      user: value[1],
    }));
}
