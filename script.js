

// let user=prompt("Enter user github profile")
let btn = document.getElementById("btn")
let githubuser = document.getElementById("githubuser")
let box = document.querySelector('.box')


function getData() {
    if (githubuser.value.trim() !== '') {
        apiCall()
    } else {
        alert('input is empty')
    }
    function apiCall() {
        fetch(`https://api.github.com/users/${githubuser.value}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                showData(data)
            })
            .catch((error) => {
                console.log(error);
            })
    }
}


btn.addEventListener('click', getData)
githubuser.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        getData();
    }
})
function showData(meradata) {
    console.log(meradata)
    box.innerHTML = `<img src="${meradata.avatar_url}"/>`
}
