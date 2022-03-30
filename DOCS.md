<a name="top"></a>
# conferences-app v0.0.0



 - [Auth](#Auth)
   - [Authenticate](#Authenticate)
 - [Conference](#Conference)
   - [Create conference](#Create-conference)
   - [Delete conference](#Delete-conference)
   - [Retrieve conference](#Retrieve-conference)
   - [Retrieve conferences](#Retrieve-conferences)
   - [Update conference](#Update-conference)
 - [Session](#Session)
   - [Create session](#Create-session)
   - [Delete session](#Delete-session)
   - [Retrieve session](#Retrieve-session)
   - [Retrieve sessions](#Retrieve-sessions)
   - [Update session](#Update-session)
 - [Speaker](#Speaker)
   - [Create speaker](#Create-speaker)
   - [Delete speaker](#Delete-speaker)
   - [Retrieve speaker](#Retrieve-speaker)
   - [Retrieve speakers](#Retrieve-speakers)
   - [Update speaker](#Update-speaker)
 - [User](#User)
   - [Create user](#Create-user)
   - [Delete user](#Delete-user)
   - [Retrieve current user](#Retrieve-current-user)
   - [Retrieve user](#Retrieve-user)
   - [Retrieve users](#Retrieve-users)
   - [Update password](#Update-password)
   - [Update user](#Update-user)

___


# <a name='Auth'></a> Auth

## <a name='Authenticate'></a> Authenticate
[Back to top](#top)

```
POST /auth
```

### Headers - `Header`
| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization | `String` | <p>Basic authorization with email and password.</p> |

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>Master access_token.</p> |

### Success response

#### Success response - `Success 201`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| token | `String` | <p>User <code>access_token</code> to be passed to other requests.</p> |
| user | `Object` | <p>Current user's data.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 401 |  | <p>Master access only or invalid credentials.</p> |

# <a name='Conference'></a> Conference

## <a name='Create-conference'></a> Create conference
[Back to top](#top)

```
POST /conferences
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>user access token.</p> |
| name |  | <p>Conference's name.</p> |
| date |  | <p>Conference's date.</p> |
| country |  | <p>Conference's country.</p> |
| length |  | <p>Conference's length.</p> |
| tutorials |  | <p>Conference's tutorials.</p> |
| workshops |  | <p>Conference's workshops.</p> |

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| conference | `Object` | <p>Conference's data.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 404 |  | <p>Conference not found.</p> |
| 401 |  | <p>user access only.</p> |

## <a name='Delete-conference'></a> Delete conference
[Back to top](#top)

```
DELETE /conferences/:id
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>user access token.</p> |

### Success response

#### Success response - `Success 204`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 204 |  | <p>No Content.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 404 |  | <p>Conference not found.</p> |
| 401 |  | <p>user access only.</p> |

## <a name='Retrieve-conference'></a> Retrieve conference
[Back to top](#top)

```
GET /conferences/:id
```

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| conference | `Object` | <p>Conference's data.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 404 |  | <p>Conference not found.</p> |

## <a name='Retrieve-conferences'></a> Retrieve conferences
[Back to top](#top)

```
GET /conferences
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| q | `String` | **optional** <p>Query to search.</p> |
| page | `Number` | **optional** <p>Page number.</p>_Default value: 1_<br>_Size range: 1..30_<br> |
| limit | `Number` | **optional** <p>Amount of returned items.</p>_Default value: 30_<br>_Size range: 1..100_<br> |
| sort | `String[]` | **optional** <p>Order of returned items.</p>_Default value: -createdAt_<br> |
| fields | `String[]` | **optional** <p>Fields to be returned.</p> |

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| count | `Number` | <p>Total amount of conferences.</p> |
| rows | `Object[]` | <p>List of conferences.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |

## <a name='Update-conference'></a> Update conference
[Back to top](#top)

```
PUT /conferences/:id
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>user access token.</p> |
| name |  | <p>Conference's name.</p> |
| date |  | <p>Conference's date.</p> |
| country |  | <p>Conference's country.</p> |
| length |  | <p>Conference's length.</p> |
| tutorials |  | <p>Conference's tutorials.</p> |
| workshops |  | <p>Conference's workshops.</p> |

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| conference | `Object` | <p>Conference's data.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 404 |  | <p>Conference not found.</p> |
| 401 |  | <p>user access only.</p> |

# <a name='Session'></a> Session

## <a name='Create-session'></a> Create session
[Back to top](#top)

```
POST /sessions
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>user access token.</p> |
| title |  | <p>Session's title.</p> |
| keywords |  | <p>Session's keywords.</p> |
| description |  | <p>Session's description.</p> |
| conference |  | <p>Session's conference.</p> |
| type |  | <p>Session's type.</p> |
| day |  | <p>Session's day.</p> |

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| session | `Object` | <p>Session's data.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 404 |  | <p>Session not found.</p> |
| 401 |  | <p>user access only.</p> |

## <a name='Delete-session'></a> Delete session
[Back to top](#top)

```
DELETE /sessions/:id
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>user access token.</p> |

### Success response

#### Success response - `Success 204`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 204 |  | <p>No Content.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 404 |  | <p>Session not found.</p> |
| 401 |  | <p>user access only.</p> |

## <a name='Retrieve-session'></a> Retrieve session
[Back to top](#top)

```
GET /sessions/:id
```

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| session | `Object` | <p>Session's data.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 404 |  | <p>Session not found.</p> |

## <a name='Retrieve-sessions'></a> Retrieve sessions
[Back to top](#top)

```
GET /sessions
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| q | `String` | **optional** <p>Query to search.</p> |
| page | `Number` | **optional** <p>Page number.</p>_Default value: 1_<br>_Size range: 1..30_<br> |
| limit | `Number` | **optional** <p>Amount of returned items.</p>_Default value: 30_<br>_Size range: 1..100_<br> |
| sort | `String[]` | **optional** <p>Order of returned items.</p>_Default value: -createdAt_<br> |
| fields | `String[]` | **optional** <p>Fields to be returned.</p> |

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| count | `Number` | <p>Total amount of sessions.</p> |
| rows | `Object[]` | <p>List of sessions.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |

## <a name='Update-session'></a> Update session
[Back to top](#top)

```
PUT /sessions/:id
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>user access token.</p> |
| title |  | <p>Session's title.</p> |
| keywords |  | <p>Session's keywords.</p> |
| description |  | <p>Session's description.</p> |
| conference |  | <p>Session's conference.</p> |
| type |  | <p>Session's type.</p> |
| day |  | <p>Session's day.</p> |

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| session | `Object` | <p>Session's data.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 404 |  | <p>Session not found.</p> |
| 401 |  | <p>user access only.</p> |

# <a name='Speaker'></a> Speaker

## <a name='Create-speaker'></a> Create speaker
[Back to top](#top)

```
POST /speakers
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>user access token.</p> |
| name |  | <p>Speaker's name.</p> |
| nationality |  | <p>Speaker's nationality.</p> |
| country |  | <p>Speaker's country.</p> |
| speciality |  | <p>Speaker's speciality.</p> |
| biography |  | <p>Speaker's biography.</p> |

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| speaker | `Object` | <p>Speaker's data.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 404 |  | <p>Speaker not found.</p> |
| 401 |  | <p>user access only.</p> |

## <a name='Delete-speaker'></a> Delete speaker
[Back to top](#top)

```
DELETE /speakers/:id
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>user access token.</p> |

### Success response

#### Success response - `Success 204`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 204 |  | <p>No Content.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 404 |  | <p>Speaker not found.</p> |
| 401 |  | <p>user access only.</p> |

## <a name='Retrieve-speaker'></a> Retrieve speaker
[Back to top](#top)

```
GET /speakers/:id
```

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| speaker | `Object` | <p>Speaker's data.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 404 |  | <p>Speaker not found.</p> |

## <a name='Retrieve-speakers'></a> Retrieve speakers
[Back to top](#top)

```
GET /speakers
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| q | `String` | **optional** <p>Query to search.</p> |
| page | `Number` | **optional** <p>Page number.</p>_Default value: 1_<br>_Size range: 1..30_<br> |
| limit | `Number` | **optional** <p>Amount of returned items.</p>_Default value: 30_<br>_Size range: 1..100_<br> |
| sort | `String[]` | **optional** <p>Order of returned items.</p>_Default value: -createdAt_<br> |
| fields | `String[]` | **optional** <p>Fields to be returned.</p> |

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| count | `Number` | <p>Total amount of speakers.</p> |
| rows | `Object[]` | <p>List of speakers.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |

## <a name='Update-speaker'></a> Update speaker
[Back to top](#top)

```
PUT /speakers/:id
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>user access token.</p> |
| name |  | <p>Speaker's name.</p> |
| nationality |  | <p>Speaker's nationality.</p> |
| country |  | <p>Speaker's country.</p> |
| speciality |  | <p>Speaker's speciality.</p> |
| biography |  | <p>Speaker's biography.</p> |

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| speaker | `Object` | <p>Speaker's data.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 404 |  | <p>Speaker not found.</p> |
| 401 |  | <p>user access only.</p> |

# <a name='User'></a> User

## <a name='Create-user'></a> Create user
[Back to top](#top)

```
POST /users
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>Master access_token.</p> |
| email | `String` | <p>User's email.</p> |
| password | `String` | <p>User's password.</p>_Size range: 6.._<br> |
| name | `String` | **optional** <p>User's name.</p> |
| picture | `String` | **optional** <p>User's picture.</p> |
| role | `String` | **optional** <p>User's role.</p>_Default value: user_<br>_Allowed values: user,admin_ |

### Success response

#### Success response - `Sucess 201`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| user | `Object` | <p>User's data.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 401 |  | <p>Master access only.</p> |
| 409 |  | <p>Email already registered.</p> |

## <a name='Delete-user'></a> Delete user
[Back to top](#top)

```
DELETE /users/:id
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>User access_token.</p> |

### Success response

#### Success response - `Success 204`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 204 |  | <p>No Content.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 401 |  | <p>Admin access only.</p> |
| 404 |  | <p>User not found.</p> |

## <a name='Retrieve-current-user'></a> Retrieve current user
[Back to top](#top)

```
GET /users/me
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>User access_token.</p> |

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| user | `Object` | <p>User's data.</p> |

## <a name='Retrieve-user'></a> Retrieve user
[Back to top](#top)

```
GET /users/:id
```

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| user | `Object` | <p>User's data.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 404 |  | <p>User not found.</p> |

## <a name='Retrieve-users'></a> Retrieve users
[Back to top](#top)

```
GET /users
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>User access_token.</p> |
| q | `String` | **optional** <p>Query to search.</p> |
| page | `Number` | **optional** <p>Page number.</p>_Default value: 1_<br>_Size range: 1..30_<br> |
| limit | `Number` | **optional** <p>Amount of returned items.</p>_Default value: 30_<br>_Size range: 1..100_<br> |
| sort | `String[]` | **optional** <p>Order of returned items.</p>_Default value: -createdAt_<br> |
| fields | `String[]` | **optional** <p>Fields to be returned.</p> |

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| users | `Object[]` | <p>List of users.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 401 |  | <p>Admin access only.</p> |

## <a name='Update-password'></a> Update password
[Back to top](#top)

```
PUT /users/:id/password
```

### Headers - `Header`
| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization | `String` | <p>Basic authorization with email and password.</p> |

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| password | `String` | <p>User's new password.</p>_Size range: 6.._<br> |

### Success response

#### Success response - `Success 201`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| user | `Object` | <p>User's data.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 401 |  | <p>Current user access only.</p> |
| 404 |  | <p>User not found.</p> |

## <a name='Update-user'></a> Update user
[Back to top](#top)

```
PUT /users/:id
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>User access_token.</p> |
| name | `String` | **optional** <p>User's name.</p> |
| picture | `String` | **optional** <p>User's picture.</p> |

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| user | `Object` | <p>User's data.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 401 |  | <p>Current user or admin access only.</p> |
| 404 |  | <p>User not found.</p> |
