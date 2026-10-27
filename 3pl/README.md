# GODEAT 3PL 앱 설치용 껍데기 (PWA)

- 공개 주소: https://hmkim-dev.github.io/3pl/  (GitHub 사용자 사이트 저장소 `hmkim-dev/hmkim-dev.github.io` 의 `3pl/` 폴더, 계정 hmkim@godeat.co.kr)
- 구조: `index.html`(구글 웹앱 /exec 를 iframe 으로 전체 화면) + `manifest.webmanifest` + `sw.js` + 아이콘 3종.
- **같은 도메인에 앱이 셋(구매ㆍSCM `godeat-app`, 음·주류 `/liquor/`, 3PL `/3pl/`)이라 manifest `id`·`start_url`·`scope`·icons 를 전부 `/3pl/` 절대 경로로 두고, sw.js 의 CACHE 이름도 `godeat-3pl-*` 로 분리한다.** `"id": "./"` 처럼 상대값을 쓰면 origin 으로 풀려 다른 앱과 합쳐진다(2026-10-27 주류 앱에서 겪은 문제).
- 아이콘 원본: `구매팀 ai 관련 업무\아이콘\갓잇아이콘_물류관리.png`(2048px). 생성: jimp(`주류원장_통합/node_modules/jimp`)로 중앙 정사각 크롭 → 512/192, maskable 은 80% 축소 + 파란 배경. 아이콘을 바꾸면 파일명 v1→v2, manifest·index·sw 의 참조와 CACHE 이름을 함께 올린다.
- 배포: 이 폴더 내용을 저장소 `3pl/` 에 복사 → `git add/commit/push` (gh CLI hmkim-dev 로그인). GitHub Pages 반영까지 1~2분.
- 설치: 휴대폰/PC 브라우저로 위 주소 접속 → 하단 "설치" 또는 브라우저 메뉴 "홈 화면에 추가". 앱 안 화면은 구글 서버의 최신 배포본이 그대로 뜬다(앱 재설치 불필요).
