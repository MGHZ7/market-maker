export const validateUrl = (url: string): boolean => {
  try {
    const utl = new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};
