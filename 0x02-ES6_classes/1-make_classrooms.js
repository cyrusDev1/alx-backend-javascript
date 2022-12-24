import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const rooms = [];
  for (const i of [19, 20, 34]) {
    rooms.push(new ClassRoom(i));
  }
  return rooms;
}
