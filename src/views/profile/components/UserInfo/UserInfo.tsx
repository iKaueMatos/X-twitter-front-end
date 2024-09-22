import React from 'react';
import UserInfoTemplate from './templates/UserInfoTemplate';
import {
  useGetProfileAvatarQuery,
  useGetProfileDataQuery,
} from '@/query/profile/profile.query';

const UserInfo = () => {
  const { data: avatarUrl } = useGetProfileAvatarQuery();
  const { data: profileData } = useGetProfileDataQuery();

  return (
    <UserInfoTemplate
      avatarUrl={avatarUrl}
      username={profileData && profileData.username}
      tag={profileData && profileData.username}
      bio={profileData?.bio}
      location={profileData?.location}
      joinDate={profileData?.joinDate}
    />
  );
};

export default UserInfo;
