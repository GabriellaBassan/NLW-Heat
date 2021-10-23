const linksSocialMedia = {
  github: 'GabriellaBassan',
  instagram: 'itsbbi',
  linkedin: 'in/gabriellabassan20'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json() )
  .then(data => {
    userBio.textContent = data.bio
    userImage.src = data.avatar_url
  })
}

getGitHubProfileInfos()