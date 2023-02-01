import * as COMPONENT from '../../components';
import * as IMG from '../../utils/Images';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setMenus } from '../../bootstraps/bootstrapActions';

export default function Page() {
  const { menus, orders } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setMenus([
        {
          id: '11',
          image: IMG.BURGER_LARGE_CHEESE,
          title: 'Large Cheese Burger',
          price: 5.15,
          desc: 'Large Burger with extra cheese',
        },
        {
          id: '12',
          image: IMG.BURGER_LARGE_CHICKEN,
          title: 'Large Chicken Burger',
          price: 5.1,
          desc: 'Large Burger with chicken extra cheese',
        },
        {
          id: '13',
          image: IMG.BURGER_ORIGIN,
          title: 'Origin Burger',
          price: 5.0,
          desc: 'Original burger with extra cheese',
        },
        {
          id: '14',
          image: IMG.FRENCH_FRIES,
          title: 'French Fries',
          price: 2.15,
          desc: 'Potatoes fried until crispy and delicious',
        },
        {
          id: '15',
          image: IMG.CHICKEN_BBQ,
          title: 'Chicken BBQ',
          price: 4.45,
          desc: 'Fried chicken covered with BBQ sauce',
        },
        {
          id: '16',
          image: IMG.NUGGET,
          title: 'Nugget',
          price: 2.25,
          desc: 'Fried chicken nuggets until crispy',
        },
        {
          id: '17',
          image: IMG.CHICKEN_CHUNKS,
          title: 'Chicken Chunks',
          price: 4.75,
          desc: 'Fried chicken chunks crispy with hot sauce',
        },
        {
          id: '18',
          image: IMG.VEGAN_BURRITO,
          title: 'Vegan Burrito',
          price: 5.8,
          desc: 'Healthy food only for those vegan lovers',
        },
      ])
    );
  }, []);

  return (
    <>
      <div className="w-full lg:w-3/5 xlg:w-full">
        <COMPONENT.MenuHeader />
        <div className="min-h-[800px] bg-light p-10">
          <div className="grid sm:grid-cols-2 xlg:grid-cols-3 grid-flow-row-dense gap-8">
            {menus.map(menu => (
              <COMPONENT.MenuItem
                key={menu.id}
                id={menu.id}
                thumbnail={menu.image}
                title={menu.title}
                price={menu.price}
                desc={menu.desc}
                isAdded={orders.some(order => order.id === menu.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <COMPONENT.MenuCart />
    </>
  );
};