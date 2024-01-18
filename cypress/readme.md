# Component Testing

Testing component: DebounceTextField
TODO: Custom hooks and Stub Function

## Should

<https://docs.cypress.io/api/commands/should>

## Assertions

<https://docs.cypress.io/guides/references/assertions#Sinon-Chai>

## Type

<https://docs.cypress.io/api/commands/type>

## Stub

<https://docs.cypress.io/api/commands/stub>
<https://docs.cypress.io/guides/guides/stubs-spies-and-clocks>

## Select File

<https://docs.cypress.io/api/commands/selectfile>

## Tick and Wait

<https://www.nutshell.work/differences-between-tick-and-wait-in-cypress/>

---

Testing component: cost-calculation
TODO: Custom hooks and Intercepter

## Assertions

<https://docs.cypress.io/guides/references/assertions#Sinon-Chai>

## Type

<https://docs.cypress.io/api/commands/type>

## Intercept

<https://docs.cypress.io/api/commands/intercept>

---
Testing component: download-state
TODO: Create Mocks next Image

## Create Mocks next Image

1. install webpack

```bash
npm i -D webpack
```

2. add cypress.config.ts

```js
webpackConfig: {
  plugins: [
    new NormalModuleReplacementPlugin(
      /next\/image/,
      require.resolve(path.join(__dirname, 'cypress', 'mocks', 'next', 'image'))
    )
  ]
}
```

3. create mock image

```text
cypress/mocks/next/image
```

> การเก็บภาพ (หรือไฟล์สื่ออื่น ๆ) ในโปรเจกต์ Next.js มีความแตกต่างระหว่างการเก็บไว้ที่ public กับการเก็บไว้ที่ src/image ในทางทฤษฎีและการใช้งานทั่วไป:
> เก็บที่ public:
> ไฟล์ที่เก็บในโฟลเดอร์ public จะถูกเข้าถึงได้โดยตรงจาก URL หลักของเว็บไซต์ (root URL) โดยไม่ต้องผ่านระบบ Module.
> เช่นถ้ามีไฟล์ชื่อ image.jpg ใน public สามารถเข้าถึงได้ผ่าน URL เช่น /image.jpg.
> การใช้งานที่สะดวกสบายและไม่ต้องผ่านการประมวลผลเพิ่มเติม.
>
> เก็บที่ src/image:
> การเก็บไว้ในโฟลเดอร์ src หรือ src/image นั้นถือเป็นส่วนหนึ่งของโค้ดและไฟล์ที่ต้องผ่านการ bundling ด้วยระบบ Module (Webpack, etc.) เพื่อให้สามารถนำเข้าและใช้ได้.
> การนำเข้าไฟล์ในโค้ดจะต้องผ่านระบบ Module และการใช้ URL ที่สร้างขึ้นจากระบบ Module.
> มีประสิทธิภาพสูงขึ้นในการจัดการไฟล์และการให้ความยืดหยุ่นในการแก้ไข.

4. move image to public
5. change import image to images lists
