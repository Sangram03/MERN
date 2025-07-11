## 🔄 Nodemon Setup & Usage

### 📌 What is Nodemon?

[Nodemon](https://github.com/remy/nodemon) is a utility that monitors for file changes in your Node.js application and automatically restarts the server — improving your development workflow.

---

### 🧰 Installation

#### 🔹 Local (Recommended)

```bash
npm install --save-dev nodemon
```

#### 🔹 Global (Optional)

```bash
npm install -g nodemon
```

---

### 🚀 Usage

#### 📁 Basic Run

```bash
npx nodemon index.js
```

If installed globally:

```bash
nodemon index.js
```

---

### 📄 Add Script in `package.json`

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Then run:

```bash
npm run dev
```

---

### ⚙️ Custom Configuration (Optional)

Create a `nodemon.json` file for custom settings:

```json
{
  "watch": ["server", "routes"],
  "ext": "js,json",
  "ignore": ["node_modules"],
  "exec": "node index.js"
}
```

---

### 📌 Benefits

* Hot reload on code change
* Works with any Node.js app
* Can watch specific folders or file types

---

### 📁 Example Project Structure

```
project-root/
├── index.js
├── package.json
├── nodemon.json (optional)
├── routes/
│   └── api.js
└── .gitignore
```

---

```bash
npm install --save-dev nodemon
```

---

## 🔍 Breakdown of the Command

| Part         | Meaning                                                           |
| ------------ | ----------------------------------------------------------------- |
| `npm`        | Node Package Manager – used to manage packages in Node.js         |
| `install`    | Command to install a package                                      |
| `--save-dev` | Saves the package as a development dependency (`devDependencies`) |
| `nodemon`    | The package being installed – Nodemon                             |

---

## 📦 What Does It Do?

This command installs **Nodemon** **locally** in your project and saves it under `devDependencies` in your `package.json` file.

### Example:

After running the command, your `package.json` will include:

```json
"devDependencies": {
  "nodemon": "^3.0.2"
}
```

---

## 🎯 Why Use `--save-dev`?

You should use `--save-dev` when the package is **only needed during development**, not in production.

✅ `nodemon` is used to restart your server automatically **during development** — so it's best kept out of production builds.

---

## 🛠️ How to Use It After Installation

### Add to Scripts in `package.json`:

```json
"scripts": {
  "dev": "nodemon index.js"
}
```

### Then run:

```bash
npm run dev
```


---
To **uninstall Nodemon**, you can use one of the following commands based on how you installed it.

---

## 🔧 Uninstall Nodemon

### 1. 📦 If Installed as a Dev Dependency (Local)

```bash
npm uninstall --save-dev nodemon
```

This will:

* Remove `nodemon` from your `node_modules`
* Remove it from the `devDependencies` section of your `package.json`

---

### 2. 🌍 If Installed Globally

```bash
npm uninstall -g nodemon
```

This removes `nodemon` from your system’s global packages (so `nodemon` won’t be available via terminal globally).

---

## ✅ To Verify Removal

### 🔹 Local Check

Make sure it's no longer in `devDependencies` in `package.json`.

### 🔹 Global Check

Run:

```bash
nodemon --version
```

If it's uninstalled globally, this will show an error like:

```
command not found: nodemon
```

---



