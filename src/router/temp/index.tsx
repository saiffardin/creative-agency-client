import GuestBtns from "./GuestBtns";
import AdminBtns from "./AdminBtns";
import LogoutBtn from "./LogoutBtn";
import ClientBtns from "./ClientBtns";

interface Props {
  className?: string;
}

const Temp = ({ className = "" }: Props) => {
  return (
    <div className={className}>
      <GuestBtns />
      <AdminBtns />
      <ClientBtns />
      <LogoutBtn />
    </div>
  );
};

export default Temp;
