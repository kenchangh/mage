Mage
====

####Magically loading times

Presto! What Mage does, is that it will load your images as Base64 and then save it into the user's localStorage. When the user visits, the image is not loaded from the server but instead from the user's browser! This saves up the round-trip time by **a lot**.

Usage
-----

Here's a simple way to use it:
```html
<img id="pic1"></img>
<img id="pic2"></img>
```
Pass in `<img>` without the `src` attribute. With an `id`.

```javascript
mage.teleport({
  pic1: '/static/images/pic1',
  pic2: '/static/images/pic2'
});
```

If things are just getting way too repetitive:

```javascript
mage.teleport({
  baseUrl: '/static/images/',
  pic1: 'pic1',
  pic2: 'pic2'
});
```

Support
-------
Like what you see? Contact me at guanhao3797@gmail.com or tweet to me at [@mavenave](https://twitter.com/mavenave)!

