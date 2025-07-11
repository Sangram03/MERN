# 📚 MongoDB CMD Command Guide

MongoDB follows this structure:

> **MongoDB ➝ Databases ➝ Collections ➝ Documents ➝ Fields**

Sample document:

```json
{
  "_id": ObjectId("5fa80120e6f1eff7a1c9a6ec"),
  "deptName": "Marketing",
  "deptmanager": "Jacob",
  "deptrank": 3
}
```

---

## 🏁 Getting Started

### 🔸 Start MongoDB Shell

```bash
mongosh
```

---

## 🗃️ DATABASE COMMANDS

| Command             | Description                           |
| ------------------- | ------------------------------------- |
| `show dbs`          | List all databases                    |
| `use <dbname>`      | Switch to (or create) a database      |
| `db`                | Show the name of the current database |
| `db.dropDatabase()` | Delete the current database           |

---

## 📂 COLLECTION COMMANDS

| Command                                 | Description                        |
| --------------------------------------- | ---------------------------------- |
| `show collections`                      | List all collections in current DB |
| `db.createCollection("collectionName")` | Create a new collection            |
| `db.collection.drop()`                  | Delete a collection                |

---

## 📝 INSERT COMMANDS

### 🔹 Single Document

```js
db.dept.insertOne({
  deptName: "Marketing",
  deptmanager: "Jacob",
  deptrank: 3
})
```

### 🔹 Multiple Documents

```js
db.dept.insertMany([
  { deptName: "Sales", deptmanager: "Emily", deptrank: 2 },
  { deptName: "HR", deptmanager: "David", deptrank: 4 }
])
```

---

## 📖 READ COMMANDS

| Command                                 | Description                   |
| --------------------------------------- | ----------------------------- |
| `db.dept.find()`                        | Find all documents            |
| `db.dept.find().pretty()`               | Pretty-print results          |
| `db.dept.find({deptName: "Marketing"})` | Filter by condition           |
| `db.dept.findOne({deptrank: 2})`        | Find a single match           |
| `db.dept.countDocuments()`              | Count documents in collection |

---

## 🛠️ UPDATE COMMANDS

### 🔹 Update One Field

```js
db.dept.updateOne(
  { deptName: "Marketing" },
  { $set: { deptmanager: "Lucas" } }
)
```

### 🔹 Update Multiple Documents

```js
db.dept.updateMany(
  { deptrank: { $gt: 2 } },
  { $set: { status: "active" } }
)
```

---

## ❌ DELETE COMMANDS

| Command                                       | Description                          |
| --------------------------------------------- | ------------------------------------ |
| `db.dept.deleteOne({deptName: "Sales"})`      | Delete one matching document         |
| `db.dept.deleteMany({deptrank: { $gte: 3 }})` | Delete multiple documents            |
| `db.dept.remove({})`                          | ⚠️ Delete all documents (deprecated) |

---

## 🔍 QUERY OPERATORS

| Operator              | Use                   |
| --------------------- | --------------------- |
| `$gt`                 | Greater than          |
| `$lt`                 | Less than             |
| `$gte`                | Greater than or equal |
| `$lte`                | Less than or equal    |
| `$eq`                 | Equals                |
| `$ne`                 | Not equal             |
| `$in`                 | Match any in array    |
| `$or`, `$and`, `$not` | Logical queries       |

Example:

```js
db.dept.find({ deptrank: { $gt: 2 } })
```

---

## 📌 BONUS TIPS

* MongoDB creates a collection automatically when you insert the first document.
* Documents are stored in BSON (binary JSON) format.
* Every document has a unique `_id` field auto-generated if not provided.

---

