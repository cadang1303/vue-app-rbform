export function setUser(id) {
  localStorage.setItem("userId", id);
}

export function getUser() {
  return localStorage.getItem("userId");
}

export function removeUser() {
  localStorage.removeItem("userId");
}
