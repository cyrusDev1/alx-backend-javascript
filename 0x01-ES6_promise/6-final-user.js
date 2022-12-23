import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((results) => {
      const array = [];
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          array.push({ status: result.status, value: result.value });
        } else if (result.status === 'rejected') {
          array.push({ status: result.status, value: result.reason.message });
        }
      });
      return array;
    });
}
