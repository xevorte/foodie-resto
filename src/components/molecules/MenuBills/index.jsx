import * as COMPONENT from '../../';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export default function Component() {
  const { orders } = useSelector(state => state);

  const subtotal = useMemo(
    () =>
      orders
        .map((order) => parseFloat((order.price * order.value).toFixed(2)))
        .reduce((ac, val) => ac + val, 0),
    [orders]
  );

  return (
    <div className="bills mt-20 lg:mt-0">
      <div className="flex items-center justify-between">
        <COMPONENT.TextSM variant="secondary" type="medium">
          Subtotal
        </COMPONENT.TextSM>
        <COMPONENT.TextM variant="secondary" type="semibold">
          ${subtotal.toFixed(2)}
        </COMPONENT.TextM>
      </div>
      <div className="flex items-center justify-between mt-3">
        <COMPONENT.TextSM variant="secondary" type="medium">
          Tax (10%)
        </COMPONENT.TextSM>
        <COMPONENT.TextM variant="secondary" type="semibold">
          ${(subtotal * (10/100)).toFixed(2)}
        </COMPONENT.TextM>
      </div>
      <div className="block h-2 w-full border-t-[3px] border-dashed mt-7 mb-6" />
      <div className="flex items-center justify-between">
        <COMPONENT.TextSM variant="dark" type="medium">
          Total
        </COMPONENT.TextSM>
        <COMPONENT.TextM variant="primary" type="semibold">
          ${(subtotal + (subtotal * (10/100))).toFixed(2)}
        </COMPONENT.TextM>
      </div>
      <COMPONENT.ButtonFilled
        variant="primary"
        type="medium"
        size="SM"
        className="w-full py-4 mt-8 rounded-full"
      >
        Print Bills
      </COMPONENT.ButtonFilled>
    </div>
  );
}