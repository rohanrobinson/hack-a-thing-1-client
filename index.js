const patientsSection = document.querySelector('main section');

getPatients()
    .then(showPatients);


function getPatients() {
    return fetch(API_URL)
        .then(res => res.json())
}

function showPatients(patients) {
    patients.forEach(patient => {
        const buttons = `<a href="/patient.html?id=${patient.id}" class="btn btn-primary">Press to view more info!</a>`
        addPatientToPage(patient, size=4, buttons, patientsSection);
    });

}
