import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { moveIn, fallIn, moveInLeft } from './router.animation';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'lodash';

@Component({
  selector: 'app-project-provider-dashboard',
  templateUrl: './project-provider-dashboard.component.html',
  styleUrls: ['./project-provider-dashboard.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class ProjectProviderDashboardComponent implements OnInit {


  constructor(
    private db: AngularFireDatabase
  ) {}
  /// unwrapped arrays from firebase
  students: any;
  filteredStudents: any;

  major: any;
  courseType:any;
  educationStatus:any;
  skill_1: any;

  /// Active filter rules
  filters = {}

  ngOnInit() {
    this.db.list('/students')
      .subscribe(students => {
        this.students = students;
        this.applyFilters()
      })
  }

  private applyFilters() {
    this.filteredStudents = _.filter(this.students, _.conforms(this.filters))
  }
  /// filter property by equality to rule
  filterExact(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters()
  }
  /// removes filter
  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters()
  }
}
