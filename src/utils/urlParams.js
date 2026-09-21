export const getGuestIdFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('guest_id');
};