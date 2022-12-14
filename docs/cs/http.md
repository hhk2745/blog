## 프로토콜
컴퓨터 내부 혹은 컴퓨터 사이에서 데이터의 교환 방식을 정의하는 규칙 체계임. 기기 간 통신은 교환되는 데이터의 형식에 대해 상호 합의를 요구하는데 이런 형식을 정의하는 규칙의 집합을 `프로토콜`이라고 함.

## HTTP
웹상에서 클라이언트와 서버 간에 요청/응답으로 데이터를 주고 받을 수 있는 프로토콜임.
클라이언트가 HTTP 프로토콜을 통해 서버에게 요청을 보내면 서버는 요청에 맞는 응답을 클라이언트에게 전송.
이 때, HTTP 요청에 포함되는 HTTP 메소드는 서버가 요청을 수행하기 위해 해야할 행동을 표시하는 용도로 사용됨.

### GET
HTTP/1.1 스펙인 [RFC2616](rfc-editor.org/rfc/rfc2616#section-9.3)에 따르면 GET은 `서버로부터 정보를 조회하기 위해 설계된 메소드`.
GET은 요청을 전송할 때 필요한 데이터를 body에 담지 않고, 쿼리스트링을 통해 전송하게됨.
URL의 끝에 `?,&`를 이용해 key-value 요청파라미터를 같이 보내게 됨.

> https://www.google.com/search?q=get

js, css, 이미지 같은 정적 컨텐츠는 양이 크고 변경될 일이 적어서 한번 요청하고 나면 브라우저에서 해당 요청을 캐시해두게 됨.
그래서 프론트엔트 개발을 하다보면 `"캐시 지우고 확인해주세요~"` 와 같은 답변을 많이 하게됨.

### POST
POST는 리소스를 생성/변경하기 위해 설계되었기 때문에 GET과 달리 전송해야될 데이터를 body에 담아서 전송하게됨.
그래서 GET 요청과 달리 많은 데이터를 전송할 수 있음. POST는 쿼리스트링에 담지 않아서 전송되는 데이터가 안전해보이지만
실제로는 개발자도구 등으로 요청 내용과 결과를 확인 할 수 있기 때문에 민감정보는 반드시 암호화 과정을 거쳐야함.
POST 요청은 Header의 Content-Type에 요청 데이터 타입을 명시해줘야하는데, 이를 토대로 서버에서 데이터를 해석하기 때문.
Content-Type에는 다양한 타입들이 존재하는데 모두 외울 필요는 없음. [MIME-Type](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
