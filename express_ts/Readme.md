# 🚀 Node.js + TypeScript (Clean Professional Minimal Setup)

## 📁 1. Create Project

```bash
npm init -y
```

---

## 📦 2. Install Dependencies (LOCAL only)

```bash
npm install -D typescript ts-node @types/node nodemon rimraf
```

---

## ⚙️ 3. Initialize TypeScript

```bash
npx tsc --init
```

---

## 🧠 4. Configure `tsconfig.json`

Replace content with:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "skipLibCheck": true
  }
}
```

---

## 📁 5. Folder Structure

```text
node-ts-clean/
 ├── src/
 │    └── index.ts
 ├── dist/
 ├── package.json
 └── tsconfig.json
```

---

## ✍️ 6. Sample Code

### `src/index.ts`

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("Aman"));
```

---

## to add clean script

- `npm install -D rimraf`

## 📜 7. Scripts (IMPORTANT)

Update `package.json`:

```json
"scripts": {
  // "dev": "ts-node src/index.ts",
  // "dev": "nodemon --exec ts-node src/index.ts",
  // "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
  // "dev": "node --loader ts-node/esm src/index.ts"
  "build": "tsc",
  "start": "node dist/index.js",
  "clean": "rimraf dist"
}
```

---

## ▶️ 8. Run Project

### Development (fast)

```bash
npm run dev
```

### Production Flow

```bash
npm run build
npm start
```

---

## 🧩 Key Principles

- ✅ No global installs (reproducible)
- ✅ `src` → source code
- ✅ `dist` → compiled output
- ✅ `ts-node` only for dev
- ✅ Node runs compiled JS in production

---

## ⚠️ Notes

- Use Node ≥ 18 (recommended)
- Never deploy `.ts` files directly
- Keep project dependency versions locked

---

## ✅ Minimal Yet Professional

This setup is:

- ✔ Clean (only essential files)
- ✔ Scalable (can grow anytime)
- ✔ Interview-ready
- ✔ Production-safe foundation

---
