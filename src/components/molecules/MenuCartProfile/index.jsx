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
      <a href="#" className="group relative p-1.5 rounded-full transition-all hover:bg-light">
        <div className="block w-[10px] h-[10px] absolute left-5 top-2 bg-primary rounded-full border-2 border-white group-hover:border-light"></div>
        <SVG.IC_NOTIFICATION />
      </a>
    </div>
  );
}