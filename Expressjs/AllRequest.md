## 📬 HTTP Request Methods in Express.js

Express makes it easy to handle HTTP requests like `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`. Here's a breakdown of each:

---

### ✅ 1. `GET` – **Read Data**

* **Purpose**: Fetch data from the server
* **Use case**: Load user profile, list of items, articles
* **Example**:

```js
app.get('/api/users', (req, res) => {
  res.json({ message: 'All users fetched' });
});
```

---

### 📝 2. `POST` – **Create Data**

* **Purpose**: Send data to the server to create a new resource
* **Use case**: User registration, adding a product
* **Example**:

```js
app.post('/api/users', (req, res) => {
  const user = req.body; // Must use express.json() middleware
  res.status(201).json({ message: 'User created', user });
});
```

> Don’t forget to use middleware:

```js
app.use(express.json()); // Parse JSON body
```

---

### 🔄 3. `PUT` – **Update/Replace Data**

* **Purpose**: Completely replace a resource with new data
* **Use case**: Update user profile or reset a password
* **Example**:

```js
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  res.json({ message: `User ${id} updated`, updatedData });
});
```

---

### ✏️ 4. `PATCH` – **Partially Update Data**

* **Purpose**: Update part of an existing resource
* **Use case**: Change only the user’s email or status
* **Example**:

```js
app.patch('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const patchData = req.body;
  res.json({ message: `User ${id} partially updated`, patchData });
});
```

---

### ❌ 5. `DELETE` – **Remove Data**

* **Purpose**: Delete a resource from the server
* **Use case**: Delete user, post, or item
* **Example**:

```js
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `User ${id} deleted` });
});
```

---

## 🧪 Sample Express Route File (`routes/userRoutes.js`)

```js
import express from 'express';
const router = express.Router();

router.get('/', getAllUsers);         // GET
router.post('/', createUser);         // POST
router.put('/:id', updateUser);       // PUT
router.patch('/:id', patchUser);      // PATCH
router.delete('/:id', deleteUser);    // DELETE

export default router;
```

---

## 🔐 Middleware Support

You can add middleware to handle:

* Authentication
* Validation
* Error handling

Example:

```js
app.post('/api/posts', verifyToken, validatePost, createPost);
```

---

## 🧾 Summary Table

| Method   | Purpose             | Action        | Express Example            |
| -------- | ------------------- | ------------- | -------------------------- |
| `GET`    | Read/Fetched data   | Retrieve      | `app.get('/route')`        |
| `POST`   | Create new data     | Insert        | `app.post('/route')`       |
| `PUT`    | Replace entire data | Update (full) | `app.put('/route/:id')`    |
| `PATCH`  | Update partial data | Update (part) | `app.patch('/route/:id')`  |
| `DELETE` | Remove data         | Delete        | `app.delete('/route/:id')` |

---

