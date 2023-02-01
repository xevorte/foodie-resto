import * as COMPONENT from '../../';
import { useDispatch, useSelector } from 'react-redux';
import { setOrders } from '../../../bootstraps/bootstrapActions';

export default function Component(props) {
  const { id, thumbnail, title, price, desc, isAdded } = props;
  const { orders } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-between min-h-[320px] bg-white rounded-[40px] py-7 px-8">
      <img src={thumbnail} width={180} alt="food" className="mx-auto" />
      <div className="desc my-5">
        <div className="flex items-center justify-between mb-2.5">
          <COMPONENT.TextLG variant="dark" type="semibold">
            {title}
          </COMPONENT.TextLG>
          <COMPONENT.TextLG variant="primary" type="semibold">
            ${price}
          </COMPONENT.TextLG>
        </div>
        <COMPONENT.TextSM
          variant="secondary"
          type="normal"
          className="md:w-[75%]"
        >
          {desc}
        </COMPONENT.TextSM>
      </div>
      {isAdded ? (
        <COMPONENT.ButtonFilled
          variant='primary'
          type='medium'
          size='SM'
          className='w-full py-3 px-6 rounded-full'
          onClick={() => dispatch(setOrders(orders.filter(order => order.id !== id)))}
        >
          Added to Cart
        </COMPONENT.ButtonFilled>
      ) : (
        <COMPONENT.ButtonOutlined
          variant='primary'
          type='medium'
          size='SM'
          className='w-full py-3 px-6 rounded-full'
          onClick={() => dispatch(setOrders([...orders, { id, price, value: 1 }]))}
        >
          Add to Cart
        </COMPONENT.ButtonOutlined>
      )}
    </div>
  );
}