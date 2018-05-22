import { Component } from '@angular/core';
import { Student } from './Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedStudent: Student; //현재 선택된 학생을 저장할 멤버변수

  students: Student[] = [
    new Student(1, '201132051', '홍길동', 'hgd@skhu.ac.kr'),
    new Student(2, '201132052', '임꺽정', 'lkj@skhu.ac.kr'),
    new Student(3, '201132053', '전우치', 'jwc@skhu.ac.kr'),
  ];

  //특정 학생을 선택하면 이 메소드를 호출할 것
  selectStudent(student: Student) {
    this.selectedStudent = student;
  }

  //학생등록 메소드
  createStudent() {
    let index = this.students.length - 1; //students 배열의 마지막 인덱스
    let id = this.students[index].id + 1; //마지막 항목의 학생 id에 1을 더하여 id라는 변수에 저장
    let student = new Student(id, "", "", ""); //새 Student 생성하여 student 지역 변수에 저장
    this.selectedStudent = student; //방금 만든 student를 selectedStudent에 저장
    this.students.push(student); //방금 만든 student를 students 배열에 추가
  }

  //입력폼 닫기 기능
  close() {
    this.selectedStudent = null;
  }

  //학생삭제 메소드
  deleteStudent() {
    if(confirm(this.selectedStudent.name + "을 목록에서 삭제하시겠습니까?")) {
      for(let i=0; i<this.students.length; ++i) {
        if(this.students[i] == this.selectedStudent) {
          this.students.splice(i, 1);
          break;
        }
      }
      this.selectedStudent = null;
    }
  }
}
