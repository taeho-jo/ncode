# 목표

### 1. 피드목록 & 피드상세 페이지

### 2. 좋아요 & 좋아요 취소 기능

### 3. 임의 피드에 댓글 표시

### 4. facebook 링크 공유

# 사용기술

### React.js / mobX / styled-components

# Issue

### 1. mock data의 정보를 mobx에서 관리

#### data의 정보를 mobx에서 관리한 이유

- 피드목록 페이지에 접속하게 되면, mobx store에 피드와 댓글에 대한 data의 정보를 저장하게 된다.

- 실제 API통신을 하는 상황이 아니였고, 피드목록 페이지에서 피드상세 페이지를 이동할 때 상태 유지가 필요했기 때문입니다.

- 피드상세 페이지에서 좋아요를 눌렀을 때, 좋아요`(likedCount)`가 undefined라면 `likedCount` 칼럼을 추가하여야 했고, 기존에 `likedCount`가 있다면 `likedCount`가 +1이 되거나 -1이 되어야 한다. 그리고 피드목록 페이지로 돌아갔을 때, 좋아요가 눌러진 피드의 좋아요수가 표시되어야 한다.

#### hooks에서 mobx 사용하기

- class형 components에서 decorator를 사용할 수 있는데, hooks를 사용하였고, mobx에서 기본적으로 지원하는 `useObserver`를 이용하였다.

- mobx store를 최상위 index.js에서 provider를 이용하지 않고, store 자체를 import하여 사용하였다.

### 2. 피드목록 페이지에서 피드상세 페이지로의 이동

#### id를 이용하여 filter( )

- 피드목록에서 피드상세 페이지로 이동할 때, 해당 피드의 id를 넘겨주고, 같은 id인 피드의 데이터만 state로 따로 관리하게 한다.

### 3. 좋아요(likedCount)

#### likedCount의 undefined

- 기존에 좋아요가 없다면, likedCount는 undefined이다. 처음 랜더링 할 때에는, undefined라면 0, 기존에 likedCount가 있다면 해당 likedCount를 랜더링하게 한다.

- mobx store에 저장된 Data에서 좋아요의 상태를 알고 있어야 함으로 좋아요가 클릭되었을 때의 상태를 mobx store에서 관리한다.

- Data.like는 좋아요가 눌러져 있는 상태인지 아닌지 확인하는 컬럼이다. Data.like는 기존 mock data에 없는 칼럼이어서 만들어주었다.

- Data.like가 undefined 또는 false일 때, likedCount역시 undefined라면 likedCount와 like의 칼럼을 추가해주고, likedCount가 있다면 +1을 해주고 like를 true로 바꾼다. 기존에 좋아요가 눌러져 like가 있다면, likeCount에서 -1을 하고 like를 false로 바꾼다.

### 4. facebook shareLink

- facebook 공유하기 기능의 경우 `npm install react-facebook` 을 하여 구현하였다.
- window.location.herf를 이용하여 현재 페이지를 공유하려고 하였으나, localhost는 유효하지 않은 URL이라고하여, 포트롤리오 사이트를 공유할 수 있도록 설정하였습니다.
