//학생 클래스 구현
export class Student { //다른 파일에서 Student 클래스를 사용할 수 있도록 export 키워드를 붙여줌.
    id: number;
    studentNo: string;
    name: string;
    email: string;

    public constructor(id: number, studentNo: string, name: string, email: string) {
        this.id = id;
        this.studentNo = studentNo;
        this.name = name;
        this.email = email;
    }
}