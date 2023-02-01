import * as CONST from './bootstrapConstants';

export const setLogin = payload => ({
  type: CONST.SET_LOGIN,
  payload,
});

export const setSidebarToggle = payload => ({
  type: CONST.SET_SIDEBAR_TOGGLE,
  payload,
});

export const setMenus = payload => ({
  type: CONST.SET_MENUS,
  payload,
})

export const setOrders = payload => ({
  type: CONST.SET_ORDERS,
  payload,
});

// export const setOrdersFailed = payload => ({
//   type: CONST.SET_ORDERS_FAILED,
//   payload,
// });

// export const setOrdersSuccess = payload => ({
//   type: CONST.SET_ORDERS_SUCCESS,
//   payload,
// });