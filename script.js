var videoLinks = $('a');

// Create an IMG element, append the IMG to each A tag, and set its "src" to create a thumbnail
function addThumbnail (aTag) {
// Save each url to link variable
  var link = $(aTag).attr('href');

  $(aTag).append(
    $('<img/>').attr('src', youtube.generateThumbnailUrl(link))
  );
};

for (var i = 0; i < videoLinks.length; i++) {
  addThumbnail(videoLinks[i]);
}
