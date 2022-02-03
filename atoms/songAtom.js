import { atom } from "recoil";

export const currentTrackIdState = atom({
  key: "currentTrackState", //unique ID (with respect to other atomsSelector)
  default: null, // default value (aka initial value)
});

export const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});
