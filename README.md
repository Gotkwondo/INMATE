### 22-07-18 
오늘 커밋은 구현이 안되는 기능들이 작성된 코드들이 많다......
아마 Redux의 store구성과 reducer구성에 있어 문제가 있는거 같다.
오늘은 저녁약속이 있어 평상시보다 일찍 마무리하는 날이다......
아.... 내일은 전부 다시해보자.
container와 module, store까지 전부 싹다 뜯어 고치자.

### 22-07-19
어제 너무 과음을 한거같다....
그래도 조금이라도 해놔야겠다는 생각에 코드를 작성했다.
어제 store 구성을 다시 하겠다고 해서 module를 새로 작성하고 store의 구성을 다시 했다.
내일은 만든 모듈과 컨테이너, 컴포넌트를 연결할 것이다.

### 22-07-20
드디어 현제 위치를 받아오는 Geolocation API 동작을 redux-thunk를 이용해 
비동기적으로 가져오는 것이 성공했다.
일단 지금 시간이 21시가 다되어가서 운동을 갔다와서 시간이 남는다면
현재위치로 맵 중앙을 옮기는 기능까지 구현해볼까 한다.
3일동안 고민하던게 해결되니 기분이 좋다~

### 22-07-21
오늘은 쉬는 겸 천천히 프로젝트의 방향성에 대해서 생각해봤다.
아무레도 현재 위치를 불러와 현재위치를 지도의 중앙에 오게끔 하는 것은 
redux를 이용해 하는 것 보다는 현재 위치는 처음 로딩시에만 불러와 현재 위치를 중심으로
지도를 불러오고, 맛집리스트만 redux의 store에서 가져올까 생각중이다...
내일은 사촌형에게 조언을 구해보자..... 뭘 어캐해야 스토어 업데이트시 
카카오 지도 api가 업데이틀 될지 모르겠다....

### 22-07-22
결국 방향성을 고치기로 했다.
지금까지는 현재위치 좌표를 store로 관리하고 맛집 리스트를 컴포넌트에서 관리했지만
바꾼 방법으로는 현재 위치 좌표를 초기 렌더링에 좌표 주소를 얻고 그 주소로 지도 중앙을 맞춘다.
그리고 맛집 리스트는 store에서 관리하며 이후 맛집을 추가할 수 있는 기능까지 추가할 것이다.
그래도 오늘은 좋은 결과로 마무리 할 수 있어서 기분은 좋다.
우선 마커에 마우스 호버시 간략한 정보를 나타나게끔 했고 이 정보창은 css와 html처럼 수정할 수 있다.
앞으로 해야할 것을 정리하자면 
1️⃣ 전반적인 레이아웃 작업 및 CSS(SCSS) 작업
2️⃣ 맛집 리스트를 리스트 형식으로 볼 수 있는 컴포넌트 만들기
3️⃣ 2번에서 만들어진 컴포넌트에서 store로 연결하여 지도에 마커 표시
4️⃣ 태마 선택시 태마에 해당하는 맛집들 마커 표시

후..... 이렇게 적어보니 할 것이 많다.... 이제는 프로젝트와 JS공부를 겸하며 하자(React도...)

### 22-07-24
어제는 가게 단체주문과 모임으로 인해 커밋하지못했다....
하지만 바뀐 방향성에 대한 정보를 찾다가 Kakao DevTalk에 올라온 글을 보게되었다.
링크:https://devtalk.kakao.com/t/topic/106470/5
이 글에서는 state는 유지되고 props의 변화를 인지하는 useRef를 이용해
지도를 렌더링하는 방법을 제시했다. doji.doo님이 만들어주신 예제를 보면 
useRef()를 이용해 렌더링을 하는 모습을 볼 수 있다.
내일은 이 방법을 참고하여 코드를 작성해보자.

### 22-07-26
시간을 허투로 쓴거같다.
현제 방향성을 정하고 왜 다른 길로 가려하는 지 이해가 안된다.
❌❌음식점 추가는 현제 계획한 로드맵에는 포함되지 않는다.❌❌
그러니 redux를 이용해 맛집의 정보를 관리하고 이를 불러오는 작업을 할 수 있게 구현하자

### 2️⃣ 맛집 리스트를 리스트 형식으로 볼 수 있는 컴포넌트 만들기
리스트를 지도 옆에 컴포넌트 생성 후 버튼 형식의 리스트 생성 후 각 버튼에 
선택한 맛집의 id를 Action의 파라미터로 넣은뒤 redux-thunk를 통해 비동기작업으로
해당 맛집의 위치 마커를 표시할 수 있도록 한다.
그렇다면 위에 Kakao Devtalk에서 제시한 예시를 이용해 
리렌더링 할 수 있는 로직을 작성해야한다.
우선적으로 해야할 것은 component/Map.js 코드에 props를 넣어주며
예시의 코드를 이용해 구현할 생각이다.
우선적으로 위의 목표를 이번주의 목표로 잡자.
오늘은 이번주 로드맵을 정리했다. 

