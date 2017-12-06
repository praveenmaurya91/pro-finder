import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { Students } from '../../../models/students';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from './router.animation';

@Component({
  selector: 'app-students-data',
  templateUrl: './students-data.component.html',
  styleUrls: ['./students-data.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class StudentsDataComponent implements OnInit {
  uid: string;
  students: Students;
  constructor(
    public route: ActivatedRoute,
    public studentService: StudentService
  ) { }

  ngOnInit() {
    // Get ID
    this.uid = this.route.snapshot.params['id'];

    this.studentService.getStudentData(this.uid).subscribe(students => {
      this.students = students;
    });
  }

}
