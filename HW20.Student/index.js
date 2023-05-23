import { Student } from "./student";

const studentLesia = new Student('Lesia', 'Ukrainka', 2005);

studentLesia.present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent();

studentLesia.addMarks(100).addMarks(85).addMarks(90).addMarks(100).addMarks(84).addMarks(92).addMarks(89).addMarks(96).addMarks(100).addMarks(100);

studentLesia.studentAge;

studentLesia.summary();


const studentTaras = new Student('Taras', 'Shevchenko', 2004);

studentTaras.present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().absent().absent();

studentTaras.addMarks(100).addMarks(100).addMarks(90).addMarks(100).addMarks(90).addMarks(92).addMarks(100).addMarks(96).addMarks(100).addMarks(100);

studentTaras.studentAge;

studentTaras.summary();


const studentIvan = new Student('Ivan', 'Franko', 2004);

studentIvan.present().present().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent();

studentIvan.addMarks(70).addMarks(60).addMarks(40).addMarks(70).addMarks(90).addMarks(92).addMarks(60).addMarks(60).addMarks(65).addMarks(60);

studentIvan.studentAge;

studentIvan.summary();