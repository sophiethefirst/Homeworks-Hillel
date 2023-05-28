export class Student {
    constructor(firstName, lastName, birthYear) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._birthYear = birthYear;
      this._marks = [];
      this._attendance = new Array(25);
      this._attendanceArrayLength = 0;
      this._averageScoreResult = 0;
      this._averageAttendance = 0;
    }
    
    get studentAge() {
      const currentYear = 2023;
      return console.log(Number(currentYear - this._birthYear));
    }
    
    get averageScore() {
      this._averageScoreResult = Number((this._marks.reduce((sum, current) => sum + current, 0)) / this._marks.length);
      return this._averageScoreResult;
    }
    
    present() {
      if (this._attendanceArrayLength < 25) {
        this._attendance[this._attendanceArrayLength] = true;
        this._attendanceArrayLength++;
        return this;
      } else {
        console.log("You have reached the limit of attendance points.")
      }
    }
    
    absent() {
      if (this._attendanceArrayLength < 25) {
        this._attendance[this._attendanceArrayLength] = false;
        this._attendanceArrayLength++;
        return this;
      } else {
        console.log("You have reached the limit of attendance points.")
      }
    }
    
    get averageAttendance() {
      this._averageAttendance = (this._attendance.reduce((sum, value) => sum + (value === true ? 1 : 0), 0)) / this._attendance.length;
      return this._averageAttendance;
    }
    
    addMarks(mark) {
      this._marks.push(mark);
      return this;
    }
    
    summary() {
      this.averageScore;
      this.averageAttendance;
      if(this._averageScoreResult > 90 && this._averageAttendance > 0.9) {
        console.log('Well done!');
      } else if (this._averageScoreResult >= 90 || this._averageAttendance >= 0.9) {
        console.log('Good, but you can do better');
      } else {
        console.log('REDYSKA')
      }
    }
}