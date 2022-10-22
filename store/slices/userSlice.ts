import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { UserSliceInterface } from '@/ts/interface'

const initialState: UserSliceInterface = {
  // user: {},
  user: { email: 'admin@email.com' },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (
      state: UserSliceInterface,
      { payload }: PayloadAction<UserSliceInterface['user']>
    ) => ({ ...state, user: { ...payload } }),
  },
})

export const { updateUser } = userSlice.actions

export const userReducer = userSlice.reducer
