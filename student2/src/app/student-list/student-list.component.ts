import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  selectedIndex: number = -1; //선택된 항목이 없을 때 이 변수의 값은 -1
  selectedStudent: Student;

  students: Student[] = [
    new Student(1, '201132051', '홍길동', 'hgd@skhu.ac.kr'),
    new Student(2, '201132052', '임꺽정', 'lkj@skhu.ac.kr'),
    new Student(3, '201132053', '전우치', 'jwc@skhu.ac.kr'),
  ]

  constructor() { }

  ngOnInit() {
  }

  //학생 선택 메소드
  selectStudent(student: Student, index:number) {
    this.selectedStudent = Object.create(student); //선택된 학생 객체를 복제해서 selectedStudent에 대입
    this.selectedIndex = index;
  }

  //학생 등록 메소드
  createStudent() {
    let lastIndex = this.students.length - 1;
    let id = this.students[lastIndex].id + 1;
    this.selectedStudent = new Student(id, "", "", "");
    this.selectedIndex = -1;
  }

  //닫기 메소드
  close() {
    this.selectedStudent = null;
    this.selectedIndex = -1;
  }

  //저장 메소드
  save() {
    if(this.selectedIndex == -1) { //선택된 항목이 없을 경우 새 학생을 등록 저장
      this.students.push(this.selectedStudent);
    } else { //선택된 항목이 있을 경우 기존 항목을 수정
      this.students[this.selectedIndex] = this.selectedStudent;
    }
    this.selectedStudent = null;
    this.selectedIndex = -1;
  }

  //학생 삭제 메소드
  deleteStudent() {
    if(confirm(this.selectedStudent.name + "을 삭제하시겠습니까?")) {
      this.students.splice(this.selectedIndex, 1);
      this.selectedStudent = null;
      this.selectedIndex = -1;
    }
  }

}
