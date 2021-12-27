export const MAIN_ROUTES = {
  HOME: '',
  FRIENDS: { INDEX: 'list-friends', CHAT: 'chat/:friendId', INVITE: 'invite' },
  EXERCISES: { INDEX: 'exercises', TRAINER_CLASS: 'trainer-exercise', CLASS_VIDEO: 'trainer-exercise/videoCall'}
};

export const DETAIL_MAIN_ROUTES = {
  HOME: '/',
  FRIENDS: { INDEX: 'list-friends', CHAT: 'list-friends/chat', INVITE: 'list-friends/invite' },
};

export const VIDEO_CALL_ROUTES = {
  INDEX: 'videoCall',
  CHILD: { VIDEO: ':callId', EXERCISE: ':callId/:workoutId' },
};
