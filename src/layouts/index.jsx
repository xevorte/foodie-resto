import * as COMPONENT from '../components';

export default function Layouts(props) {
  return (
    <div className="lg:flex">
      <COMPONENT.Sidebar />
      {props.children}
    </div>
  );
}