import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { TemplateSliceInterface } from '@/ts/interface'

const initialState: TemplateSliceInterface = {
  selected: '',
}

export const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    updatetemplate: (
      state: TemplateSliceInterface,
      { payload }: PayloadAction<TemplateSliceInterface['selected']>
    ) => ({ ...state, selected: payload }),
  },
})

export const { updatetemplate } = templateSlice.actions

export const templateReducer = templateSlice.reducer
