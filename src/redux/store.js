import addCredentialReducers from "../redux/slice/addCredentialSlice.js";
import shareDomainModalSliceReducers from "../redux/slice/shareDomainModalSlice.js";
import domainsSliceReducers from "../redux/slice/domainsSlice.js";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    addCredential: addCredentialReducers,
    showDomainShareModal: shareDomainModalSliceReducers,
    domains: domainsSliceReducers,
  },
});
