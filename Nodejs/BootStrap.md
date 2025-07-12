## 🎀 Bootstrap Documentation

Bootstrap is a powerful front-end CSS framework for building responsive and mobile-first web interfaces.

---

### 📦 Installation

#### 🔹 1. CDN (Quick Start)

Add this to your HTML `<head>`:

```html
<!-- Bootstrap 5 CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap 5 JS (Popper included) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

#### 🔹 2. NPM (For Build Tools)

```bash
npm install bootstrap
```

Then import it in your JavaScript entry point:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

---

### 📁 Project Structure Example

```bash
my-project/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── node_modules/
```

---

### 🎨 Common Bootstrap Classes

| Feature     | Class Example                | Description                      |
| ----------- | ---------------------------- | -------------------------------- |
| Grid System | `container`, `row`, `col`    | Responsive layout columns        |
| Typography  | `h1`, `text-center`, `lead`  | Headings, alignment, emphasis    |
| Spacing     | `m-3`, `p-2`, `mb-4`         | Margin & Padding utilities       |
| Buttons     | `btn`, `btn-primary`         | Styled buttons                   |
| Forms       | `form-control`, `form-label` | Input fields, checkboxes, labels |
| Alerts      | `alert alert-success`        | Colored alert messages           |
| Cards       | `card`, `card-body`          | Content boxes with shadows       |
| Navbars     | `navbar`, `navbar-expand-lg` | Top navigation bars              |
| Modals      | `modal`, `modal-dialog`      | Popup dialogs                    |

---

### 🔧 Components Quick Examples

#### ✅ Button

```html
<button class="btn btn-success">Click Me</button>
```

#### ✅ Alert

```html
<div class="alert alert-warning" role="alert">
  This is a Bootstrap alert!
</div>
```

#### ✅ Card

```html
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some quick example text.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

---

### 📚 Official Docs & Resources

| Resource            | Link 🔗                                                        |
| ------------------- | -------------------------------------------------------------- |
| 🔗 Bootstrap Docs   | [getbootstrap.com](https://getbootstrap.com)                   |
| 🔗 Bootstrap Icons  | [icons.getbootstrap.com](https://icons.getbootstrap.com)       |
| 🔗 Bootstrap GitHub | [github.com/twbs/bootstrap](https://github.com/twbs/bootstrap) |
| 🔗 Layout Examples  | [Examples Page](https://getbootstrap.com/docs/5.3/examples/)   |

---

### 📌 Notes

* Bootstrap 5 **does not require jQuery** 🎉
* Customize with SASS for advanced theming.
* Great with frameworks like React, Angular, Vue (via wrappers or class-based usage).

---

