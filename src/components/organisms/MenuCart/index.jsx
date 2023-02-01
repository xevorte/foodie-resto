import * as COMPONENT from '../../';
import * as IMG from '../../../utils/Images';

export default function Component() {

  return (
    <div className="relative flex flex-col min-w-[270px] lg:w-full xlg:w-[540px]">
      <COMPONENT.MenuCartProfile avatar={IMG.PROFILE} />
      <div className="flex flex-col justify-between h-full py-10 px-8">
        <COMPONENT.MenuOrders />
        <COMPONENT.MenuBills />
      </div>
    </div>
  );
};