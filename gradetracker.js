const gradeTracker = {
    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;

        const total = Object.values(student.grades).reduce((sum, grade) => sum + grade, 0);
        const average = total / Object.keys(student.grades).length;
        return Math.round(average * 100) / 100;
    },

    getSubjectAverage(subject) {
        const subjectGrades = this.students
            .map(student => student.grades[subject])
            .filter(grade => typeof grade === 'number');
        const total = subjectGrades.reduce((sum, grade) => sum + grade, 0);
        return Math.round((total / subjectGrades.length) * 100) / 100;
    },

    getTopStudent() {
        return this.students.reduce((topStudent, currentStudent) => {
            return this.getStudentAverage(currentStudent.name) > this.getStudentAverage(topStudent.name)
                ? currentStudent
                : topStudent;
        });
    },

    getStrugglingStudents() {
        return this.students.filter(student => this.getStudentAverage(student.name) < 70);
    },

    getLetterGrade(score) {
        if (score >= 90) return 'A';
        if (score >= 80) return 'B';
        if (score >= 70) return 'C';
        if (score >= 60) return 'D';
        return 'F';
    },

    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found.";

        let report = `Report Card for ${student.name}:\n`;
        for (const [subject, grade] of Object.entries(student.grades)) {
            report += `${subject}: ${grade} (${this.getLetterGrade(grade)})\n`;
        }
        report += `Average: ${this.getStudentAverage(name)}`;
        return report;
    }
};

// Test your implementation
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.students);
console.log(gradeTracker.getStudentAverage("Alice"));
console.log(gradeTracker.getSubjectAverage("math"));
console.log(gradeTracker.getTopStudent());
console.log(gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("Alice"));