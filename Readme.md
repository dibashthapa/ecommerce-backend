

---

## Starting development server

---

1. Create an .env directory in project root, and add following config

```
API_PORT=3000
MONGO_DB_URL=""
 // url for mongodb, for local do not add this, local url is fallback
in config
SECRET_TOKEN = "YOUR_JWT_SECRET_TOKEN"
JWT_EXPIRY = "Expiry in seconds , minute, days , hrs"
```

2. Start server in dev mode using
   > npm start
