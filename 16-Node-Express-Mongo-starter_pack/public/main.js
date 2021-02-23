const updateButton = document.querySelector('#update-button');
const deleteButton = document.querySelector('#delete-button');
const messageDiv = document.querySelector('#message');


updateButton.addEventListener('click', _ => {
  fetch('/post', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Writer',
      surname: 'I find your lack of faith disturbing.'
    })
  })
})



deleteButton.addEventListener('click', _ => {
  fetch('/post', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Writer'
    })
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      if (response === 'No quote to delete') {
        messageDiv.textContent = 'No Writer quote to delete'
      } else {
        window.location.reload(true)
      }
    })
    .catch(error => console.error(error))
})