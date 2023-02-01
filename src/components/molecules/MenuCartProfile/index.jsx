import * as SVG from '../../../utils/Svgs';

export default function Component(props) {
  const { avatar } = props;

  return (
    <div className="profile flex items-center justify-between py-10 px-8 border-b-4 border-light">
      <div className="flex items-center">
        <img src={avatar} alt="profile" width={56} />
        <div className="ml-3.5">
          <p className="text-dark text-base font-medium">Felicia Putri</p>
          <p className="text-secondary text-base ">Cashier</p>
        </div>
      </div>
      <a href="#" className="relative">
        <div className="block w-[8px] h-[8px] absolute left-4 top-1 bg-primary rounded-full border border-white"></div>
        <SVG.IC_NOTIFICATION />
      </a>
    </div>
  );
}