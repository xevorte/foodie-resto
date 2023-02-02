import * as COMPONENT from '../../';
import * as IMG from '../../../utils/Images';
import { useSelector } from 'react-redux';
import clsx from 'classnames';

export default function Component() {
  const { orders } = useSelector(state => state);

  return (
    <div className="relative flex flex-col min-w-[270px] lg:w-full xlg:w-[540px]">
      <COMPONENT.MenuCartProfile avatar={IMG.PROFILE} />
      <div className={clsx('flex flex-col h-full py-10 px-8', {
        'justify-between': orders.length > 0,
        'justify-center': orders.length <= 0,
      })}>
        {orders.length > 0 ? (
          <>
            <COMPONENT.MenuOrders />
            <COMPONENT.MenuBills />
          </>
        ) : (
          <COMPONENT.TextXL
            variant="primary"
            type="semibold"
            className="text-center"
          >
            No Order
          </COMPONENT.TextXL>
        )}
      </div>
    </div>
  );
};