import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { AppliedProject } from '../../../models/appliedProject';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from './router.animation';
@Component({
  selector: 'app-project-request-details',
  templateUrl: './project-request-details.component.html',
  styleUrls: ['./project-request-details.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class ProjectRequestDetailsComponent implements OnInit {

  id: string;
  students: AppliedProject;
  constructor(
    public route: ActivatedRoute,
    public studentService: StudentService
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentRequestData(this.id).subscribe(appliedProject => {
      this.students = appliedProject ;
    });
  }

}
