(function () {
  function iframeRef(frame) {
    return frame.contentWindow
      ? frame.contentWindow.document
      : frame.contentDocument;
  }

  var frame = iframeRef(document.getElementsByTagName('iframe')[0]);
  var video = frame.getElementsByTagName('video')[0];
  window.open(video.src);
}());
