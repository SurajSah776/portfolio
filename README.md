# Project Setup

## Frontend
(React + Tailwind CSS v4)
>1. Install React + Vite
```
npm create vite@latest frontend -- --template react
cd my-project
npm install
```

>2. Install Tailwind CSS v4
```
npm install -D tailwindcss @tailwindcss/vite
```

>3. Edit `vite.config.js` file
```
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
    tailwindcss(),
    ],
});
```

>4. Add Tailwind CSS directives to your main CSS file: `src/index.css`
```python
@import 'tailwindcss';
```

>5. Start the server
```python
npm run dev
```
---
