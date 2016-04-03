var videoLinks = document.getElementsByTagName('a');

for (var i = 0; i < videoLinks.length; i++) {
  // Store the current href into a variable
  var videoUrl = videoLinks[i].getAttribute('href');
  // Generate a thumbnail URL
  var thumb = youtube.generateThumbnailUrl(videoUrl);
  // Create an IMG element and set its "src"
  var img = document.createElement('img');
  img.setAttribute('src', thumb);
  // Append the IMG to the link
  videoLinks[i].appendChild(img);
}