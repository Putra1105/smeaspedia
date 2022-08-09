import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Account',
    path: '/account',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text',
  },
  {
    title: 'Setting',
    path: '/setting',
    icon: <AiIcons.AiFillSetting />,
    cName: 'nav-text',
  },
  {
    title: 'Information',
    path: '/information',
    icon: <IoIcons.IoMdInformationCircle />,
    cName: 'nav-text',
  },
];
