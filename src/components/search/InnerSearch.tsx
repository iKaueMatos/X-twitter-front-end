import React, { FC, useState } from 'react'
import { Container, IconButton, TextField } from '@mui/material'
import ExploreSVG from '@/assets/icons/Explore.svg'
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { ISearchInner } from './types'
import Close from '@/ui/button/Close'

interface IInnerSearch {
  register: UseFormRegister<ISearchInner>
  handleSubmit: UseFormHandleSubmit<ISearchInner>
  onSubmit: (requestData: ISearchInner) => void
}

export default function InnerSearch({
  register,
  handleSubmit,
  onSubmit,
}: IInnerSearch) {

  const [inputValue, setInputValue] = useState<string | null>(null)
  return (
    <Container
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        background: '#e8e8e8',
        borderRadius: '30px',
        padding: '0px 10px 0px 30px',
        position: 'relative',
      }}
    >
      <ExploreSVG />
      <TextField
        {...register('username')}
        type="text"
        placeholder="Pesquisar"
        minRows={1}
        multiline
        fullWidth
        sx={{
          fontSize: 20,
          lineHeight: 22,
          outline: 'none',
          border: 'none',
          resize: 'none',
          fontFamily: 'system-ui',
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        }}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit(onSubmit)()
            e.preventDefault()
          }
        }}
      />
      {inputValue ? (
        <Close type="reset" />
      ) : (
        <IconButton type="submit" sx={{ p: 0 }}>
          <ExploreSVG />
        </IconButton>
      )}
    </Container>
  )
}