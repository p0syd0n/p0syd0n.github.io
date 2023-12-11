      // Using fetch API
      fetch('nav.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('nav').innerHTML = data;
      });