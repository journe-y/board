## ToyBoard(BE)
- - -
### ๐ Installation
```
 git clone https://github.com/journe-y/board.git
 cd b-board
 npm install
 npm run serve
```
<br/>

### โจ Skill

- - -
 <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">

 <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/Sequelize-404D59?style=for-the-badge">

  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"> <img src="https://img.shields.io/badge/ClearDB-404D59?style=for-the-badge"> <img src="https://img.shields.io/badge/Cloudinary-404D59?style=for-the-badge">

<br/>

### ๐ APIs
- - -
 + ์ฌ์ฉ์
 > ํ์๊ฐ์ โก POST /auth/register

 > body

|Field|Type|Description|
|------|---|---|
|userid|string|์ฌ์ฉ์ ์์ด๋|
|userpw|string|์ฌ์ฉ์ ๋น๋ฐ๋ฒํธ|

> ๋ก๊ทธ์ธ โก POST /auth/login

> body

|Field|Type|Description|
|------|---|---|
|userid|string|์ฌ์ฉ์ ์์ด๋|
|userpw|string|์ฌ์ฉ์ ๋น๋ฐ๋ฒํธ|
<br/>

- - -
<br/>
<br/>

+ ๊ฒ์๊ธ
> ๊ฒ์๊ธ ๋ฑ๋ก โก POST /post/create

> body ยท headers

|Field|Type|Description|
|------|---|---|
|authorization|string|์ฌ์ฉ์ ์ธ์ฆ ํ ํฐ|
|title|string|๊ฒ์๊ธ ์ ๋ชฉ|
|contents|string|๊ฒ์๊ธ ๋ด์ฉ|
|category|string|๊ฒ์๊ธ ์นดํ๊ณ ๋ฆฌ|
|imgpath|string|๊ฒ์๊ธ ๋ฉ์ธ ์ด๋ฏธ์ง|

> ๊ฒ์๊ธ ๋ชฉ๋ก โก GET /post/list

|Field|Type|Description|
|------|---|---|
|none|none|none|

> ๊ฒ์๊ธ ๋จ๊ฑด ์กฐํ โก GET /post/read/{ id }

> parameters

|Field|Type|Description|
|------|---|---|
|:id|number|๊ฒ์๊ธ ์์ด๋|

> ๊ฒ์๊ธ ์์  โก POST /post/modify/{ id }

> body ยท headers ยท parameters

|Field|Type|Description|
|------|---|---|
|authorization|string|์ฌ์ฉ์ ์ธ์ฆ ํ ํฐ|
|:id|number|๊ฒ์๊ธ ์์ด๋|
|title|string|๊ฒ์๊ธ ์ ๋ชฉ|
|contents|string|๊ฒ์๊ธ ๋ด์ฉ|
|category|string|๊ฒ์๊ธ ์นดํ๊ณ ๋ฆฌ|
|imgpath|string|๊ฒ์๊ธ ๋ฉ์ธ ์ด๋ฏธ์ง|

> ๊ฒ์๊ธ ์ญ์  โก POST /post/delete/{ id }

> headers ยท parameters

|Field|Type|Description|
|------|---|---|
|authorization|string|์ฌ์ฉ์ ์ธ์ฆ ํ ํฐ|
|:id|number|๊ฒ์๊ธ ์์ด๋|

