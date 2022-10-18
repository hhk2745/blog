(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{277:function(t,e,r){"use strict";r.r(e);var v=r(13),n=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"브라우저의-기본-구조"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#브라우저의-기본-구조"}},[t._v("#")]),t._v(" 브라우저의 기본 구조")]),t._v(" "),e("p",[t._v("구글의 Chrome V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임 환경(Runtime Environment)인 "),e("code",[t._v("Node.js")]),t._v("의 등장으로 자바스크립트는 웹 브라우저를 벗어나\n서버 사이드 애플리케이션 개발에서도 사용되는 범용 개발 언어가 되었다. 하지만 자바스크립트가 가장 많이 사용되는 분야는 역시 웹 브라우저 환경에서 동작하는 웹 페이지,애플리케이션이다.")]),t._v(" "),e("p",[t._v("대부분 프로그래밍 언어는 운영체제위에서 실행되지만 웹 어플리케이션의 자바스크립트는 브라우저에서 HTML, CSS와 함께 실행된다.\n따라서 브라우저 환경을 고려할 때 보다 효율적인 자바스크립트 프로그래밍이 가능하다.")]),t._v(" "),e("p",[t._v("브라우저의 핵심 기능은 사용자가 참조하고자 하는 웹페이지를 서버에 요청(Request)하고 서버의 응답(Response)을 받아 브라우저에 표시하는 것이다.\n브라우저는 서버로부터 HTML, CSS, Javascript, 이미지 파일 등을 응답받는다. HTML, CSS 파일은 렌더링 엔진의 HTML 파서와 CSS 파서에 의해 파싱(Parsing)되어 DOM, CSSOM 트리로 변환되고 렌더 트리로 결합된다.\n이렇게 생성된 렌더 트리를 기반으로 브라우저는 웹페이지를 표시한다.")]),t._v(" "),e("p",{attrs:{align:"center"}},[t._v('\n![client-server](https://user-images.githubusercontent.com/18409941/185930522-d84783e5-d5d2-4437-9ed6-9ca8ff076fd7.png "브라우저 동작 과정")\n*브라우저 동작 과정*\n')]),t._v(" "),e("p",[t._v("자바스크립트는 렌더링 엔진이 아닌 자바스크립트 엔진이 처리한다. HTML 파서는 script 태그를 만나면 자바스크립트 코드를 실행하기 위해 DOM 생성 프로세스를 중지하고 자바스크립트 엔진으로 제어 권한을 넘긴다.\n제어 권한을 넘겨 받은 자바스크립트 엔진은 script 태그 내의 자바스크립트 코드 또는 script 태그의 src 어트리뷰트에 정의된\n자바스크립트 파일을 로드하고 파싱하여 실행한다. 자바스크립트의 실행이 완료되면 다시 HTML 파서로 제어 권한을 넘겨서 브라우저가 중지했던 시점부터 DOM 생성을 재개한다.")]),t._v(" "),e("p",[t._v("이처럼 브라우저는 "),e("code",[t._v("동기(Synchronous)")]),t._v("적으로 HTML, CSS, Javascript를 처리한다. 이것은 script 태그의 위치에 따라 블로킹이 발생하여 DOM의 생성이 지연될 수 있다는 것을 의미한다. 따라서 script 태그의 위치는 중요한 의미를 갖는다.")]),t._v(" "),e("p",[t._v("body 요소의 가장 아래에 자바스크립트를 위치시키는 것은 좋은 아이디어이다. 그 이유는 아래와 같다.")]),t._v(" "),e("ol",[e("li",[t._v("HTML 요소들이 스크립트 로딩 지연으로 인해 렌더링에 지장 받는 일이 발생하지 않아 페이지 로딩 시간이 단축된다.")]),t._v(" "),e("li",[t._v("DOM이 완성되지 않은 상태에서 자바스크립트가 DOM을 조작한다면 에러가 발생한다.")])]),t._v(" "),e("h2",{attrs:{id:"렌더링-엔진"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#렌더링-엔진"}},[t._v("#")]),t._v(" 렌더링 엔진")]),t._v(" "),e("p",[t._v("렌더링 엔진의 역할은 요청 받은 내용을 브라우저 화면에 표시하는 일이다.")]),t._v(" "),e("p",[t._v("렌더링 엔진은 HTML, XML, 이미지를 표시할 수 있다. 물론 플러그인이나 브라우저 확장 기능을 이용해 PDF와 같은 다른 유형도 표시할 수 있다.")]),t._v(" "),e("h2",{attrs:{id:"렌더링-엔진들"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#렌더링-엔진들"}},[t._v("#")]),t._v(" 렌더링 엔진들")]),t._v(" "),e("p",[t._v("파이어폭스, 크롬, 사파리는 두 종류의 렌더링 엔진으로 제작되었다. 파이어폭스는 모질라에서 직접 만든 게코(Gecko) 엔진을 사용하고 사파리와 크롬은 웹킷(Webkit) 엔진을 사용한다.")]),t._v(" "),e("p",[t._v("웹킷은 최초 리눅스 플랫폼에서 동작하기 위해 제작된 오픈소스 엔진인데 애플이 맥과 윈도우즈에서 사파리 브라우저를 지원하기 위해 일부 수정을 했다.\n더 자세한 내용은 "),e("a",{attrs:{href:"webkit.org"}},[t._v("webkit.org")]),t._v("를 참조한다.")]),t._v(" "),e("h2",{attrs:{id:"동작-과정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#동작-과정"}},[t._v("#")]),t._v(" 동작 과정")]),t._v(" "),e("p",[t._v("렌더링 엔진은 통신으로부터 요청한 문서의 내용을 얻는 것으로 시작하는데 문서의 내용은 보통 8KB 단위로 전송된다.")]),t._v(" "),e("p",[t._v("다음은 렌더링 엔진의 기본적인 동작 과정이다.")]),t._v(" "),e("p",{attrs:{align:"center"}},[t._v('\n![rendering-engine](https://user-images.githubusercontent.com/18409941/185933734-514bc920-379c-456b-97c0-5c176f945df0.png "렌더링 엔진의 동작 과정")\n*렌더링 엔진의 동작 과정*\n')]),t._v(" "),e("p",[t._v("렌더링 엔진은 HTML 문서를 파싱하고 "),e("code",[t._v('"콘텐츠 트리"')]),t._v("내부에서 태그를 DOM 노드로 변환한다. 그 다음 외부 CSS 파일과 함께 포함된 스타일 요소도 파싱한다.\n스타일 정보와 HTML 표시 규칙은 "),e("code",[t._v('"렌더 트리"')]),t._v("라고 부르는 또 다른 트리를 생성한다.")]),t._v(" "),e("p",[t._v("렌더 트리는 색상 또는 면적과 같은 시각적 속성이 있는 사각형을 포함하고 있는다 정해진 순서대로 화면에 표시된다.")]),t._v(" "),e("p",[t._v("렌더 트리 생성이 끝나면 배치가 시작되는데 이것은 각 노드가 화면의 정확한 위치에 표시되는 것을 의미한다. 다음은 UI 백엔드에서 렌더 트리의 각 노드를 가로지르며\n형상을 만들어 내는 그리기 과정이다.")]),t._v(" "),e("p",[e("code",[t._v("일련의 과정들이 점진적으로 진행된다는 것")]),t._v("을 아는 것이 중요하다. 렌더링 엔진은 좀 더 나은 사용자 경험을 위해 가능하면 빠르게 내용을 표시하는데 모든 HTML을 파싱할 때까지 기다리지 않고 배치와 그리기 과정을 시작한다.\n네트워크로부터 나머지 내용이 전송되기를 기다리는 동안 받은 내용의 일부를 먼저 화면에 표시하는 것이다.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://poiemaweb.com/js-browser",target:"_blank",rel:"noopener noreferrer"}},[t._v("참고사이트1"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://d2.naver.com/helloworld/59361",target:"_blank",rel:"noopener noreferrer"}},[t._v("참고사이트2"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);