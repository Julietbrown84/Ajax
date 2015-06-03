var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
        var employees = Json.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted">';
        for (var i=0; i<employees.length; i +=1) {
          if (employees[i].inoffice ==== true) {
            statusHTML += '<li class="in'>;
            } else  {
              statusHTML += '<li class="out">';
            }
            statusHtml += employees[i].name;
            statusHTML += '</li>';
          }
          statusHTML += '</ul>';
          document.getElementById('employeeList').innnerHTML = statusHTML;
        }
       };
xhr.open('GET', '../data/employees.json');
xhr.send();
