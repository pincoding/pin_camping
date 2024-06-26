# 캠핑앱(camping)

- 2024년 04월 23일

## 개발 기간

- 04월23일 ~ 05월 01일

## 기술 stack

- js, react, node.js, git, github

## 프로젝트 목적

- 사용자들이 사이트 접속시 찾고 싶어하는 정보들을 바로 찾을수 있게 UIUX설계 및 설정하였습니다.

## 프로젝트 기획

### 작업 기획서

|       날짜       | 내용                                                                                                                                                      |
| :--------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 04월 23일 ~ 24일 | api 연결, 레퍼런스                                                                                                                                        |
|    04월 25일     | HomePage 폰트 아이콘, 광고등등 기능 설정(직접 배결 객체로 넣기) 및 외부라이브러리 가져와서 쓰기,자세히보기 페이지 클릭스 해당 아이디값 나오는지 설정하기, |
|    04월 26일     | 자세히보기 기능불러오기 및 로딩창 추가, 로그인창 추가, 검색창 기능구현, 검색 이후 해당정보 나오게 설정 조건걸기                                           |
|    04월 27일     | 추천여행지, 캠핑꿀팁, 캠핑주의사항 라우터설정 기능 추가 및 스타일 꾸미기, 다른 라우터page추가 및 기능                                                     |
| 04월 28일 ~ 29일 | style, 디버깅                                                                                                                                             |
|    04월 30일     | 배포                                                                                                                                                      |

## 프로젝트 소개

- 캠핑 앱
- 공공데이터 포털 사이트에서 재공하는 캠핑 api가져와 프로젝트를 만들었습니다.
- 고캠핑 apiUrl : https://www.data.go.kr/data/15101933/openapi.do

## 프로젝트 url

- https://pincoding.github.io/pin_camping/

## 프로젝트 하면서 느낀점

### 프로젝트 진행중 수월하게 진행했던 부분

- 불러온 api 데이터들을 컴포넌트 안에 넣는 부분은 엄청 수월하게 진해 하였습니다.

### 프로젝트 진행중 개발 어려움

- axios이용하여 api를 불러올때 정말 어려웠습니다.
- Home페이지에서 불러온 데이터들을 detail페이지로 가져올때가 어려웠습니다.
- 심장시술로 인하여 회복하면서 프로젝트를 진행한다고 프로젝트에 힘을 100% 쓰지못함점이 아쉬웠습니다.

### 어려움을 해결한 방법

- api요청 할 때 필수 적으로 요청해야되는 부분이 있었는데 그걸 빠트리고 요청 했었습니다. 또한 useQuery안에 querykey, queryFn 이 있었는데 처음에는 했갈려서 못하고 있다가 조금 생각하고 나서 Fn안에는 api함수를 넣어주고 key안에는 api필요한 주소 이름을 적었습니다.
- Home페이지에 detail로 데이터를 처음에는 보낼수가 없어서 api 정보를 detail불러온 뒤 필터를 걸어 해당 아이디값이랑 같으면 나오게 하는씩으로 했었는데 나중에 search페이지에서 갬색후 나오는 컨텐츠들을 detail에서 똑같이 보이게 할려고하니 필터 적용이 힘들 뿐더러 이렇게 코드를 짜는건 아니라고 생각해서 react-router-dom 사이트에 들어가 자료들을 찾아보다 'state' 알게 되었고 state안에 데이터를 저장한뒤 useLocation으로 데이터값을 받아오는걸 알게되었습니다.

### 프로젝트 하면서 알게된 내용

- axios
- useQuery
- react-router-dom : state
- scrollTo

### 유용한 플러그인 및 라이브러리

- react-icons(아이콘)
- react-Helmet(document title element)(문서 제목 요소를 바꿈)
- axios(api)
- react-components(css 작업)
- react-router-dom(라우팅,네비게이션 효율적 관리)
- react-hook-form(api)
- swiper(슬라이더 및 캐러셀)

### 앞으로 어떤식으로 개발해가면 좋을지

- 라이브러리를 사용하기전에 문서를 한번 읽어보고 상황에 맞게 쓸수있는건 써야겠다고 이번에 생각했습니다.
- 대소문자 함수랑 컴포넌트 변수,상수등 구분하여 정확하게 표기해야겠다가 생각했습니다.
- 계획표에 맞게 그날 해야될 일을 히야겠다고 생각했습니다.
- 코드를 배껴오기보다는 먼저 이해하고 직접 적을 수 있을때 가져와야겠다고 생각했습니다.
