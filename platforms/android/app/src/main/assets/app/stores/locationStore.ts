export var latitude;
export var longitude;

export function saveLatitude(loc) {
  this.latitude = loc;
}

export function saveLongitude(loc) {
  this.longitude = loc;
}

export function getLatitude() {
  return latitude;
}

export function getLongitude() {
  return longitude;
}
