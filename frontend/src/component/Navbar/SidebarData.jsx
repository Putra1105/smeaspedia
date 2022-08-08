import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { GrCircleInformation } from 'react-icons/gr';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Accounts',
    path: '/accounts',
    icon: <BiUserCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <FiSettings />,
    cName: 'nav-text',
  },
  {
    title: 'Information',
    path: '/information',
    icon: <GrCircleInformation />,
    cName: 'nav-text',
  },
];
