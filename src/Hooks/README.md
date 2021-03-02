# Hooks

## useState

- 기본적으로는 타입을 명시하지 않아도 괜찮다.

```ts
const [name, setName] = useState("");
```

- 타입을 명시해주어야 하는 경우는 두가지가 있다.

1. null값을 가질 수도 있는 경우

```ts
type Info = { name: string; description: string };
const [info, setInfo] = useState<Info | null>(null);
```

2. 객체, 배열의 경우

```ts
type Todo = { id: number; text: string; done: boolean };
const [todos, setTodos] = useState<Todo[]>([]);
```

---

## useRef

1. 로컬 변수로 사용될 때

```ts
const id = useRef<number>(0);
const increaseId = () => {
  id.current += 1;
};
```

2. DOM요소를 담을 때

- null인지 확인하고 사용해야한다.

```ts
const inputRef = useRef<HTMLInputElement>(null);

<input name="name" value={name} onChange={onChange} ref={inputRef} />;
```

---

## useReducer

- reducer의 state와 action의 type을 정해준다.

```ts
export type Count = {
  count: number;
};

type Action = { type: "INCREASE" } | { type: "DECREASE" };

function reducer(state: Count, action: Action): Count {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREASE":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      throw new Error("Unhandled action");
  }
}

const [state, dispatch] = useReducer(reducer, 0);
```
