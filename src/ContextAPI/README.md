# Context API

## Import

```ts
import React, { createContext, useContext, useReducer, Dispatch } from "react";
```

## 1. create context

- state와 dispatch context를 따로 만든다.
- state의 createContext는 generic으로 `<state의 type | undefined>`를 타입으로 한다.

```ts
// Context Instance

// state context
export type Count = {
  count: number;
};

const CountStateContext = createContext<Count | undefined>(undefined);

// dispatch context
type Action = { type: "INCREASE" } | { type: "DECREASE" };

type CountDispatch = Dispatch<Action>;
const CountDispatchContext = createContext<CountDispatch | undefined>(
  undefined
);
```

---

## 2. Provider (useReducer)

- action의 Provider와 dispatch의 Provider를 모두 return한다.

```ts
export const CountContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountDispatchContext.Provider value={dispatch}>
      <CountStateContext.Provider value={state}>
        {children}
      </CountStateContext.Provider>
    </CountDispatchContext.Provider>
  );
};
```

---

## 3. Consumer (useContext)

- null인지 확인한 후 return하여준다.

```ts
// Consumer (useContext)
export function useCountState() {
  const state = useContext(CountStateContext);
  if (!state) throw new Error("CountProvider not found");
  return state;
}

export function useCountsDispatch() {
  const dispatch = useContext(CountDispatchContext);
  if (!dispatch) throw new Error("CountProvider not found");
  return dispatch;
}
```
