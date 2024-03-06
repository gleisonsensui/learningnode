const xhr = new XMLHttpRequest();

xhr.open('GET', `http://localhost:3001/users`);

xhr.onload = () => {

    const list = JSON.parse(xhr.response);
    const tbody = document.querySelector('#tbody-user');
    console.log(list)
    list.forEach(element => {
        console.log(element.name)        
        const tr = document.createElement('tr');
        const tdId = document.createElement('td');
        tdId.textContent = element.id;
        const tdName = document.createElement('td');
        tdName.textContent = element.name;
        const tdAge = document.createElement('td');
        tdAge.textContent = element.age;
        tr.appendChild(tdId);
        tr.appendChild(tdName)
        tr.appendChild(tdAge)
        tbody.appendChild(tr);
    });
}


//xhr.send();

















