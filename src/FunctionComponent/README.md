# Function Component

- arrow function과 React.FC는 사용하지 않는 것이 좋다.

- props의 type을 명시하여 준다.

```
type Props = {
  name: String,
  age: Number,
};

function Page({name, age}: Props) {
  return (
    ...
  );
}
```
