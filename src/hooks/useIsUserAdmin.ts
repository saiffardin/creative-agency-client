import { GET } from "@api/GET";
import { URLS } from "@constants/urls";

type emailType = string | undefined | null;

interface HookRetType {
  findIsUserAdmin: (email: emailType) => Promise<boolean>;
}

const { FIND_ADMIN } = URLS;

const useIsUserAdmin = (): HookRetType => {
  const findIsUserAdmin = async (email: emailType): Promise<boolean> => {
    if (!email) return false;

    const isUserAdmin = await GET<boolean>({ url: FIND_ADMIN(email) });

    return isUserAdmin;
  };

  return { findIsUserAdmin };
};

export default useIsUserAdmin;
