import _ from 'lodash'

const menu = [
  // dashboard
  {
    id: _.uniqueId(),
    key: 'dashboard',
    name: '管理平台',
    icon: 'laptop',
    power: [1, 2],
  },
  // account
  {
    id: _.uniqueId(),
    key: 'account',
    name: '用户管理',
    icon: 'user',
    clickable: false,
    power: [1],
    children: [
      {
        id: _.uniqueId(),
        key: 'admin',
        name: '管理员',
        power: [1, 2, 3, 4, 5],
      },
      /* {
        id: _.uniqueId(),
        key: 'role',
        name: '管理员角色',
        power: [1, 2, 3, 4, 5],
      },
      {
        id: _.uniqueId(),
        key: 'user',
        name: '用户',
        power: [1, 2, 3, 4, 5],
      }, */
    ],
  },
  // system
  {
    id: _.uniqueId(),
    key: 'system',
    name: '系统管理',
    icon: 'appstore',
    clickable: false,
    power: [1],
    children: [
      {
        id: _.uniqueId(),
        key: 'modify-password',
        name: '修改密码',
        power: [1, 2, 4],
      },
    ],
  },
  // bbs
  {
    id: _.uniqueId(),
    key: 'bbs',
    name: '前端分页',
    icon: 'message',
    clickable: false,
    power: [1],
    children: [
      {
        id: _.uniqueId(),
        key: 'category',
        name: '分类管理',
        power: [1, 2, 3, 4, 5],
      },
    ],
  },
  // 多级导航
  {
    id: _.uniqueId(),
    key: 'navigation',
    name: '多级导航',
    icon: 'setting',
    power: [1],
    children: [
      {
        id: _.uniqueId(),
        key: 'navigation1',
        name: '二级导航1',
        power: [1, 2],
      },
      {
        id: _.uniqueId(),
        key: 'navigation2',
        name: '二级导航2',
        clickable: false,
        power: [1],
        children: [
          {
            id: _.uniqueId(),
            key: 'navigation21',
            name: '三级导航1',
            power: [1, 2],
          },
          {
            id: _.uniqueId(),
            key: 'navigation22',
            name: '三级导航2',
            power: [1, 2],
          },
        ],
      },
    ],
  },
]

export default menu
