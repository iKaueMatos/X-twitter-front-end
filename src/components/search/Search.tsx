/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Box, Container } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useGetSearchUsersListQuery } from '@/query/profile/search.query'
import { useGetAuthorizedUserDataQuery } from '@/query/profile/authorizedUserData.query'
import InnerSearch from '@/components/search/InnerSearch'
import SearchList from '@/components/search/SearchList'
import SettingsSVG from '@/assets/icons/Settings.svg'
import { ISearchInner } from './types'
import { ISearchQueryData } from '@/services/types'
import { IUserInfoData } from '../tweets/types'

export default function Search() {
  const [userslist, setUserslist] = useState([])
  const [searchRequestData, setSearchRequestData] = useState<ISearchQueryData>({ username: '', page: 0, size: 11 });

  const { register, handleSubmit } = useForm<ISearchInner>();
  const { data: searchResponseData } = useGetSearchUsersListQuery(searchRequestData);
  const { data: authorizedUserData } = useGetAuthorizedUserDataQuery()

  const onSubmit = (innerData: ISearchInner) => {
    setSearchRequestData({ username: innerData.username, page: 0, size: 10 })
  };

  const removeAuthorizedUser = () => {
    const myId = authorizedUserData?.profileId
    const searchResponseDataContent = searchResponseData?.content

    const newArr = searchResponseDataContent?.filter((el: IUserInfoData) => {
      return el.profileId !== myId
    })
    return newArr
  }

  useEffect(() => {
    const userslistWithoutAuthorizedUser = removeAuthorizedUser()

    setUserslist(searchResponseData && userslistWithoutAuthorizedUser);

  }, [searchResponseData])

  return (
    <Container
      disableGutters
      sx={{
        padding: '0px 10px 0px 10px',
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
      }}>
        <InnerSearch register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit} />
        <SettingsSVG />
      </Box>
      <SearchList searchedList={userslist} />
    </Container>
  )
}
