const patientsSection = document.querySelector('main section');

const API_URL = 'http://localhost:3000/api/v1/patients';

getPatients()
    .then(showPatients);


function getPatients() {
    return fetch(API_URL)
        .then(res => res.json())
}

function showPatients(patients) {
    patients.forEach(patient => {
        const patientDiv = document.createElement('div');
        patientsSection.appendChild(patientDiv);

        patientDiv.outerHTML = `
        <div class="card col-sm-4">
        <div class="card-body">
          <h5 class="card-title">Name: ${patient.name}</h5>
          <p class="card-text">Patient age: ${patient.age}, Patient weight: ${patient.weight}, Patient symptom: ${patient.symptom}</p>
          <a href="/patient.html?id=${patient.id}" class="btn btn-primary">Press to view more info!</a>
        </div>
      </div>
      `;
    });

}