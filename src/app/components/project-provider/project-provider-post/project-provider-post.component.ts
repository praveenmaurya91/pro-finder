import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../../models/post';
import { moveIn, fallIn, moveInLeft } from '../project-provider-details/router.animation';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-project-provider-post',
  templateUrl: './project-provider-post.component.html',
  styleUrls: ['./project-provider-post.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class ProjectProviderPostComponent implements OnInit {

  rForm: FormGroup;
  uid: string;
  post: Post = {
    projectName: "",
    projectDescription: "",
    projectRequiredSkill_1: "",
    projectRequiredSkill_2: "",
    projectRequiredSkill_3: "",
    projectRequiredSkill_4: "",
    studentMajor: ['Computer Science', 'Data Science', 'Networking', 'Security', 'Business Process Management'],
    studentYear: ['Not Required', '1', '2', '3', '4', '5'],
    studentSemester: ['Not Required', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    projectDuration: ['3 Months or Less','6 Months','1 year', 'More than 1 year'],
    projectType: ['Development','Research','Literature Review'],
    projectLocation: "",
    paidOrUnpaid: ['Paid', 'Unpaid'],
  };


  constructor(private fb: FormBuilder,
    private flashMessagesService: FlashMessagesService,
    private router: Router,
    public af: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.rForm = fb.group({
      'projectName': [null, Validators.required],
      'projectDescription': [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(2000)])],
      'projectRequiredSkill_1': [null, Validators.required],
      'projectRequiredSkill_2': "",
      'projectRequiredSkill_3': "",
      'projectRequiredSkill_4': "",
      'studentMajor': [null, Validators.required],
      'studentYear': [null, Validators.required],
      'studentSemester': [null, Validators.required],
      'projectType': [null, Validators.required],
      'projectDuration': [null, Validators.required],
      'projectLocation': [null, Validators.required],
      'paidOrUnpaid': [null, Validators.required],
    });
  }

  ngOnInit() {
  
  }

  onSubmit(value: Post) {
    this.afAuth.authState.subscribe(projectProvider => {
      if (projectProvider) {
        this.uid= projectProvider.uid;
        this.post.uid = projectProvider.uid;
        console.log(this.uid)
        console.log("from post",this.post.uid)
      }
      this.af.list('/post/').push({
        projectName: value.projectName,
        uid:this.uid,
        projectDescription: value.projectDescription,
        projectRequiredSkill_1: value.projectRequiredSkill_1,
        projectRequiredSkill_2: value.projectRequiredSkill_2,
        projectRequiredSkill_3: value.projectRequiredSkill_3,
        projectRequiredSkill_4: value.projectRequiredSkill_4,
        studentMajor: value.studentMajor,
        studentYear: value.studentYear,
        studentSemester: value.studentSemester,
        projectDuration: value.projectDuration,
        projectType: value.projectType,
        projectLocation: value.projectLocation,
        paidOrUnpaid: value.paidOrUnpaid
      }); 
    })
    this.flashMessagesService.show('New project has been added', { cssClass: 'alert-success', timeout: 4000 });
    this.router.navigate(['/project-provider-dashboard']);
  }

}

