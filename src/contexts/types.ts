import { FirebaseAuthUserType } from "@hooks/types/firebase-auth-user-types";

type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;

export interface UserInfo extends FirebaseAuthUserType {
  isAdmin?: boolean;
}

export interface AppContextType {
  userInfo: UserInfo;
  setUserInfo: SetStateType<UserInfo>;
}
