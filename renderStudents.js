
function renderStudents(students) {
    // return `
    //     <div class="text-center mt-5">
    //         <code>${JSON.stringify(students)}</code>
    //     </div>
    // `

    let studentArr =[];
    students.map(function rollCall(student){
        let studentDiv = ""
        console.log('student', student)

        let color = "";
        let presence ="";
        if (student.isPresent) {
            color = "#39FF14";
            presence = "Present"} 
        else {color = "red";
            presence = "Absent"
        }
        studentArr.push(
            `<div style="background-color:${color};border:1px solid black;text-align:center;width:60%;margin:auto;margin-top:10px;">
                <h2>${student.name}</h2>
                <p>${presence}</p>
            </div>`
        );

    })
    let rollCallNames = studentArr.join("");
    let rollCallContainer = 
        `<div class="text-center mt-5" style="background-color:white;width:40%;margin:auto;border:1px solid black;padding-bottom:50px;"> 
                <h1 style="padding-bottom:10px;">Roll Call!</h1>
                ${rollCallNames}
         </div>`
    
    return rollCallContainer;
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}