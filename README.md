# Servers
nomard Youtube Code Challenge 1

```
(1) import express from "express": Express 서버를 만들기 위해 express 모듈을 불러옵니다.

(2) const app = express()
    express()로 익스프레스 어플리케이션을 생성합니다.

(3) app.get("/", (req, res) => res.send("<h1>Home</h1>")): / url로 get 요청(request)을 보내면,
    그에 대한 응답으로 "<h1>Home</h1>"을 /로 보내어 HTML을 반환하는 GET 라우트입니다.

(3-1) app.get(path, callback)
    GET 메서드는 콜백 함수를 사용하여 지정된 경로로 HTTP GET 요청을 보냅니다.
    참고 링크
    따라서 각각의 경로(/, /about, /contact, /login)를 지정하여 GET 라우트를 작성하면 됩니다.
    
(3-2) res.send()
    HTML을 반환하기 위해, HTML을 보낼 수 있는 res.send() 응답 메서드를 사용합니다.
    참고 링크
    따라서 각각의 GET 라우트에 res.send(“<h1>태그</h1>”)를 사용하여 HTML을 보내면 됩니다.
  
(4) 동일한 방법으로 나머지 라우트도 작성합니다.
    app.get("/about", (req, res) => res.send("<h1>About</h1>"))
    app.get("/contact", (req, res) => res.send("<h1>Contact</h1>"))
    app.get("/login", (req, res) => res.send("<h1>Login</h1>"))
  
(5) app.listen(() => "Listening!✅")
    app.listen()을 사용하여 express 서버를 시작합니다.
    (참고) 보통 포트를 따로 설정하지만, 여기에서는 블루프린트로부터 임의의 미사용 포트를 할당받기 위해 포트를 생략했습니다.
```
