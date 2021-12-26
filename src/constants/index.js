export const MAIN_ROUTES = {
  HOME: "",
  FRIENDS: { INDEX: "list-friends", CHAT: "chat/:friendId" },
};

export const DETAIL_MAIN_ROUTES = {
  HOME: "/",
  FRIENDS: { INDEX: "list-friends", CHAT: "list-friends/chat" },
};

export const VIDEO_CALL_ROUTES = {
  HOME: "videoCall",
  CHILD: { VIDEO: ":callId", EXERCISE: ":callId/exercises" },
};
