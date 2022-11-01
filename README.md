## AppBridge
AppBridge lives in an iframe. It provides interface to trigger request to EC Admin(parent frame)

### Configuration

```javascript
import { AppBridge } from 'admin-app-extension';

const clientId = 'developer app client id';
const authUrl = 'https://developer.com/auth'
const appBridge = await AppBridge.init({clientId, authUrl});
```

### API References

---
> appBridge.onLanguageChanged(callback)

- Triggered when admin language is changed
- Returns an unsubscribe function

```javascript
// to subscribe
const unsubscribe = appBridge.onLanguageChanged(function(language) {
  console.log(language)
});

// to unsubscribe
unsubscribe();
```

---
> appBridge.getSessionToken()

- returning a JWT token used to identify current logged in user
- session token contains `staff_id`, `merchant_id`, `client_id` in token payload
   
```javascript
const sessionToken = await appBridge.getSessionToken();
```

---
> appBridge.redirect(`url`)

- performing a parent frame redirect

```javascript
appBridge.redirect('https://shoplineapp.com')
```
---
> appBridge.goBack()

- navigate to the last route. will not exit the admin app.

```javascript
appBridge.goBack()
```
---
> appBridge.oauth()

- execute the oauth flow to obtain access token 

```javascript
appBridge.oauth()
```

---
> appBridge.getLanguage()

- get the current language setting from EC Admin

```javascript
  const language = await appBridge.getLanguage()
```

---

> appBridge.getCurrentUrl()

- get the top frame url

```javascript
  const parentUrl = await appBridge.getCurrentUrl()
```

---
> appBridge.routeChange()

- notify parent frame to update the top frame route

```javascript
const path = '/page1';
const querystring = 'foo=bar&bar=foo';
appBridge.routeChange(path, querystring)
```

---
> appBridge.intercom()

- open intercom dialog in EC Admin

```javascript
appBridge.intercom()
```

---
> appBridge.changePageTitle()

- change page title in EC Admin

```javascript
appBridge.changePageTitle('Demo Page Title')
```

---
> appBridge.onRouteChange()

- Triggered when admin route is changed
- Returns an unsubscribe function

```javascript
// to subscribe
const unsubscribe = appBridge.onRouteChange(function(fromUrl, toUrl) {
  console.log('From:', fromUrl);
  console.log('To:', toUrl);
});

// to unsubscribe
unsubscribe();
```

---
> appBridge.routeChangeCancel()

- Notify EC Admin to retry the intercepted route change

```javascript
appBridge.retryRouteChange();
```
