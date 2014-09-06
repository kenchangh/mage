var mage = {
  send: send,
  receive: receive
}


/**
 * Takes in image URLs as arguments 
 * Change all the image into Base64 and store in localStorage.    
 */
function send() {
  // Don't do anything if mage has already saved base64
  if (localStorage['mage_sent'] === undefined) {
    /**
     * Convert an image 
     * to a base64 string
     * @param  {String}   url         
     * @param  {Function} callback    
     * @param  {String}   [outputFormat=image/png]           
     */
    function convertImgToBase64(url, callback, outputFormat) {
      var canvas = document.createElement('CANVAS');
      var ctx = canvas.getContext('2d');
      var img = new Image;
      img.crossOrigin = 'Anonymous';
      img.onload = function() {
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL(outputFormat);
        callback.call(this, url, dataURL);
        canvas = null;
      };
      img.src = url;
    }

    var images = arguments;
    var img;
    for (var i = 0; i < images.length; i++) {
      img = images[i];
      convertImgToBase64(img, function(url, base64) {
        localStorage[img] = base64;
      });
    }
    localStorage['mage_sent'] = '';
  }
}


/**
 * Receiving the image after setting in localStorage
 *
 * Takes in key-value
 * key is image ID
 * value is image url       
 */
function receive(idToImages) {
  var base64;
  var dom
  for (var id in idToImages) {
    if (idToImages.hasOwnProperty(id)) {
      img = document.getElementById(id);
      if (dom !== null) {
        base64 = localStorage[ idToImages[id] ];
        img.setAttribute('src', base64);
      }
    }
  }
}




