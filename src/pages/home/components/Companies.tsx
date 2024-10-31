import slack from "@assets/images/logos/slack.png";
import google from "@assets/images/logos/google.png";
import uber from "@assets/images/logos/uber.png";
import netflix from "@assets/images/logos/netflix.png";
import airbnb from "@assets/images/logos/airbnb.png";

const COMPANY_ITEMS = [
  { imgSrc: slack, imgAltText: "slack" },
  { imgSrc: google, imgAltText: "google" },
  { imgSrc: uber, imgAltText: "uber" },
  { imgSrc: netflix, imgAltText: "netflix" },
  { imgSrc: airbnb, imgAltText: "airbnb" },
];

const Companies = () => {
  return (
    <div className="companies-div container my-5 text-center">
      {COMPANY_ITEMS.map((item, indx) => (
        <img
          key={indx}
          src={item.imgSrc}
          alt={item.imgAltText}
          className="img-fluid m-4 p-4 comp-img"
        />
      ))}
    </div>
  );
};

export default Companies;
