<h1> pingen </h1>

<h3>A time sensitive 6 digit PIN generator</h3>


<h3> Routes: </h3>
<h4>Register:</h4>
<p>Register a user with the pingen DB</p>
Route:
```
POST - /register 
```
Body:
```
externalId: String
```
Return:
```
id: Integer,
externalId: String,
```
<h4>Request PIN:</h4>
<p>Request a 6 Digit PIN</p>
Route:
```
POST - /requestPin 
```
Body:
```
id: Integer
```
Return:
```
pin: String
```
<h4>Verify PIN:</h4>
<p>Verify a PIN with pingen</p>
Route:
```
POST - /verify 
```
Body:
```
id: Integer,
pin: String
```
Return:
```
true || error
```
<h3> An API that stores users and issues 6 digit PINs upon request for 2 Factor Authentication </h3>

Roadmap:
API KEY,
More concise returns / requests
