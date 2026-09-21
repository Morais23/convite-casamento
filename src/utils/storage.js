const GUEST_KEY = 'wedding_guest_id';

export const saveGuestId = (id) => {
  if (id) {
    localStorage.setItem(GUEST_KEY, id);
  }
};

export const getGuestId = () => {
  return localStorage.getItem(GUEST_KEY);
};

export const clearGuestId = () => {
  localStorage.removeItem(GUEST_KEY);
};