### 22-07-27
오늘부터 2주간 동생이 휴가를 나와서 당분간은 제대로된 커밋은 힘들것 같다.....
컴퓨터가 한대뿐이라 코드 작성이 힘들거 같다....
일단 오늘 첫번째로 한것은 맵 옆에 리스트 구현을 위한 컴포넌트 구현이였다.
list를 받아와 map()을 이용해 각 요소마다 콜백함수를 적용하려했는데 콜백함수 적용시
{} 중괄호가 아닌 () 소괄호를 사용해야 했다.
ex) testArr.map(list => (...))

### 22-07-28
오늘도 동생이 컴퓨터를 하느라 별로 하지는 못했다....
새벽에 더 해야겠다...
일단 기본적인 레이아웃을 구성하는 작업을 했다.
새벽에 더 해야겠다.

### 22-07-30
내일 여행을 가기전에 레이아웃을 모두 완성해야되서 급하게 했다.
전채적으로 기본적인 컨샙으로 레이아웃을 짰다.
이제는 리스트의 요소를 클릭할 시 맵에서 해당 맛집의 마커 위치로
이동하는 기능을 만들고 리스트에서 스크롤을 할 수 있게 해야한다.
내일부터 모래까지 여행을 다녀온 뒤 다시 열심히 해야겠다...

### 22-08-02
어제 여행을 다녀오고 오늘 다시 프로젝트를 진행했다.
오늘 한 것은 맛집의 정보와 맛집을 선택시 해당 좌표로 이동시키는
기능을 구현하기 위해 store 구현 작업을 했다.
또한 레이아웃에 살짝의 변화를 주었다.
내일은 store에서 관리할 상태와 액션, 함수등을 작성해야겠다.

### 22-08-03
일단 오늘 동생 생일이므로 빠르게 코드 작성을 했다...
오늘 밤에도 추가적으로 할 수 있다면 할 예정이다.
store작업은 현제 module에서 하는 작업은 해뒀고 이제는
container와 component에서 연결을 해주고 test해보는 것이 다음 목표이다.
물론 첫번쩨 트라이에서 성공하지는 않겠지만 내 나름대로 빠르게 진행한것 같다.
이전에 책을 보며 해본 redux 프로젝트가 도움이 된다.

### 22-08-04
오늘도 짧지만 굵게 코드를 작성하려 노력했다.
우선 오늘 한 것은 어제 말한 것으로 test를 해봤지만 당연하게 에러가 났다.
첫번째 에러는 해결했지만 두번째 발생한 에러는 아직 해결을 못했다.
첫번째 에러는 Container에서 connect함수를 이용해 store에서 상태를 가져오는
곳에서 발생했다. 비구조화 할당을 통해 원하는 상태를 가져올 때는
그 상태 모듈의 이름을 적어 가져와야한는 것을 알게되었다.
무작정 임의의 파라미터 명을 할당하면 에러가 난다.
확실히 모듈들을 많이 사용하여 store를 구성하면 여러가지 상태들이 있을 텐데,
이름을 막 사용하면 코드가 꼬여버릴 것 같다.
내일은 두번째 발생한 에러(모듈에서 액션함수 동작에 대한)를 해결해 보자.

### 22-08-10
일주일동안 동생 휴가와 함께 우리 가족도 휴가 기간을 갖는 바람에
프로젝트 진행이 늦어졌다...
오늘 한 것은 store에서 state를 가져올 때 발생하는 에러를 고쳤다.
원인은 2가지가 있었다.
우선 변수, state명을 햇갈리게 선언하여 나 자신이 코드 작성에서 착각하고 코드를 작성한 것과
ListCategories.js에서 ListItem 컴포넌트의 onClick이벤트에 함수 타입이 아니라 객체 타입으로
전달된 함수를 바로 적용시켜서 에러가 나타났다. 이 에러는 onClick={() => onSelectLocation(info.id)}와 같은 형식으로 작성해주면 해결된다.
또한 비동기적으로 액션이 발생되지 않기에 store에서 state가
전달되는 state가 즉각 반영이 안되는거 같다.
내일은 될 수 있다면 두가지 작업을 하고싶다.
첫 번째, 비동기적으로 액션함수를 재구성하고,
두 번째, 이제 변화되는 state를 지도 컴포넌트에 전달하여 정보를 렌더링 하는 작업을 하고싶다.

