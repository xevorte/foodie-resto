import * as COMPONENT from '../../';
import * as SVG from '../../../utils/Svgs';

export default function Component(props) {
  const { image, title, price, value, minOnClick, plusOnClick } = props;

  return (
    <div className="flex items-center justify-between flex-wrap bg-light p-5 my-3 rounded-3xl xlg:flex-nowrap">
      <div className="flex items-center">
        <img src={image} alt="food" width={80} />
        <div className="ml-3">
          <COMPONENT.TextSM variant="dark" type="semibold" className="mb-2">
            {title}
          </COMPONENT.TextSM>
          <COMPONENT.TextSM variant="primary" type="semibold">
            ${price}
          </COMPONENT.TextSM>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mt-2 sm:flex-col sm:items-end sm:w-auto lg:flex-row xlg:flex-col sm:mt-0 lg:mt-2 xlg:mt-0 lg:w-full xlg:w-auto">
        <div className="cursor-pointer mt-1 sm:mb-2 lg:mb-0 xlg:mb-2 sm:mt-0">
          <SVG.IC_DOTS />
        </div>
        <div className="flex items-center">
          <COMPONENT.ButtonOutlined
            variant="secondary"
            type="semibold"
            size="XS"
            className="px-[5px] rounded-full"
            onClick={minOnClick}
          >
            -
          </COMPONENT.ButtonOutlined>
          <COMPONENT.TextSM variant="dark" type="semibold" className="mx-2">
            {value}
          </COMPONENT.TextSM>
          <COMPONENT.ButtonFilled
            variant="primary"
            type="semibold"
            size="XS"
            className="py-[1px] px-[5px] rounded-full"
            onClick={plusOnClick}
          >
            +
          </COMPONENT.ButtonFilled>
        </div>
      </div>
    </div>
  );
};