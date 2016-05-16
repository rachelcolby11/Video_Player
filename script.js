var videoLinks = $('a');

// Create an IMG element, append the IMG to each A tag, and set its "src" to create a thumbnail with onclick event listener to generate embedded video player
function addThumbnailPlayer (aTag) {
  // Save each url to link variable
  var link = $(aTag).attr('href');

  // Generate thumbnail
  $(aTag).append(
    $('<img/>').attr('src', youtube.generateThumbnailUrl(link))
  );

  // Add event listener to generate video player
  $(aTag).on('click', function(e) {
    e.preventDefault();

    var embedVideo = $('<iframe></iframe>');
    embedVideo.attr('src', youtube.generateEmbedUrl(link)).attr('width', '420').attr('height', '315');

    var videoWatcher = $('#video-watcher');
    videoWatcher.html(embedVideo);
  });
};

for (var i = 0; i < videoLinks.length; i++) {
  addThumbnailPlayer(videoLinks[i]);
}
