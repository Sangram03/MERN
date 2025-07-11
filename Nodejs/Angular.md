## ⚡ Angular CLI – Download & Command Guide

Angular CLI is a powerful command-line tool to create, build, test, and manage Angular applications efficiently.

---

### 📦 Install Angular CLI

#### 🔹 Global Installation

```bash
npm install -g @angular/cli
```

This installs Angular CLI globally so you can use the `ng` command anywhere.

---

### ✅ Verify Installation

```bash
ng version
```

You'll see version details for Angular CLI and dependencies.

---

### 🚀 Create a New Angular App

```bash
ng new my-angular-app
```

You'll be prompted to choose options like routing and CSS style (CSS, SCSS, etc.)

Then navigate to the app:

```bash
cd my-angular-app
```

---

### 🧠 Useful Angular CLI Commands

| Command                        | Description                                                                      |
| ------------------------------ | -------------------------------------------------------------------------------- |
| `ng serve`                     | Run development server (default: [http://localhost:4200](http://localhost:4200)) |
| `ng build`                     | Build the application for production                                             |
| `ng generate component <name>` | Create a new component                                                           |
| `ng generate service <name>`   | Create a new service                                                             |
| `ng generate module <name>`    | Create a new module                                                              |
| `ng generate class <name>`     | Create a new class                                                               |
| `ng lint`                      | Run linter                                                                       |
| `ng test`                      | Run unit tests                                                                   |
| `ng e2e`                       | Run end-to-end tests                                                             |
| `ng add <package>`             | Install and configure a library (e.g., Angular Material)                         |
| `ng update`                    | Update Angular and dependencies                                                  |

---

### 🧰 Install CLI Locally (Optional)

```bash
npm install @angular/cli --save-dev
```

You can then run it locally using:

```bash
npx ng <command>
```

---

### 📁 Basic Angular Project Structure

```
my-angular-app/
├── src/
│   ├── app/
│   ├── assets/
│   └── index.html
├── angular.json
├── package.json
└── tsconfig.json
```

---

