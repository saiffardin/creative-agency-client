export interface PropsUserCardImg {
  url?: string;
  altTxt?: string;
  classNames?: string;
}

const UserCardImg = ({
  url = "",
  altTxt = "",
  classNames = "",
}: PropsUserCardImg) => {
  return url ? <img className={classNames} src={url} alt={altTxt} /> : null;
};

export default UserCardImg;
