var videoLinks = $('a');

for (var i = 0; i < videoLinks.length; i++) {
  // Create an IMG element, append the IMG to the link, and set its "src" to create a thumbnail
  $(videoLinks[i]).append(
    $('<img/>').attr('src', youtube.generateThumbnailUrl(
      $(videoLinks[i]).attr('href'))
    )
  );
}