export interface PropsUserCardInfo {
  name?: string;
  company?: string;
  classNames?: string;
}

const UserCardInfo = (props: PropsUserCardInfo) => {
  const { name = "", company = "", classNames = "" } = props;

  return name ? (
    <div className={`p-2 ${classNames}`}>
      <h5>{name}</h5>

      {company ? <p className="mb-0">{company}</p> : null}
    </div>
  ) : null;
};

export default UserCardInfo;
