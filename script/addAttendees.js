export function addAttendees(eventData, element, card) {
    console.log(eventData);

    const cards = document.querySelectorAll('.card');
    const table = document.querySelector('table');
    const tbody = document.createElement('tbody');
  
    const formRow = document.createElement('tr');
    const formCell = document.createElement('td');
    const form = document.createElement('form');
    const nameLabel = document.createElement('label');
    const userNameInput = document.createElement('input');
    const submitButton = document.createElement('button');

    form.classList.add('attendeesForm');
    // form.method = 'POST';
    nameLabel.textContent = 'Name:';
    userNameInput.type = 'text';
    userNameInput.name = 'name';
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    form.appendChild(nameLabel);
    form.appendChild(userNameInput);
    form.appendChild(submitButton);
    formCell.appendChild(form);
    formRow.appendChild(formCell);
    card.appendChild(formRow);

    eventData.dates.forEach((date) => {
        const dateValue = date.date;
        console.log(dateValue);
        const checkbox=document.createElement('input');
        checkbox.type='checkbox';
        checkbox.name='checkbox';
        checkbox.value='checkbox';
        checkbox.checked=false;
        form.appendChild(checkbox);
    });
        
    const td = document.createElement('td');
    td.appendChild(document.createTextNode(''));
    card.appendChild(td);
  
    table.appendChild(tbody);

    const submitAttendees=document.createElement('button');
    submitAttendees.type='submit';
    submitAttendees.textContent='Send';
    // attendeesCheckbox.appendChild(submitAttendees);
    
    submitAttendees.addEventListener('click', () => {
        // alert('push harder!');
        const name=attendeesNameInput.value;
        
        if (!name) {
            alert('Please enter your name');
            return;
        }

        let userNameInput=userNameInput.value;
        dates=[];
        let dates={
            date:dateValue,
            available:checkbox.checked,
        };
        const available=checkbox.checked;
        const data= {
            name:name,
            date:dateValue,
        };
        
        
        const eventID=element.id;
        element.dates.forEach((date) => {
            const dateValue=date.date;
            const checkbox=document.querySelector(`input[name="${dateValue}"]`);
            data.push({
                date:dateValue,
                available:checkbox.checked,
            });
        })
        console.log(eventID);
        let userAvailability= {
            name,
            dates:availability
        };
        console.log(data);
        fetch(`http://localhost:3000/api/events/${eventID}/attend`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userAvailability)
            })
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
            })
            .then(data => {
            console.log(userAvailability);
            attendeesNameInput.value = '';
            checkbox.checked = false;
            })
            .catch(error => console.error(error));
    });
};