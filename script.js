var videoLinks = $('a');

for (var i = 0; i < videoLinks.length; i++) {
  // Generate a thumbnail URL
  var thumb = youtube.generateThumbnailUrl($(videoLinks[i]).attr('href'));
  // Create an IMG element, append the IMG to the link, and set its "src" 
  $(videoLinks[i]).append(
  $('<img/>')
    .attr('src', youtube.generateThumbnailUrl($(videoLinks[i]).attr('href')))
  );
}