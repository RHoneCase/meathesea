import config from 'src/config.js'
let APP_EMAIL = 'support@payhiram.ph'
export default {
  sidebarMenu: [
    // {accountType: 'ALL', showOnAdmin: true, accountStatus: 'ALL', description: 'Dashboard', icon: 'fa fa-arrow-right', path: 'dashboard', flag: false, subMenu: null}
      {id: 1, users: 'ALL', parent_id: 0, description: 'ORDERS', icon: '', path: 'dashboard', flag: false, subMenu: null},
      {id: 2, users: 'ALL', parent_id: 0, description: 'CROCKERY PICK UP/ RETURN', icon: '', path: 'requests', flag: false, subMenu: null},
      {id: 3, users: 'ALL', parent_id: 0, description: 'DELI PRODUCTS', icon: '', path: 'investments', flag: false, subMenu: null},
      {id: 4, users: 'ALL', parent_id: 0, description: 'MENU ITEMS', icon: '', path: 'payments', flag: false, subMenu: null},
      {id: 5, users: 'ALL', parent_id: 0, description: 'ANALIYTICS', icon: '', path: 'deposits', flag: false, subMenu: null},
      {id: 6, users: 'ALL', parent_id: 0, description: '', icon: '', path: 'deposits', flag: false, subMenu: null},
      {id: 7, users: 'ALL', parent_id: 0, description: 'DELIVERY', icon: 'fas fa-shipping-fast', path: 'withdrawals', flag: false, subMenu: null},
      {id: 8, users: 'ALL', parent_id: 0, description: 'COLLECTION', icon: 'fas fa-hand-holding-usd', path: 'withdrawals', flag: false, subMenu: null}
  ],
  menuOff: [
      {id: 1, users: 'ALL', parent_id: 0, description: 'Dashboard', icon: 'fa fa-tachometer', path: 'dashboard', flag: false, subMenu: null},
      {id: 2, users: 'ALL', parent_id: 0, description: 'Requested', icon: 'fa fa-arrow-right', path: 'requests', flag: false, subMenu: null},
      {id: 3, users: 'INVESTOR', parent_id: 0, description: 'Invested', icon: 'fa fa-arrow-left', path: 'investments', flag: false, subMenu: null},
      {id: 4, users: 'ALL', parent_id: 0, description: 'Payments', icon: 'fa fa-money', path: 'payments', flag: false, subMenu: null}
  ],
  APP_NAME: 'MTS',
  APP_NAME_HTML: 'MTS',
  APP_EMAIL: APP_EMAIL,
  APP_SITE: 'https://mts.ph',
  COMPANY: 'Meat The Sea',
  COMPANY_URL: 'http://mts.ltd',
  COPYRIGHT: 'MEATTHESEA ' + new Date().getFullYear(),
  USER_TYPE: [{
    title: 'USER'
  }],
  USER_TYPE_SETTING: false,
  plan: false,
  broadcastingFlag: true
}
