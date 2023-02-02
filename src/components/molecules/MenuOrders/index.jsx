import * as COMPONENT from '../../';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setOrders } from '../../../bootstraps/bootstrapActions';

export default function Component() {
  const [ menuOrders, setMenuOrders ] = useState([]);
  const [ orderNumber, setOrderNumber ] = useState(0);
  const { menus, orders } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (orders.length > 0) {
      setOrderNumber(Math.floor(Math.random() * (99999 - 10000 + 1)));
    }
  }, []);

  useEffect(() => {
    setMenuOrders(menus.filter(menu => orders.some(order => order.id === menu.id)));
  }, [orders]);

  return (
    <div className="orders">
      <COMPONENT.TextXXL variant="dark" type="semibold">
        Orders #{orderNumber}
      </COMPONENT.TextXXL>
      <div className="flex items-center xlg:justify-between mt-6 mb-8 overflow-x-auto">
        <COMPONENT.ButtonFilled
          variant="primary"
          type="medium"
          size="XS"
          className="min-w-[88px] w-full whitespace-nowrap py-3 mr-2 rounded-full"
        >
          Delivery
        </COMPONENT.ButtonFilled>
        <COMPONENT.ButtonOutlined
          variant="secondary"
          type="medium"
          size="XS"
          className="min-w-[80px] w-full whitespace-nowrap py-3 mr-2 rounded-full"
        >
          Dine In
        </COMPONENT.ButtonOutlined>
        <COMPONENT.ButtonOutlined
          variant="secondary"
          type="medium"
          size="XS"
          className="min-w-[104px] w-full whitespace-nowrap py-3 mr-2 rounded-full"
        >
          Take away
        </COMPONENT.ButtonOutlined>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-1 md:gap-8 lg:gap-0">
        {menuOrders.map((el, id) => (
          <COMPONENT.MenuOrder
            key={id}
            image={el.image}
            title={el.title}
            price={el.price}
            value={orders.filter((order) => order.id === el.id)[0]?.value}
            minOnClick={() =>
              dispatch(
                setOrders(
                  orders.map((order) =>
                    order.id === el.id
                      ? {
                          ...order,
                          value: order.value > 0 ? order.value - 1 : order.value,
                        }
                      : order
                  )
                )
              )
            }
            plusOnClick={() =>
              dispatch(
                setOrders(
                  orders.map((order) =>
                    order.id === el.id
                      ? {
                          ...order,
                          value: order.value + 1,
                        }
                      : order
                  )
                )
              )
            }
          />
        ))}
      </div>
    </div>
  );
}