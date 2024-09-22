import React, { FC } from 'react'
import { UseFormRegister, Controller, Control } from 'react-hook-form'
import { Box, Container, TextField, Typography } from '@mui/material'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import { IChangeInfoRequest } from '@/services/types'
import { IUserInfoData } from '../tweets/types'

interface IEditUserInfoForm {
  registerEditForm: UseFormRegister<IChangeInfoRequest>
  userInfoData: IUserInfoData
  control: Control<IChangeInfoRequest>
}

export default function EditUserInfoForm({ control, registerEditForm, userInfoData } : IEditUserInfoForm) {
  return (
    <Container
      disableGutters
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        gap: 2,
      }}
    >
      <TextField
        {...registerEditForm('username')}
        id="username"
        label={'Username'}
        defaultValue={userInfoData.username}
        type="text"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...registerEditForm('bio')}
        id="bio"
        label={'Bio'}
        defaultValue={userInfoData.bio}
        type="text"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...registerEditForm('location')}
        id="location"
        label={'Location'}
        defaultValue={userInfoData.location}
        type="text"
        variant="outlined"
        fullWidth
      />
      <TextField
        {...registerEditForm('website')}
        id="website"
        label={'Website'}
        defaultValue={userInfoData.website}
        type="text"
        variant="outlined"
        fullWidth
      />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography>Birth Date</Typography>
        <Controller
          control={control}
          name="birthDate"
          render={({ field }) => (
            <ReactDatePicker
              className="input"
              placeholderText="Select date"
              onChange={(date) => field.onChange(date)}
              selected={field.value ? new Date(field.value) : null}
            />
          )}
        />
      </Box>
    </Container>
  )
}