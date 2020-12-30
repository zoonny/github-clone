# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Issue

vscode format on save prettier not working

> https://github.com/microsoft/vscode/issues/108447

# Media Query

- @media

```css
@media 미디어타입 and (미디어특성) {
    css 코드
}

/* screen - 일반적인 화면 */
/* max-width: 1200px 일때까지 color red 적용  */
@media screen and (max-width: 1200px) {
    body {
        color: red;
    }
}
```

- 미디어타입
  - all: 모든 미디어타입에 적용 (screen, print both), 기본값
  - screen: 컴퓨터화면, 타블렛, 스마트폰 등
  - print: 인쇄 전용
- 미디어특성
  - width
  - max-width: 최대 가로너비 이하
  - min-width: 최소 가로너비 이상
  - height
  - max-height: 최대 세로너비 이하
  - min-height: 최소 세로너비 이상
    orientation: 뷰포트 방향 (portrait: 세로가 긴 상태, landscape: 가로가 긴 상태)
