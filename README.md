<div style="width:100%; display:flex;">
<div style="width:50%; flex-grow:1; padding-right:10px; border-right: 1px gray solid;">

## ToyBoard(FE)
- - -
### π Installation
```
 git clone https://github.com/journe-y/board.git
 cd f-board
 npm install
 npm run serve
```
<br/>

### β¨ Skill

- - -

 <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D">

 <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">

 <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">

<br/>

### π Demo
- - -
See [ToyBoard](https://journe-y.github.io/board/).

<br/>

### π§© ComponentStructure
- - -
![f-board-structure](https://user-images.githubusercontent.com/55824443/156686489-0c80c105-e6bb-462c-945f-0a4f122c3cdd.JPG)


</div>
<div style="width:50%; flex-grow:1; padding-left:10px;">

## ToyBoard(BE)
- - -
### π Installation
```
 git clone https://github.com/journe-y/board.git
 cd b-board
 npm install
 npm run serve
```
<br/>

### β¨ Skill

- - -
 <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">

 <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/Sequelize-404D59?style=for-the-badge">

  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"> <img src="https://img.shields.io/badge/ClearDB-404D59?style=for-the-badge"> <img src="https://img.shields.io/badge/Cloudinary-404D59?style=for-the-badge">

<br/>

### π APIs
- - -
 + μ¬μ©μ
 > νμκ°μ β‘ POST /auth/register

 > body

|Field|Type|Description|
|------|---|---|
|userid|string|μ¬μ©μ μμ΄λ|
|userpw|string|μ¬μ©μ λΉλ°λ²νΈ|

> λ‘κ·ΈμΈ β‘ POST /auth/login

> body

|Field|Type|Description|
|------|---|---|
|userid|string|μ¬μ©μ μμ΄λ|
|userpw|string|μ¬μ©μ λΉλ°λ²νΈ|
<br/>

- - -
<br/>
<br/>

+ κ²μκΈ
> κ²μκΈ λ±λ‘ β‘ POST /post/create

> body Β· headers

|Field|Type|Description|
|------|---|---|
|authorization|string|μ¬μ©μ μΈμ¦ ν ν°|
|title|string|κ²μκΈ μ λͺ©|
|contents|string|κ²μκΈ λ΄μ©|
|category|string|κ²μκΈ μΉ΄νκ³ λ¦¬|
|imgpath|string|κ²μκΈ λ©μΈ μ΄λ―Έμ§|

> κ²μκΈ λͺ©λ‘ β‘ GET /post/list

|Field|Type|Description|
|------|---|---|
|none|none|none|

> κ²μκΈ λ¨κ±΄ μ‘°ν β‘ GET /post/read/{ id }

> parameters

|Field|Type|Description|
|------|---|---|
|:id|number|κ²μκΈ μμ΄λ|

> κ²μκΈ μμ  β‘ POST /post/modify/{ id }

> body Β· headers Β· parameters

|Field|Type|Description|
|------|---|---|
|authorization|string|μ¬μ©μ μΈμ¦ ν ν°|
|:id|number|κ²μκΈ μμ΄λ|
|title|string|κ²μκΈ μ λͺ©|
|contents|string|κ²μκΈ λ΄μ©|
|category|string|κ²μκΈ μΉ΄νκ³ λ¦¬|
|imgpath|string|κ²μκΈ λ©μΈ μ΄λ―Έμ§|

> κ²μκΈ μ­μ  β‘ POST /post/delete/{ id }

> headers Β· parameters

|Field|Type|Description|
|------|---|---|
|authorization|string|μ¬μ©μ μΈμ¦ ν ν°|
|:id|number|κ²μκΈ μμ΄λ|


</div>
</div>