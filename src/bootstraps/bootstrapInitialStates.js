const loginState = {
  access_token: 'aowkaokwao',
};

const sidebarToggleState = {
  active: false,
};

const menusState = {
  menus: [],
};

const ordersState = {
  orders: [],
  // ordersFetch: false,
  // ordersParams: null,
  // ordersError: null,
  // ordersResponse: null,
};

export default {
  ...loginState,
  ...sidebarToggleState,
  ...menusState,
  ...ordersState,
};