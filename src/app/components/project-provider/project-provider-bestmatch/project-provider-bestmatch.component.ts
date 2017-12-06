import { Component, OnInit } from '@angular/core';
//import { StudentService } from '../../../services/student.service';
import { moveIn, fallIn, moveInLeft } from './router.animation';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
//import * as _ from 'lodash';
@Component({
  selector: 'app-project-provider-bestmatch',
  templateUrl: './project-provider-bestmatch.component.html',
  styleUrls: ['./project-provider-bestmatch.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class ProjectProviderBestmatchComponent implements OnInit {

  uid: string;
  match:boolean;
  matchData;any;
  matchedStudent:any[]=[];
  constructor(
    private db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {

    this.afAuth.authState.subscribe(projectProvider => {
      if (projectProvider) {
        this.db.list('projectRequest/' + projectProvider.uid).subscribe(project => {
          for(let items of project){
            for (let studentMajor of items.studentMajor ){
              if (items.major == studentMajor && 
                items.projectRequiredSkill_1==items.skill_1 ||
                items.projectRequiredSkill_1 == items.skill_2 ||
                items.projectRequiredSkill_1 == items.skill_3 ||
                items.projectRequiredSkill_1 == items.skill_4 ||
              
                items.projectRequiredSkill_2 == items.skill_1 ||
                items.projectRequiredSkill_2 == items.skill_2 ||
                items.projectRequiredSkill_2 == items.skill_3 ||
                items.projectRequiredSkill_2 == items.skill_4 ||
              
                items.projectRequiredSkill_3 == items.skill_1 ||
                items.projectRequiredSkill_3 == items.skill_2 ||
                items.projectRequiredSkill_3 == items.skill_3 ||
                items.projectRequiredSkill_3 == items.skill_4 ||
              
                items.projectRequiredSkill_4 == items.skill_1 ||
                items.projectRequiredSkill_4 == items.skill_2 ||
                items.projectRequiredSkill_4 == items.skill_3 ||
                items.projectRequiredSkill_4 == items.skill_4 ){
                  this.match = true;
                  this.matchData = items.$key
                  this.matchedStudent.push(items);  
              }
            }   
          }
        });
        this.uid = projectProvider.uid;
      }
    });
  }
}