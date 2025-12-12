export function isValidUsername(username: string) {}

export function isValidPassword(pw: string) {
  return (
    isValidLength(pw) &&
    hasUpperCase(pw) &&
    hasLowerCase(pw) &&
    hasDigit(pw) &&
    hasSpecialChar(pw)
  );
}

export function isValidLength(pw: string) {
  return pw.length >= 8 && pw.length <= 64;
}

export function hasUpperCase(pw: string) {
  return /[A-Z]/.test(pw);
}

export function hasLowerCase(pw: string) {
  return /[a-z]/.test(pw);
}

export function hasDigit(pw: string) {
  return /[0-9]/.test(pw);
}

export function hasSpecialChar(pw: string) {
  return /[^A-Za-z0-9]/.test(pw);
}
