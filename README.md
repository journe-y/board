<div style="width:100%; display:flex;">
<div style="width:50%; flex-grow:1; padding-right:10px; border-right: 1px gray solid;">

## ToyBoard(FE)
- - -
### 🎁 Installation
```
 git clone https://github.com/journe-y/board.git
 cd f-board
 npm install
 npm run serve
```
<br/>

### ✨ Skill

- - -

 <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D">

 <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">

 <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">

<br/>

### 🎈 Demo
- - -
See [ToyBoard](https://journe-y.github.io/board/).

<br/>

### 🧩 ComponentStructure
- - -
![f-board-structure](https://user-images.githubusercontent.com/55824443/156686489-0c80c105-e6bb-462c-945f-0a4f122c3cdd.JPG)


</div>
<div style="width:50%; flex-grow:1; padding-left:10px;">

## ToyBoard(BE)
- - -
### 🎁 Installation
```
 git clone https://github.com/journe-y/board.git
 cd b-board
 npm install
 npm run serve
```
<br/>

### ✨ Skill

- - -
 <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">

 <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/Sequelize-404D59?style=for-the-badge">

  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"> <img src="https://img.shields.io/badge/ClearDB-404D59?style=for-the-badge"> <img src="https://img.shields.io/badge/Cloudinary-404D59?style=for-the-badge">

<br/>

### 🌎 APIs
- - -
 + 사용자
 > 회원가입 ➡ POST /auth/register

 > body

|Field|Type|Description|
|------|---|---|
|userid|string|사용자 아이디|
|userpw|string|사용자 비밀번호|

> 로그인 ➡ POST /auth/login

> body

|Field|Type|Description|
|------|---|---|
|userid|string|사용자 아이디|
|userpw|string|사용자 비밀번호|
<br/>

- - -
<br/>
<br/>

+ 게시글
> 게시글 등록 ➡ POST /post/create

> body · headers

|Field|Type|Description|
|------|---|---|
|authorization|string|사용자 인증 토큰|
|title|string|게시글 제목|
|contents|string|게시글 내용|
|category|string|게시글 카테고리|
|imgpath|string|게시글 메인 이미지|

> 게시글 목록 ➡ GET /post/list

|Field|Type|Description|
|------|---|---|
|none|none|none|

> 게시글 단건 조회 ➡ GET /post/read/{ id }

> parameters

|Field|Type|Description|
|------|---|---|
|:id|number|게시글 아이디|

> 게시글 수정 ➡ POST /post/modify/{ id }

> body · headers · parameters

|Field|Type|Description|
|------|---|---|
|authorization|string|사용자 인증 토큰|
|:id|number|게시글 아이디|
|title|string|게시글 제목|
|contents|string|게시글 내용|
|category|string|게시글 카테고리|
|imgpath|string|게시글 메인 이미지|

> 게시글 삭제 ➡ POST /post/delete/{ id }

> headers · parameters

|Field|Type|Description|
|------|---|---|
|authorization|string|사용자 인증 토큰|
|:id|number|게시글 아이디|


</div>
</div>