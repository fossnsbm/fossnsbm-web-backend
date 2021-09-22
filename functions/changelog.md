# added endpoints 

### View all events 

- shoud make this a priv route 

```
http://localhost:5001/fossnsbm-e4ff9/us-central1/events/all

```

response 

```json

[
    "mnga4Gvfvu4X194ONTxI",
    {
        "date": {
            "_seconds": 1632378600,
            "_nanoseconds": 0
        },
        "talker ": "john doe",
        "topic": "anime ",
        "isPublic": true,
        "name": "event1"
    },
    "name",
    {
        "isPublic": true,
        "name": "name",
        "talker": "jonny boy",
        "topic": "topic",
        "date": "12:00:00 PM"
    },
    "test",
    {
        "topic": "updated",
        "name": "updated",
        "date": "12:00:00 PM",
        "talker": "jonny boy",
        "isPublic": true
    }
]

```

---

### Get all users

```
http://localhost:5001/fossnsbm-e4ff9/us-central1/api/users
```

- all users

```json

{
    "users": [
        {
            "uid": "bLimReUUnjSRcSYVw1vijXRihXE3",
            "email": "dasith@dasith.local",
            "displayName": "",
            "role": "",
            "lastSignInTime": null,
            "creationTime": "Wed, 22 Sep 2021 07:32:35 GMT"
        },
        {
            "uid": "vpZKfm3RFHQ5cqXwiGLfYjmBh3z1",
            "email": "user@fossnsbm.org",
            "displayName": "user2",
            "role": "manager",
            "lastSignInTime": null,
            "creationTime": "Wed, 22 Sep 2021 11:19:28 GMT"
        }
    ]
}

```
---

### Create a user

- Create a new User - make this priv or hardcode the normal role for users

```json

{
    "displayName":"user2",
    "password":"password",
    "email":"user@fossnsbm.org",
    "role":"manager"
}

```

---

Please note that i havent added events routes priv to test. 

---

### Create Event

```
http://localhost:5001/fossnsbm-e4ff9/us-central1/events/create

```

we can add more stuff to this

```json
{
    "name": "name",
    "topic":"topic",
    "talker":"jonny boy",
    "date":"12:00:00 PM",
    "isPublic":true
}

```

---

### Update event

```
http://localhost:5001/fossnsbm-e4ff9/us-central1/events/update/test
```

```json
{
    "name": "updated",
    "topic":"updated",
    "talker":"jonny boy",
    "date":"12:00:00 PM",
    "isPublic":true
}
```

---

### Remove event

```
http://localhost:5001/fossnsbm-e4ff9/us-central1/events/remove/name
```


avalible roles

```js

isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),

```

and typical user is just user we can add more roles.