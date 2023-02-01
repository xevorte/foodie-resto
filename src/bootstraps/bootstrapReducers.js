import initialStates from './bootstrapInitialStates';
import * as CONST from './bootstrapConstants';

export default function mainReducer(state = initialStates, action) {
  const { payload, type } = action;

  const actions = {
    [CONST.SET_LOGIN]: () => ({
      ...state,
      access_token: payload,
    }),
    [CONST.SET_SIDEBAR_TOGGLE]: () => ({
      ...state,
      active: payload,
    }),
    [CONST.SET_MENUS]: () => ({
      ...state,
      menus: payload,
    }),
    [CONST.SET_ORDERS]: () => ({
      ...state,
      orders: payload,
    }),
    // [CONST.SET_ORDERS]: () => ({
    //   ...state,
    //   ordersFetch: true,
    //   ordersParams: payload,
    //   action: type,
    // }),
    // [CONST.SET_ORDERS_FAILED]: () => ({
    //   ...state,
    //   ordersFetch: false,
    //   ordersError: payload,
    //   action: type,
    // }),
    // [CONST.SET_ORDERS_SUCCESS]: () => ({
    //   ...state,
    //   ordersFetch: false,
    //   ordersResponse: payload,
    //   action: type,
    // }),

    DEFAULT: () => state,
  };

  return (actions[type] || actions.DEFAULT)();
};