- module 모듈 (서버)

1. 초기화 : npm init -y
2. 설치 : npm i parcel-bundler -D
3. type package.json

** 설정
  "main": "index.js", -> 삭제

  "scripts": {
    "dev": "parcel index.html",
    "build" : "parcel build index.html"
  },
//'

** 데이터 통신할때 사용 axios
- axios 설치
- npm i axios ( npm uninstall axios )
- pakage.json 에서 설치 확인 

"dependencies": {
    "axios": "^1.11.0"
  }

- js 

import axios from 'axios'; 
async - ( await ) test 하여 확인   


- dependencies (동작하는데 있어 반드시 의존)
- devDependencise (개발 의존성, 동작과 상관없음, 개발이 끝나면 버려지는,,,)

웹 - html, css, js만 읽는다. 그 외의 것들은 컴파일 해서 웹에서 읽을 수 있게 변환. 
예) scss, sass -> Compile -> css 로 변경되어 배포 

dist - html, css에 사용된 이미지는 자동 저장된다.
     - js 에 사용된 이미지는 자동 저장되지 않는다. (정적) (파비콘 favicon.io)
     - 수동복사
     - js ../images/ -> ./images => dist > images 폴더만들어줘야함 
     => build 해서 제품화 해주면 X



*** 정적파일자동복사
- 자동복사 => parcel plugin static files copy

"staticFiles": {
    "staticPath": [
      {
          "staticPath": "static",
          "staticOutDir": "."
      }, 
      {
          "staticPath": "src/images",
          "staticOutDir": "images"
      }
    ]
  }

//*************************************** 개발환경설정 ***************************************//

- 오토 프리픽스  : CSS 코드를 작성할 때 벤더 접두사(vendor prefixes)를 자동으로 추가해주는 도구
- 포스트CSS 플러그인 

npm i -D postcss
npm i -D autoprefixer

=> package.json
},
"browserslist" : [
    "> 1%",
    "last 2 versions"
  ]

=> root > .postcssrc.js 생성 (실행환경설정파일) ( .env ~ << 설정파일을 뜻한다. )
    -> autoprefixer plugin 

=> error (autoprefixer 와 postcss 버전의 차이로 에러날때) 
=>npm i -D autoprefixer@9 (9ver으로 설치)


* 바벨(Babel): 최신 버전의 js문법(ES6 등)을 컴퓨터에서 읽기 쉽게, 
이전 문법(구버전 ES5)으로 자동으로 컴파일링 

npm i -D @babel/core @babel/preset-env
( npm i -D @babel/plugin-transform-runtime )
-> 설치 후 pakage.json에서 설치 확인
-> root : .babelrc.js


*** UI/UX ***
- CLI
- GUI 
- NUI 신체동작(지문, 페이스아이디)
- MUI 메뉴기반동작

정적파일복사 (환경설정)
- parcel-plugin-static-files-copy / pakage.json -> staticPath
- vender prefixer (autoprefixer@9, postcss)
- babel


*** CLI 
(참고 : https://parcel.zcopy.site/ko/cli )

옵션 : 
public url 설정<br>
디렉토리 설정<br>
프로젝트 여러개 일 경우 port 

npm run build (build폴더 생성)

.gitignore 

git init ~ 










