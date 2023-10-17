export function addAttendees() {
    
    const attendeesOption=document.querySelector('td');
    const cardAttendees=document.createElement('div');
    cardAttendees.classList.add('cardAttendees');
    attendeesOption.appendChild(cardAttendees);
    const addingAttendees=document.createElement('form');
    cardAttendees.appendChild(addingAttendees);

    addingAttendees.classList.add('attendeesForm');
    const attendeesName=document.createElement('label');
    attendeesName.textContent='Name:';
    addingAttendees.appendChild(attendeesName);

    const attendeesNameInput=document.createElement('input');
    attendeesNameInput.type='text';
    attendeesNameInput.name='name';
    addingAttendees.appendChild(attendeesNameInput);

    const attendeesCheckbox=document.querySelector('th');
    const attendeesChoice=document.createElement('div');
    attendeesChoice.classList.add('attendeesChoice'); 
    attendeesCheckbox.appendChild(attendeesChoice);
    const checkbox=document.createElement('input');
    checkbox.type='checkbox';
    checkbox.name='checkbox';
    checkbox.value='checkbox';
    attendeesChoice.appendChild(checkbox);

    const submitAttendees=document.createElement('button');
    submitAttendees.type='submit';
    submitAttendees.textContent='Send';
    addingAttendees.appendChild(submitAttendees);
    
    submitAttendees.addEventListener('click', (event) => {
        event.preventDefault();
        const name=attendeesNameInput.value;
        const isAttending=checkbox.checked;
        const data= {
            name:name,
            isAttending:isAttending,
        };
        let availability=[];
        const eventID=data.id;
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
            body: JSON.stringify(userAvailability, eventID)
            })
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
            })
            .then(data => {
            console.log(data);
            attendeesNameInput.value = '';
            checkbox.checked = false;
            })
            .catch(error => console.error(error));
        });
};