(function() {
  function replaceTwitterWord() {
    var tweetContent = document.querySelectorAll(".tweet-text");
    var tweetName = document.querySelectorAll(".fullname");
    var profileName = document.querySelectorAll(".ProfileHeaderCard-nameLink");

    [].slice.call(tweetContent).forEach(function(el){
      var newContent = el.innerHTML.replace(/Javier Lozano/g,"Analfabeta Funcional");
      if (newContent != el.innerHTML) {
        el.innerHTML = newContent;
      }
    });

    [].slice.call(tweetName).forEach(function(el1){
      var newContent = el1.innerHTML.replace(/Javier Lozano/g,"Analfabeta Funcional");
      if (newContent != el1.innerHTML) {
        el1.innerHTML = newContent;
      }
    });

    [].slice.call(profileName).forEach(function(el2){
      var newContent = el2.innerHTML.replace(/Javier Lozano/g,"Analfabeta Funcional");
      if (newContent != el2.innerHTML) {
        el2.innerHTML = newContent;
      }
    });

  }

  function replacePageContent(){
  var elements = document.getElementsByTagName('*');

  for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      for (var j = 0; j < element.childNodes.length; j++) {
          var node = element.childNodes[j];

          if (node.nodeType === 3) {
              var text = node.nodeValue;
              var replacedText = text.replace(/Javier Lozano/gi, 'Analfabeta Funcional');

              if (replacedText != text) {
                  element.replaceChild(document.createTextNode(replacedText), node);
              }
          }
      }
  }
}

  function tick() {
    replaceTwitterWord();
    replacePageContent();
    window.setTimeout(tick, 2000);
  }

  tick();
})();
