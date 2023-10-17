export function addAttendees(eventData, element, card) {
    console.log(eventData);

    const cards = document.querySelectorAll('.card');
    const table = document.querySelector('table');
    const tbody = document.createElement('tbody');
  
        const formRow = document.createElement('tr');
        const formCell = document.createElement('td');
        const form = document.createElement('form');
        const nameLabel = document.createElement('label');
        const nameInput = document.createElement('input');
        const submitButton = document.createElement('button');

        form.classList.add('attendeesForm');
        form.method = 'POST';
        nameLabel.textContent = 'Name:';
        nameInput.type = 'text';
        nameInput.name = 'name';
        submitButton.type = 'submit';
        submitButton.textContent = 'Submit';

        form.appendChild(nameLabel);
        form.appendChild(nameInput);
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
            card.appendChild(checkbox);
        });
        
        const td = document.createElement('td');
        td.appendChild(document.createTextNode(''));
        card.appendChild(td);
  
    table.appendChild(tbody);
        

        // const addingAttendees=document.createElement('form');
        // addingAttendees.classList.add('attendeesForm');
        // addingAttendees.method='POST';
        // cardAttendees.appendChild(addingAttendees);

        // const attendeesName=document.createElement('label');
        // attendeesName.textContent='Name:';
        // addingAttendees.appendChild(attendeesName);

        // const attendeesNameInput=document.createElement('input');
        // attendeesNameInput.type='text';
        // attendeesNameInput.name='name';
        // addingAttendees.appendChild(attendeesNameInput);
    
  
    // const th=document.querySelectorAll('th');
    // console.log(th);
    
    // th.forEach((th) => {

    //     th.appendChild(cardAttendees);

    //     const attendeesChoice=document.createElement('div');
    //     attendeesChoice.classList.add('attendeesChoice'); 
    //     th.appendChild(attendeesChoice);

    //     const checkbox=document.createElement('input');
    //     checkbox.type='checkbox';
    //     checkbox.name='checkbox';
    //     checkbox.value='checkbox';
    //     checkbox.checked=false;
    //     attendeesChoice.appendChild(checkbox);
    // });

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

        const available=checkbox.checked;
        const data= {
            name:name,
            available:available,
        };
        let availability=[];
        
        const eventID=element.id;
        element.dates.forEach((date) => {
            const dateValue=date.date;
            const checkbox=document.querySelector(`input[name="${dateValue}"]`);
            availability.push({
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