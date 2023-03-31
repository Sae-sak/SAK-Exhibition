import { IChatState } from "@type/chat";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IChatState = {
  isChat: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    openChat(state) {
      state.isChat = true;
    },

    closeChat(state) {
      state.isChat = false;
    },

    toggleChat(state) {
      state.isChat = !state.isChat;
    },
  },
});

export const chatActions = chatSlice.actions;
export default chatSlice.reducer;
