import HomeSVG from '@/assets/icons/Home.svg';
import ExplorerSVG from '@/assets/icons/Explore.svg';
import NotificationSVG from '@/assets/icons/Notifications.svg';
import MessagesSVG from '@/assets/icons/Messages.svg';
import BookmarksSVG from '@/assets/icons/Bookmarks.svg';
import ListsSVG from '@/assets/icons/Lists.svg';
import ProfileSVG from '@/assets/icons/Profile.svg';
import MoreSVG from '@/assets/icons/More.svg';
import ViewSVG from '@/assets/icons/View.svg';
import SettingsSVG from '@/assets/icons/Settings.svg';

export const authorizedNavigationList = [
  { title: 'Início', icon: <HomeSVG />, url: '/' },
  { title: 'Explorar', icon: <ExplorerSVG />, url: '/explore' },
  { title: 'Notificações', icon: <NotificationSVG />, url: '#' },
  { title: 'Mensagens', icon: <MessagesSVG />, url: '#' },
  { title: 'Favoritos', icon: <BookmarksSVG />, url: '#' },
  { title: 'Tweets', icon: <ListsSVG />, url: '/#' },
  { title: 'Perfil', icon: <ProfileSVG />, url: '/profile' },
  { title: 'Mais', icon: <MoreSVG />, url: '#' },
];

export const unauthorizedNavigationList = [
  { title: 'Visualizar', icon: <ViewSVG />, url: '/view' },
  { title: 'Configurações', icon: <SettingsSVG />, url: '#' },
];


