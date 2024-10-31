import { Card } from "react-bootstrap";

import UserCardImg, { PropsUserCardImg } from "./UserCardImg";
import UserCardInfo, { PropsUserCardInfo } from "./UserCardInfo";

interface Props {
  userImg?: PropsUserCardImg;
  userInfo?: PropsUserCardInfo;
  description?: string;
}

const UserCard = (props: Props) => {
  const { userImg, userInfo, description } = props;

  return (
    <Card className="m-3" style={{ width: "18rem" }}>
      <div className="d-flex m-2 p-2">
        {userImg ? (
          <UserCardImg
            url={userImg.url}
            altTxt={userImg.altTxt}
            classNames={userImg.classNames}
          />
        ) : null}

        {userInfo ? (
          <UserCardInfo
            name={userInfo.name}
            company={userInfo.company}
            classNames={userInfo.classNames}
          />
        ) : null}
      </div>

      {description ? (
        <Card.Body>
          <Card.Text className="text-black-50">{description}</Card.Text>
        </Card.Body>
      ) : null}
    </Card>
  );
};

export default UserCard;
