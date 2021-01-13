const patientSection = document.querySelector('main section');
const patient_id = getIdFromQuery();

getPatient(patient_id)
    .then(showPatient)


function getPatient(id) {
    return fetch(`${API_URL}/${id}`)
        .then(res => res.json())
}

function showPatient(patient) {
    const buttons = `<a href="/edit.html?id=${patient.id}" class="btn btn-success">Edit Patient info</a>`
    addPatientToPage(patient, size=12, buttons,patientSection);
}