import React, { useContext, createContext, useReducer } from "react";
import { CommentReducer, initialState, CommentState } from "./reducer";
import { CommentDispatch } from "./types";

const CommentStateContext = createContext<CommentState>(initialState);
const CommentDispatchContext = createContext<CommentDispatch>(() => {});

export const CommentsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // Create a state and dispatch with `useReducer` passing in the `CommentReducer` and an initial state. Pass these as values to our contexts.
  const [state, dispatch] = useReducer(CommentReducer, initialState);
  return (
    <CommentStateContext.Provider value={state}>
      <CommentDispatchContext.Provider value={dispatch}>
        {children}
      </CommentDispatchContext.Provider>
    </CommentStateContext.Provider>
  );
};

// Create helper hooks to extract the `state` and `dispacth` out of the context.
export const useCommentState = () => useContext(CommentStateContext);
export const useCommentDispatch = () => useContext(CommentDispatchContext);
