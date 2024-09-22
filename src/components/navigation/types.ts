import {  ReactNode } from 'react';

export interface INavigationElement {
  title: string;
  icon: ReactNode;
  url: string;
}

export interface INavigationItem {
  navItem: INavigationElement;
  isActiveItem: boolean;
}

export interface IPlan {
  authorized: INavigationElement[],
  unauthorized: INavigationElement[],
}

export interface INavigation {
  plan: string;
  activeItem?: string;
}
