# 코드스테이츠 EXP Frontend engineer 사전 과제
째깍이 기능 구현

## 실행 방법
```
npm install
npm run dev
또는
npm run start
```
localhost:3000 에서 작동합니다.

## 필수 구현 사항
### 1️⃣ 째깍이 기능
![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/61301574/202917958-6e9a5dae-905e-4194-96d5-01108c184b2f.gif)

## 추가 구현 사항
### 1️⃣ 째깍이 오늘 출결 내역 보기
![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/61301574/202918305-bdd7f2d7-6b5d-4a2a-8aaa-38a313b1556f.gif)

### 2️⃣ 유어클래스 기본 페이지 목업
<img width="1499" alt="스크린샷 2022-11-21 오전 2 44 38" src="https://user-images.githubusercontent.com/61301574/202917589-2a8b7414-0d80-47cb-bf6f-34efe4dc7a7d.png">
<img width="1499" alt="스크린샷 2022-11-21 오전 2 44 41" src="https://user-images.githubusercontent.com/61301574/202917595-74b413d2-40c4-4077-bd5c-c286c475f29b.png">

### 3️⃣ 마이페이지
<img width="1499" alt="스크린샷 2022-11-21 오전 2 44 46" src="https://user-images.githubusercontent.com/61301574/202917596-3b68600a-2d6e-434d-b3a2-fd62ca953c2a.png">


## 기술 스택
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/>
 

## 파일 구조
```
/apiRequest // axios 요청 함수 모듈 모음
/components // 각 종 컴포넌트 모음
/pages  // 라우트되는 페이지 모음
└───api/ // 서버 구현
    └───data // 유저 데이터 및 마이페이지 데이터
    │   checkin.js  // 입퇴실 요청
    │   userdata.js // 유저 정보 요청
│_app.js   // 상태 관리 및 기본 페이지 레이아웃
...
/styles // css 모듈 모음
...
```

## 주요 기능 구현 방법

* 째깍이 기능
    * Next.js 에서 제공하는 서버 기능 활용
    * localhost:3000/userdata 로 axios GET 요청을 보낼 시 유저 데이터 보내주도록 동작
        * 유저 데이터(유저 이름, 입퇴실 상태)에 따라 째깍이 아이콘 및 모달 상태 조건부 렌더링
    * localhost:3000/checkin 으로 axios POST 요청을 보낼 시 입, 퇴실 여부 및 시간이 기록 되도록 동작
        * 오늘 출결 내역 보기를 클릭하면 출결 시간이 나열되도록 구현

* 기본 페이지 목업 (메인 화면, 수강 중인 코스)
    * JsonPlaceHolder로 axios 요청을 통해 포스트 목업 데이터 받아와서 구현


