var videoLinks = $('a');

function addThumbnail (link) {
// Create an IMG element, append the IMG to the given link, and set its "src" to create a thumbnail
  $(link).append(
    $('<img/>').attr('src', youtube.generateThumbnailUrl(
      $(link).attr('href'))
    )
  );
};

for (var i = 0; i < videoLinks.length; i++) {
  addThumbnail(videoLinks[i]);
}