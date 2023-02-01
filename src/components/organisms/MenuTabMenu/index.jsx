import * as COMPONENT from '../../';

export default function Component() {
  return (
    <div className="flex items-center overflow-x-auto">
      <COMPONENT.MenuTabButton active label='All Menu' />
      <COMPONENT.MenuTabButton label='Chicken' />
      <COMPONENT.MenuTabButton label='Burger' />
      <COMPONENT.MenuTabButton label='Drink' />
      <COMPONENT.MenuTabButton label='Snack' />
      <COMPONENT.MenuTabButton label='Dessert' />
    </div>
  );
};