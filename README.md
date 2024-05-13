# Google Apps Script (Web App) - Vue + Vite + TailwindCSS Template

## Instructions

-   Update the `scriptId` in `.clasp.json`. The script ID can be retrieved from your Apps Script project under `Project Settings`.
-   Update the `timeZone` in `dist/appscript.json` or copy the whole file from your project and replace the existing one. This file is hidden by default in an Apps Script project. To show it, go to your Apps Script project `Project Settings` and check `Show "appscript.json" manifest file in the editor`. The file will now show in the `Editor`.

Run:

```bash
# login to google to allow permissions
clasp login

# install dependencies
npm i

# build the project and push to your apps script project
npm run build:push
```