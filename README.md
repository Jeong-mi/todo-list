# 원티드 프리온보딩 프론트엔드 선발과제 (Todo-list)

## 프로젝트의 실행 방법  

```
git clone https://github.com/Jeong-mi/wanted-pre-onboarding-fe.git
npm i
npm start
```

## 사용한 라이브러리

- react-router-dom
- styled-component/ tailwindcss
- axios  
- react-icons




## 과제
---

### :: 1. 로그인 / 회원가입
<img src="https://user-images.githubusercontent.com/56066290/186303305-d726872b-40b5-43c9-8e52-183c8082d33d.gif" width="400" height="600"/>

- ✅ `/` 경로에 로그인 / 회원가입 기능을 개발해주세요
  - ✅ 페이지 안에 이메일 입력창, 비밀번호 입력창, 제출 버튼이 포함된 형태로 구성해주세요
  - ✅ 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다.

#### Assignment1
<img src="https://user-images.githubusercontent.com/56066290/186304749-070824fe-1025-4701-b235-47fe11c4bf78.gif" width="400" height="600" />

- ✅ 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
  - ✅ 이메일 조건: `@` 포함
  - ✅ 비밀번호 조건: 8자 이상
  - ✅ 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요
  - ✅ 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.

#### Assignment2
<img src="https://user-images.githubusercontent.com/56066290/186307171-fee94c9e-c8fc-4bdd-8214-8399ab316aec.gif" width="600" height="600" />

- ✅ 로그인 API를 호출하고, 올바른 응답을 받았을 때 `/todo` 경로로 이동해주세요
  - ✅ 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - ✅ 응답받은 JWT는 로컬 스토리지에 저장해주세요

#### Assignment3
<img src="https://user-images.githubusercontent.com/56066290/186308040-dc82d940-e2a3-466b-95ef-ca660bac93b0.gif" width="600" height="600" />

- ✅ 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
  - ✅ 로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
  - ✅ 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/` 경로로 리다이렉트 시켜주세요

---

### :: 2. 투두 리스트

#### Assignment4
<img src="https://user-images.githubusercontent.com/56066290/186309197-29e416f1-13c6-4da5-a53d-baabcf70a790.gif" width="600" height="600" />

- ✅ `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- ✅ 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
- ✅ 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요

#### Assignment5
<img src="https://user-images.githubusercontent.com/56066290/186309666-25537370-03b5-4ca3-bd70-b050156ad87e.gif" width="600" height="600" />

- ✅ 투두 리스트의 수정, 삭제 기능을 구현해주세요
  - ✅ 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요
  - ✅ 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 해주세요
  - ✅ 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세요

### 서버 API

- API 주소: https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/
