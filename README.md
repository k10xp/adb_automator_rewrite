# ADB Automator Rewrite

Rewrite https://github.com/k10xp/adb-automator from Python to JavaScript ecosystem.

## Setup

Install dependencies before starting development or building:

```shell
npm install
```

## Development

Start the development server with hot reload:

```shell
npm run dev
```

### Tests

UI tests with playwright

Run following in separate terminals

1. run frontend only vite application

```shell
npm run dev:vite
```

2. run playwright tests

```shell
npx playwright test
```

## Build GUI application

Create a production build:

```shell
npm run dist
```

You need to replace `"icon": "placeholder.png"` with app icon image in `package.json`. Must be >= 256 x 256 pixels.

## Based on design

https://xd.adobe.com/view/eb2865f7-5495-422f-a7e5-3484c8594d38-be7b/screen/5318a4f5-bf87-4de2-a53c-579f341d4b8c
