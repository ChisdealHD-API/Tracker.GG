
<a  name="TrackerGG"></a>

 # Example
```javascript
const  TrackerGG = require("@notiixd/trackergg")
const  tapi = new  TrackerGG({api_key: "Your Tracker.GG API Key"});

(async () => {
const  data = await  tapi.csgouser("notii123");
console.log(data);
})(0);
```

## TrackerGG

**Kind**: global class

  

*  [TrackerGG](#TrackerGG)

*  [.csgouser](#TrackerGG+csgo) ⇒ <code>Promise.&lt;Object&gt;</code>

*  [.apexuser](#TrackerGG+apex) ⇒ <code>Promise.&lt;Object&gt;</code>

*  [.divisionuser](#TrackerGG+division) ⇒ <code>Promise.&lt;Object&gt;</code>

*  [.overwatchuser](#TrackerGG+overwatch) ⇒ <code>Promise.&lt;Object&gt;</code>

*  [.splitgateuser](#TrackerGG+splitgate) ⇒ <code>Promise.&lt;Object&gt;</code>

*  [.hyperscapeuser](#TrackerGG+hyperscape) ⇒ <code>Promise.&lt;Object&gt;</code>

  

<a  name="TrackerGG+csgo"></a>

  

### trackerGG.csgouseruser ⇒ <code>Promise.&lt;Object&gt;</code>

**Kind**: instance property of [<code>TrackerGG</code>](#TrackerGG)

  

| Param | Type | Description |

| --- | --- | --- |

| user | <code>string</code> | Username |

  

<a  name="TrackerGG+apex"></a>

  

### trackerGG.apexuser ⇒ <code>Promise.&lt;Object&gt;</code>

**Kind**: instance property of [<code>TrackerGG</code>](#TrackerGG)

  

| Param | Type | Description |

| --- | --- | --- |

| platform | <code>string</code> | Users platform |

| user | <code>string</code> | Username |

  

<a  name="TrackerGG+division"></a>

  

### trackerGG.divisionuser ⇒ <code>Promise.&lt;Object&gt;</code>

**Kind**: instance property of [<code>TrackerGG</code>](#TrackerGG)

  

| Param | Type | Description |

| --- | --- | --- |

| platform | <code>string</code> | Users platform |

| user | <code>string</code> | Username |

  

<a  name="TrackerGG+overwatch"></a>

  

### trackerGG.overwatchuser ⇒ <code>Promise.&lt;Object&gt;</code>

**Kind**: instance property of [<code>TrackerGG</code>](#TrackerGG)

  

| Param | Type | Description |

| --- | --- | --- |

| platform | <code>string</code> | Users platform |

| user | <code>string</code> | Username |

  

<a  name="TrackerGG+splitgate"></a>

  

### trackerGG.splitgateuser ⇒ <code>Promise.&lt;Object&gt;</code>

**Kind**: instance property of [<code>TrackerGG</code>](#TrackerGG)

  

| Param | Type | Description |

| --- | --- | --- |

| user | <code>string</code> | Username |

  

<a  name="TrackerGG+hyperscape"></a>

  

### trackerGG.hyperscapeuser ⇒ <code>Promise.&lt;Object&gt;</code>

**Kind**: instance property of [<code>TrackerGG</code>](#TrackerGG)

  

| Param | Type | Description |

| --- | --- | --- |

| platform | <code>string</code> | Users platform |

| user | <code>string</code> | Username |
