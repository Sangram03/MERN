## 📝 MongoDB Insert Commands

### ✅ `insertOne()` – Insert a Single Document

```js
db.dept.insertOne({
  deptName: "Marketing",
  deptmanager: "Jacob",
  deptrank: 3
})
```

### ✅ `insertMany()` – Insert Multiple Documents

```js
db.dept.insertMany([
  {
    deptName: "Sales",
    deptmanager: "Emily",
    deptrank: 2
  },
  {
    deptName: "HR",
    deptmanager: "David",
    deptrank: 4
  },
  {
    deptName: "Tech",
    deptmanager: "Aisha",
    deptrank: 1
  }
])
```

---

### 📌 Notes:

* These commands go inside the **Mongo shell (`mongosh`)** after connecting.
* If the `dept` collection doesn't exist, MongoDB creates it automatically on first insert.

Let me know if you want to include auto-generated `_id` examples or Mongoose (Node.js) versions too.
