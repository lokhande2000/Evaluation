function Marks_of_5_subjects(science, maths, social_science, english , hindi){
    this.science = science;
    this.maths = maths;
    this.social_science = social_science;
    this.english = english;
    this.hindi = hindi;
}

let marksOfFiveSub = new Marks_of_5_subjects(78,56,95,85,70)
// console.log(marksOfFiveSub)

function Student_details(name, roll_no, clas, section, marks_of_subject){
    this.name = name;
    this.roll_no = roll_no;
    this.class = clas;
    this.section = section;
    this.marks_of_subject = marks_of_subject;
}

let studentsDetails = new Student_details("suraj", 10, 'X',"B",marksOfFiveSub);
// console.log(studentsDetails);

function persentage(marksOfFiveSub){
    let sum = 0;
    for(let key in marksOfFiveSub){
        sum += marksOfFiveSub[key]
    }
    return sum/5 + " %"
}
let per = persentage(marksOfFiveSub);

function reportcard(studentsDetails){
    console.log("+--------------------------------------+");
    console.log("|            REPORT CARD               |")
    console.log("+--------------------------------------+");
    console.log(`|  name    -   ${studentsDetails.name}                   |`);
    console.log(`|  roll_no -   ${studentsDetails.roll_no}                      |`);
    console.log(`|  class   -   ${studentsDetails.class}                       |`);
    console.log(`|  section -   ${studentsDetails.section}                       |`);
    console.log(`|  maths   -   ${marksOfFiveSub.maths}                      |`);
    console.log(`|  science -   ${marksOfFiveSub.social_science}                      |`);
    console.log(`|  english -   ${marksOfFiveSub.english}                      |`);
    console.log(`|  hindi   -   ${marksOfFiveSub.hindi}                      |`);
    console.log(`|  Prectage   -   ${per}               |`);
    console.log("+--------------------------------------+");
}
reportcard(studentsDetails);

// function printTop3Subjects(marks){
    
// }
