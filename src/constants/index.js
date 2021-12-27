export const MAIN_ROUTES = {
  HOME: "",
  FRIENDS: { INDEX: "list-friends", CHAT: "chat/:friendId",CHATMENU: 'menu', INVITE: 'menu/invite' },
};

export const DETAIL_MAIN_ROUTES = {
  HOME: "/",
  FRIENDS: { INDEX: "list-friends", CHAT: "list-friends/chat", CHATMENU: 'list-friends/menu', INVITE: 'list-friends/menu/invite' },
};

export const VIDEO_CALL_ROUTES = {
  HOME: "videoCall",
  CHILD: { VIDEO: ":callId", EXERCISE: ":callId/exercises", SINGLE: "single/:friendId", SINGLE_EXERCISE: "single/:friendId/exercises" },
};
