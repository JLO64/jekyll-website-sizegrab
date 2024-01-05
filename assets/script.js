document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally
  
    var url = document.getElementById('website-to-test').value;
    var lambdaUrl = 'https://qksbtwafpnossajj2xxlhkp3qu0rsaof.lambda-url.us-west-2.on.aws/?website-to-test=' + url;
    var outputDiv = document.getElementById('output');
  
    fetch(lambdaUrl)
      .then(outputDiv.innerHTML = '<h2>Loading</h2>')
      .then(response => response.json())
      .then(data => {
        var totalwebsiteSize = (JSON.stringify(data["total"], null, 2) / 1024.0).toFixed(2);
        var htmlwebsiteSize = (JSON.stringify(data["html"], null, 2) / 1024.0).toFixed(2);
        var imgwebsiteSize = (JSON.stringify(data["img"], null, 2) / 1024.0).toFixed(2);
        var fontswebsiteSize = (JSON.stringify(data["fonts"], null, 2) / 1024.0).toFixed(2);
        var styleswebsiteSize = (JSON.stringify(data["styles"], null, 2) / 1024.0).toFixed(2);
        var scriptswebsiteSize = (JSON.stringify(data["scripts"], null, 2) / 1024.0).toFixed(2);
        var iconswebsiteSize = (JSON.stringify(data["icons"], null, 2) / 1024.0).toFixed(2);
        outputDiv.innerHTML = '<p>Your total website size is <b>' + totalwebsiteSize + 'KB</b></p>';
        outputDiv.innerHTML += '<li>HTML takes up <b>' + htmlwebsiteSize + 'KB</b></li>';
        outputDiv.innerHTML += '<li>Images take up <b>' + imgwebsiteSize + 'KB</b></li>';
        outputDiv.innerHTML += '<li>Fonts take up <b>' + fontswebsiteSize + 'KB</b></li>';
        outputDiv.innerHTML += '<li>CSS stylesheets take up <b>' + styleswebsiteSize + 'KB</b></li>';
        outputDiv.innerHTML += '<li>JavaScript takes up <b>' + scriptswebsiteSize + 'KB</b></li>'
        outputDiv.innerHTML += '<li>Icons takes up <b>' + iconswebsiteSize + 'KB</b></li>'
      });
  });