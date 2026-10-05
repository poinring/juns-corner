# React + Vite

## 배포

`main` 브랜치에 푸시하면 GitHub Actions가 GitHub Pages로 자동 배포합니다.

1. GitHub 저장소의 **Settings > Pages**에서 Source를 **GitHub Actions**로 선택합니다.
2. 최초 배포가 끝나면 `https://poinring.github.io/juns-corner/`에서 홈페이지를 확인합니다.

현재 설문 폼은 브라우저에서 입력을 확인하는 데모이며 이름과 연락처를 외부 서버로 전송하지 않습니다. 실제 상담 접수를 시작하기 전에는 개인정보처리방침, 보관 기간, 접근 권한을 정하고 HTTPS를 지원하는 서버리스 폼 또는 백엔드로 연결해야 합니다.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
