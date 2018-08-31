const token = 'Yfd60c1067b6140c79fd890051e990e4a8aa4f060'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
