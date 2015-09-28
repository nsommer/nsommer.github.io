var user = 'nsommer'

// Fetch user information.

$.ajax({
  url: 'https://api.github.com/users/' + user,
  method: 'GET',
  dataType: 'json'
}).done(function (data) {
  buildUserBox(data)
})


// Fetch repo information.

$.ajax({
  url: 'https://api.github.com/users/' + user + '/repos',
  method: 'GET',
  dataType: 'json'
}).done(function (data) {
  for (var index in data) {
    var repo = data[index]
    buildRepoBox(repo)
  }
})


// Build a repo box.

function buildRepoBox(repo) {
  var box = '<div class="cell cell-tablet-half cell-desktop-third cell-widescreen-quarter">'
  box += '<div class="repo">'
  box += '<h2><a href="' + repo.html_url + '">' + repo.name + '</a></h2>'
  box += '<small>' + repo.language + '</small>'
  box += '<p>' + repo.description + '</p>'
  box += '<ul class="counters">'
  box += '<li class="counter">' + repo.stargazers_count + ' Stars</li>'
  box += '<li class="counter">' + repo.forks_count + ' Forks</li>'
  box += '<li class="counter">' + repo.watchers + ' Watchers</li>'
  box += '</ul>'
  box += '</div></div>'

  if ($('.repo').length) {
    $('.repo').last().parent().after(box)
  } else {
    $('#user').parent().after(box)
  }
}


// Build the user box.

function buildUserBox(user) {
  var box = '<img src="' + user.avatar_url +'" alt="' + user.name + '" class="img-responsive img-rounded">'
  box += '<h2><a href="' + user.blog + '">' + user.name + '</a></h2>'
  box += '<h3><a href="' + user.html_url + '">' + user.login + '</a></h3>'
  box += '<ul class="links">'
  box += '<li><a href="https://github.com/nsommer/repositories">' + user.public_repos + ' public repositories</a></li>'
  box += '<li><a href="https://gist.github.com/nsommer">' + user.public_gists + ' public gists</a></li>'
  box += '</ul>'
  box += '<ul class="counters">'
  box += '<li class="counter">' + user.followers + ' followers</li>'
  box += '<li class="counter">' + user.following + ' following</li>'
  box += '</ul>'

  $('#user').append(box)
}
