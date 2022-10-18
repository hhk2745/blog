# 레이아웃

주로 display `flex` 속성을 이용해서 기본 레이아웃에 대한 구성을 하고
메인축은 `justyfy`, 교차축은 `align`을 이용함.

# :hover

메뉴 마우스 오버시 일어나는 스타일은 `:hover`를 이용하는데 `Pseudo-classes`라고 함.

# icon

https://fontawesome.com/ 에서 제공하는 아이콘들을 이용.
React 에서 사용할 때는 아래와 같이 사용 함.

`@fortawesome/free-solid-svg-icons` 에는 일부 제한된 아이콘만 제공하는거같음.

```html
<script
  src="https://kit.fontawesome.com/2398f113df.js"
  crossorigin="anonymous"
></script>

...
<i class="fa-brands fa-square-pied-piper"></i>
...
```

```tsx
import { faGears } from "@fortawesome/free-solid-svg-icons";
return (
  <>
    ...
    <FontAwesomeIcon icon={faGears} />
    ...
  </>
);
```

![dream1](https://user-images.githubusercontent.com/18409941/196315987-17539789-76e6-40c8-bd8d-bad3ee85e496.png)
_min-width: 768px_

![dream2](https://user-images.githubusercontent.com/18409941/196315989-e352f309-7fbe-4d13-929c-21d155bf7995.png)
_max-width: 768px default_
![dream3](https://user-images.githubusercontent.com/18409941/196315992-1313b54b-b066-419e-94d0-b117c94d5123.png)
_max-width: 768px active_
