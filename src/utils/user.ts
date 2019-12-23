import { IUser } from "store/reducers/auth"

export const isLoggedIn = (user: IUser): boolean => Boolean(user) && Boolean(user.token)

export const userSelector = (store: any): IUser => store.auth.user

export const hasValidSession = (user: IUser): boolean => {
  const { token } = user

  if (!token) {
    return false
  }

  return true
}
