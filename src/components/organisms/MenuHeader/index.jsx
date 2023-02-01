import * as COMPONENT from '../../';
import * as SVG from '../../../utils/Svgs';

export default function Component() {
  return (
    <div className="pt-8 px-10">
      <COMPONENT.SidebarToggler />
      <div className="md:flex items-center justify-between mt-7 mb-10">
        <div>
          <COMPONENT.TextXXXL variant="dark" type="semibold" className="mb-2">
            Foodie Resto
          </COMPONENT.TextXXXL>
          <COMPONENT.TextM variant="secondary" type="normal">
            Thursday, 26 Jan 2023
          </COMPONENT.TextM>
        </div>
        <div className="sm:flex items-center justify-between min-w-[50%] sm:bg-light sm:pl-6 rounded-full mt-10 md:mt-0">
          <div className="flex items-center w-full bg-light py-4 rounded-t-2xl px-6 sm:rounded-none sm:pl-0">
            <SVG.IC_SEARCH />
            <input
              type="text"
              className="w-full bg-transparent text-sm text-secondary font-medium outline-none ml-4 placeholder:text-secondary placeholder:font-medium"
              placeholder="Search..."
            />
          </div>
          <COMPONENT.ButtonFilled
            variant="primary"
            type="medium"
            size="SM"
            leftIcon={<SVG.IC_FILTER />}
            className="w-full sm:w-auto py-4 sm:py-5 px-[26px] rounded-b-2xl sm:rounded-full"
          >
            Filter
          </COMPONENT.ButtonFilled>
        </div>
      </div>
      <COMPONENT.MenuTabMenu />
    </div>
  );
}