import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { UserSliceInterface } from '@/ts/interface'

const initialState: UserSliceInterface = {
  id: '',
  role: '',
  name: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeTheme: (
      state: UserSliceInterface,
      { payload }: PayloadAction<UserSliceInterface>
    ) => ({ ...state }),
  },
})

export const { changeTheme } = userSlice.actions

export const userReducer = userSlice.reducer