### 22-08-11
오늘은 어제 계획했던 작업중 1개는 완료했고 1개는 중간까지 했다.
일단 useRef()를 사용하기 위해 설정만 해둔 상태로 마무리 지었다.
오늘 store작업을 마무리 한것 같은데 하면서 느끼점은
많은 state를 작업할 때는 지금 프로젝트에서 한 방법을 여러번 하면 된다고 생각하니
정확하고 정밀하게 연결을 해야한다고 생각했다.
내일은 알바를 하고 와서 될 수 있다면 Map 컴포넌트 작업을 조금이나마 해주도록 하자.

### 22-08-16
오늘은 일단 Map 컴포넌트 작업을 하려했지만 액션 함수와 같이 컴포넌트도 조금 손봤다.
근데 내가 원했던 기능이 구현되지 않았다.
Map 컴포넌트에 props로 들어가는 state.centerLoca의 상태가 변하면
useEffect에 의존성을 주입하여 선택한 맛집의 위치로 지도의 중심 위치를 옮기는 기능을 구현하고 싶다.
근데... 어째서 안되는지 도저히 모르겠어서 일단 사촌형에게 물어봤지만....
아직 답변이 없으므로 오늘은 여기까지 하자.
1시에 시작해서 10시10분에 마무리 한다.

### 22-08-17
오늘 코로나19에 양성판정이 났다.
몸상태 안좋아서 최대한 코드를 짜려 했는데 도저히 안되겠다.
당분간은 쉬어야겠다.
일단 오늘 작성한 코드는 useEffect가 의존성을 주입했음에도 불구하고 props가 변화됨에
따라 재실행이 안되는 문제를 고쳤다.
액션함수에서 centerLoca에 latlng을 할당 할 때 배열안에 펼침연산자로 선언해주니 되었다.
state값을 바꿀 때 불변성을 위해 펼침연산자를 이용한다는 것을 놓친거같다.
immer를 사용해도 될거같다.
암튼 오늘은 꽤 이른시간에 마무리 해야할거같다.
코로나 증상이 생각보다 힘들다.
당분간은 쉬어야할거같다.

### 22-08-18
지금까지 선택한 맛집으로 지도의 중심을 이동시키는 기능을 완성했다.
state 변경시 불변성의 유지와 useEffect의 의존성,
kakaoMap API 메서드의 사용법 등, 많은 문제가 있었다.
이제는 맛집 리스트 추가와 스타일을 손봐야겠다.

### 22-08-24
코로나 격리가 끝났다.
아직 아프긴 하지만 그래도 오래동안 쉴 수는 없기에 코드를 작성했다.
오늘 작성한 코드는 맛집 리스트의 목록을 스크롤 할 수 있게끔 한것과
react-virtualized 라이브러리를 이용한 컴포넌트 성능 최적화를 해줬다.
지금은 개인 프로젝트라 리스트의 길이가 짧으니 상관없겠지만,
프로젝트의 규모가 커지면 최적화가 필요할 수 있기에 한번 적용시켜봤다.
내일은 다시 style을 손보도록 해보자.
다른 문제가 눈에 보이면 그 문제를 해결하는데에 중점을 두자.
아직 목과 폐가 아프지만 프로젝트 진행과 운동을 다시 시작해야겠다.
화이팅!!!!🏋️‍♂️🏋️‍♂️

### 22-08-25
스타일을 손보는데 참 힘드네....
리스트들의 스타일에서 각 li들을 스크롤바에 겹치는 것과 서로 패딩, 마진이 겹치는 것이
어캐 해야할지 모르겠다.
일단 li 태그 안에 div 태그를 넣는 것으로 스크롤바와 겹치는 것은 막았지만,
이제는 div 태그의 크기를 일정하게 유지해야한다.
내일은 알바 갔다 와서 한번 해보자.

### 22-08-27
알바 후 너무 힘들어서 어제는 못했다.
오늘 스타일을 손을 보기로 했다.
반응형 웹을 만들기 위해 scss에서는 media query를 적용했고
컴포넌트에서는 useMediaQuery를 사용해서 반응형 웹을 만들기로 했다.
이제는 더 스타일에 집중해서 첫 프로젝트를 완성 시켜보자.

### 22-08-29
이제는 뭐 거의 끝난거 같다.
방금 하단 바를 만들었는데 넣기 애매해서 대충 만들거같다.
한달정도 되는 기간동안 나름 많은 것을 한거같다.
전문가의 눈에는 어떻게 보이는지 검수를 한번 부탁해볼 예정이다.