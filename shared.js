const API_URL = 'http://localhost:3000/api/v1/patients';


function getIdFromQuery(){
    const parts = window.location.search.match(/\?id=([0-9]+)/);
    return parts[1];
}


function addPatientToPage(patient, size, buttons, parent) {
    const patientDiv = document.createElement('div');
        parent.appendChild(patientDiv);

        patientDiv.outerHTML = `
      <div class="card col-sm-${size}">
        <div class="card-body">
          <h5 class="card-title">Name: ${patient.name}</h5>
          <p class="card-text">Patient age: ${patient.age}</p>
          <p class="card-text">Patient weight: ${patient.weight}</p>
          <p class="card-text">Patient symptom: ${patient.symptom}</p>
          <p class="card-text">Patient gender: ${patient.gender}</p>
          ${buttons}
        </div>
      </div>
      `;
}