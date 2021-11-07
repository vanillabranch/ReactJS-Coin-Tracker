#ReactJS-Coin-Tracker


01.ReactJS Practice
-> 02.React-for-beginner
-> 03.ReactJS To Do List :)
-> 04.ReactJS-Coin-Tracker


is super cool
---------------------------------
is super cool

#1. 리액트js 샘플 웹 시작하기.

1. node.js 사이트가서 다운.  (nodejs.org)
   설치하고 윈도우 커맨드에서 node -v 있는지 체크.

2. npx체크하기
   cmd에서 npx -v 해서 버전나오면 설치성공

3. 샘플 프로젝트 생성
   cmd에서 npx create-react-app 내프로젝트명 (위치시킬 경로로 셋팅해야함. cd c:\users\desktop...처럼)

4. 개발툴에서 다운받아진 샘플 프로젝트를 열고나서 터미널에서 npm start를 해서 개발서버를 열어보자
   ( 개발툴 웹스톰에서 진행했음)

5. 그리고 소스트리에서 public에 index.html과, src안에 index.js파일등 소스 한번 둘러보자

6. 소스 파일 아무거나 수정해서 오토리로드 되는지도 보자 (서버가 올라왔으면 브라우저가 하나 떠있을거임)

7. 완전 바닥부터 시작하기 위해, 기초작업 해주기
   index.js 파일 에서 ▼
   import React from 'react';
   import ReactDOM from 'react-dom';
   import App from './App';

ReactDOM.render(
<React.StrictMode>
<App />
</React.StrictMode>,
document.getElementById('root')
);

이것만 남기고 다지우기

8. app.js파일에서도 위에 import다 제거(logo랑 css)
   그리고 리턴안에 div 기본태그 하나만 두기

9. 마지막으로 바닥부터 시작할거기 때문에 아래 파일들 다 삭제
   App.test.js
   App.css
   index.css
   logo.svg
   reportWebVitals.js
   setupTests.js

10. index.js랑 app.js만 남겨두기. 바닥부터 시작할 리액트앱의 초기설정 끝

※파일 날려버리고 수정 중간에 오류날수 있음.  그땐 브라우저 새로고침이나 npm restart 할것.

------------------------------------------------------------------------

#2. 만들어진 프로젝트 git으로 보내기
1. 먼저 git저장소에 가서 new repository 하나 만들기.
   readme.md추가 없이 그냥 단순하게 레파지토리 이름과 설명정도만 입력해서 생성

2. 생성이 완료되면 git 설정하는 설명 나오는데 다 무시하고 거기서 주소만 복사
   (이렇게 생긴 주소 https://github.com/vanillabranch/react-for-beginners.git)

3. 그 다음 개발툴로 와서 (웹스톰 사용했음) 터미널에서 아래 명령어들 순차적으로 실행.

4. git init

5. git remote add origin https://github.com/vanillabranch/movie_app_2021.git

6. git add .   <- 끝에 쩜 필수

7. git commit -m "commit message 적고싶은대로"

8. git push origin master

9. 여기까지 한 다음, 내 레파지토리로 가면 성공적으로 올라온것을 볼수 있음.

10. 이후 소스 수정할때마다, 6번부터 8번을 반복해주면 수정내용들을 꾸준히 커밋&푸시할수 있다.

11. 하지만 이건 새로운 브랜치를 따지 않고, 머지도 없고, 컨플릭트도 없는 단독으로 혼자서 할때나 가능한 얘기다.
    협업프로젝트시엔 git에 올리는 거 이후, 신규 브랜치, 머지, 컨플릭트 발생 처리등 다양하게 익혀야 한다.

※참고로 git에서 올려버렸거나, 다른 팀원이 올린건 최신으로 받기 위해선, git pull origin master 하면 된다.

------------------------------------------------------------------------
#3. PropType 설치방법(값이 할당되어야 할 타입과 필수여부 등 지정하기 위함.)
터미널 열고 npm i prop-types입력.
만약 오류나면, npm audit fix 를 한다, (보통 오류 보정을 위한 코드가 제시됨)

