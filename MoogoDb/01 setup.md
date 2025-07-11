## 📦 MongoDB Command Line Reference (CMD)

MongoDB organizes data in this hierarchy:

> **MongoDB ➝ Databases ➝ Collections ➝ Documents ➝ Fields**

Example document:

```json
{
  "_id": ObjectId("5fa80120e6f1eff7a1c9a6ec"),
  "deptName": "Marketing",
  "deptmanager": "Jacob",
  "deptrank": 3
}
```

---

### ⚙️ Getting Started

#### 🖥️ Open CMD & Start Mongo Shell

```bash
# Open command prompt and enter MongoDB shell
mongosh
```

---

### 🗂️ DATABASE COMMANDS

```bash
show dbs                     # Show all databases
use employees                # Switch to (or create) 'employees' database
db                           # Show current database name
```

---

### 📁 COLLECTION COMMANDS

```bash
show collections             # List all collections in the current DB
db.createCollection("dept")  # Create a new collection called "dept"
```

---

### 📝 CRUD OPERATIONS

#### ✅ CREATE

```bash
db.dept.insertOne({
  deptName: "Marketing",
  deptmanager: "Jacob",
  deptrank: 3
})
```

#### 📖 READ

```bash
db.dept.find()                       # Get all documents
db.dept.find().pretty()             # Get all documents (formatted)
db.dept.find({deptName: "Marketing"})  # Find with filter
```

#### 🔄 UPDATE

```bash
db.dept.updateOne(
  { deptName: "Marketing" },
  { $set: { deptmanager: "Lucas" } }
)
```

#### ❌ DELETE

```bash
db.dept.deleteOne({ deptName: "Marketing" })  # Delete one document
```

---

### 🧪 EXTRA COMMANDS

```bash
db.dept.countDocuments()           # Count documents in a collection
db.dept.drop()                     # Drop (delete) the entire collection
db.dropDatabase()                  # Drop the entire database
```

---

### 📌 Notes

* Every document has a unique `_id` field by default.
* MongoDB is **schema-less**, allowing flexible document structure.
* Make sure MongoDB service is running before using `mongosh`.

---
