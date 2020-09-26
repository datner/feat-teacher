import { useReducer } from "react";

export function useToggle(initialState: boolean) {
  return useReducer((s) => !s, initialState);
}
