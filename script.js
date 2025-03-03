async function fetchApi() {
    try {
        const url = await fetch('https://randomuser.me/api/');
        const res = await url.json();
        const data = res.results[0];
        displayUser(data);
    } catch (error) {
        console.log('Какая-то ошибка', error);
        document.getElementById('user').innerHTML = '<p>Ошибка при загрузке данных</p>';
    }
}

function displayUser(user) {
    const userDiv = document.getElementById('user');
    userDiv.innerHTML = `
        <img src="${user.picture.medium}" alt="User Picture">
        <h2>${user.name.first} ${user.name.last}</h2>
        <p>Email: ${user.email}</p>
        <p>Location: ${user.location.city}, ${user.location.country}</p>
    `;
}

document.getElementById('refreshBtn').addEventListener('click', fetchApi);

fetchApi(); 
