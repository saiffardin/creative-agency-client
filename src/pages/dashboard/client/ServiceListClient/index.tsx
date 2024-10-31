import { useEffect, useState } from "react";
import { useAppContext } from "@contexts/index";
import ProductCard from "@components/ProductCard";
import { ServiceType } from "@hooks/types/service-types";
import { useGetOrdersByEmail } from "@hooks/useGetOrdersByEmail";
import { useGetServiceByOrder } from "@hooks/useGetServiceByOrder";

const ServiceListClient = () => {
  const {
    userInfo: { email },
  } = useAppContext();

  const [clientOrders, setClientOrders] = useState<ServiceType[]>([]);

  const { getServiceByOrder } = useGetServiceByOrder();
  const { orders, getOrderByEmail } = useGetOrdersByEmail();

  useEffect(() => {
    orders.forEach(async (item) => {
      const response = await getServiceByOrder(item);
      if (response) {
        setClientOrders((prev) => [...prev, response]);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders]);

  useEffect(() => {
    if (email) {
      getOrderByEmail(email);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  return (
    <div className="row my-3 container d-flex  justify-content-center">
      {clientOrders.length > 0 ? (
        clientOrders.map((service, index) => (
          <ProductCard
            key={index}
            containerClassNames="single-service-div"
            imgUrl={`data:image/png;base64,${service.img.imgType}`}
            imgClassNames="comp-img"
            title={service.title}
            description={service.description}
          />
        ))
      ) : (
        <h1>No Orders Yet</h1>
      )}
    </div>
  );
};

export default ServiceListClient;
