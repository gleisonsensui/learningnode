fetch("http://localhost:3001/users")
.then((response) => response.json())
.then(json => {
    const tbody = document.querySelector('#tbody-user');
    json.forEach(element => {
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
});
























