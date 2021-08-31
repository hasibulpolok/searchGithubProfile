const searchUser = () => {
    const searchField = document.getElementById('seacrh-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';;
    const url = `https://api.github.com/users/${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data));

}

// const displayResult = profile => {
//     const showResult = document.getElementById('displayResult');
//     showResult.innerHTML = '';
//         const div = document.createElement('div');
//         div.classList.add('display-result');
//         div.innerHTML = `
//                 >
//         `;
//         showResult.appendChild(div);

//     })
// }

const displayResult = profile => {
    const showResult = document.getElementById('displayResult');
    showResult.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('display-result');
    div.innerHTML = `<div class="img">
    <img src="${profile.avatar_url}" alt="">
</div>
<div class="details">
    <div class="info">
    <h3>Name: ${profile.name}</h3>
    <p>username: ${profile.login}</p>
    <p>bio: ${profile.bio}</p>
    <p>total-repo:${profile.public_repos}</p>
    <p>follower: ${profile.followers}</p>
    <p>following: ${profile.following}</p>
    <p>location: ${profile.location}</p>
</div>
</div>`
showResult.appendChild(div);
}