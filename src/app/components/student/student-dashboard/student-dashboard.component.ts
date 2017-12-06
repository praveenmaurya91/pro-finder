import { Component, OnInit } from '@angular/core';
//import { Post } from '../../../models/post';
import { moveIn, fallIn, moveInLeft } from './router.animation';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'lodash';
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class StudentDashboardComponent implements OnInit {

  posts: any;
  filteredProject: any;

  studentMajor:any;
  projectType:any;
  paidOrUnpaid:any;
  projectRequiredSkill_1:any;
  projectLocation:any;
 
  /// Active filter rules
  filters = {}
  constructor(
    private db: AngularFireDatabase, 
  ) {}

  ngOnInit() {
    this.db.list('/post')
      .subscribe(post => {
        this.posts = post;
        this.applyFilters()
      })
  }
  private applyFilters() {
    this.filteredProject = _.filter(this.posts, _.conforms(this.filters))
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