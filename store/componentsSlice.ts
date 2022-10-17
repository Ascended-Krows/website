import { createSlice } from '@reduxjs/toolkit';

export type ComponentsSliceState = {
  mobileMenu: boolean;
  dropdown: boolean;
  walletModal: boolean;
};

const initialState: ComponentsSliceState = {
  mobileMenu: false,
  dropdown: false,
  walletModal: false,
};

export const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    openMobileMenu: (state) => {
      state.mobileMenu = true;
    },
    closeMobileMenu: (state) => {
      state.mobileMenu = false;
    },
    openDropdown: (state) => {
      state.dropdown = true;
    },
    closeDropdown: (state) => {
      state.dropdown = false;
    },
    walletModalShow: (state) => {
      state.walletModal = true;
    },
    walletModalHide: (state) => {
      state.walletModal = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openMobileMenu, closeMobileMenu, openDropdown, closeDropdown, walletModalShow, walletModalHide } =
  componentsSlice.actions;

export default componentsSlice.reducer;
