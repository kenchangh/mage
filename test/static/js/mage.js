var mage = {
  loadImage: loadImage,
  teleport: teleport
};


/**
 * Set the images into localStorage and load them to the page.
 * 
 * @param {Object} {domID: imageURL, ...}     
 */
function teleport(idToImages) {
  // Don't do anything if mage has already saved base64
  if (localStorage['mage_sent'] === undefined) {
    console.log('reloaded function')
    /**
     * Convert an image 
     * to a base64 string
     * @param  {String}   url         
     * @param  {Function} callback    
     * @param  {String}   [outputFormat=image/png]
     *
     * Supported input formats:
     * image/png
     * image/jpeg
     * image/jpg
     * image/gif
     * image/bmp
     * image/tiff
     * image/x-icon
     * image/svg+xml
     * image/webp
     * image/xxx
     *
     * Supported output formats:
     * image/png
     * image/jpeg
     * image/webp (chrome)       
     */
    function convertImgToBase64(url, callback) {
      // .jpg, .png...
      var imageType = url.split('.')[1];
      var outputFormat;
      imageType == 'jpg' || imageType == 'jpeg'
        ? outputFormat = 'image/jpeg'
        : outputFormat = 'image/png'
      
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
 
    var img;
    for (var id in idToImages) {
      img = idToImages[id];
      convertImgToBase64(img, function(url, base64) {
        localStorage[url] = base64;
        console.log(base64)
        document.getElementById(id).setAttribute('src', base64);
      });
    }
    localStorage['mage_sent'] = '';
  }
  else {
    loadImage(idToImages);
  }
}


/**
 * Setting the Base64 for images
 * 
 * @param {Object} {domID: imageURL, ...}     
 */
function loadImage(idToImages) {
  console.log('lazy load')
  var base64;
  var img;
  for (var id in idToImages) {
    if (idToImages.hasOwnProperty(id)) {
      img = document.getElementById(id);
      if (img !== null) {
        base64 = localStorage[idToImages[id]];
        img.setAttribute('src', base64);
      }
    }
  }
}

