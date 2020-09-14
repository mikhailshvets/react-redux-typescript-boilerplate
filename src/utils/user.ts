import { User } from 'store/reducers/auth';

export const isLoggedIn = (user: User): boolean => Boolean(user?.token);
export const userSelector = (store: any): User => store.auth.user;

export const hasValidSession = (user: User): boolean => {
  const { token } = user;

  if (!token) {
    return false;
  }

  return true;
};
