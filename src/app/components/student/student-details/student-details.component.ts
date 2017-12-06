import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Students } from '../../../models/students';
import { moveIn, fallIn, moveInLeft } from './router.animation';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class StudentDetailsComponent implements OnInit {
  rForm: FormGroup;
  uid: string;
  students: Students = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: '',
    educationStatus: ['Studying', 'Completed'],
    courseType: ['Bachelor', 'Master', 'PHD'],
    major: ['Computer Science', 'Data Science', 'Networking', 'Security', 'Business Process Management'],
    year: ['Not Applicable','1', '2', '3', '4', '5'],
    semester: ['Not Applicable','1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    skill_1: '',
    skill_2: '',
    skill_3: '',
    skill_4: '',
    lookingProject:['Industry','University','Both'],
    projectType: ['Paid', 'Unpaid', 'Both'],
    visaStatus:['Australian Citizen or Permanent Resident', 'International Student','Other'],
    coverLetter: '',
  };

  constructor(private fb: FormBuilder,
    private flashMessagesService: FlashMessagesService,
    private router: Router,
    public af: AngularFireDatabase,
    public afAuth: AngularFireAuth,
) {
    this.rForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      'phone': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      'university': [null, Validators.required],
      'educationStatus': [null, Validators.required],
      'courseType': [null, Validators.required],
      'major': [null, Validators.required],
      'year': [null, Validators.required],
      'semester': [null, Validators.required],
      'skill_1': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      'skill_2':"",
      'skill_3': "",
      'skill_4': "",
      'lookingProject': [null, Validators.required],
      'projectType': [null, Validators.required],
      'visaStatus': [null, Validators.required],
      'coverLetter':  [null, Validators.required],
    });
  }

  ngOnInit() {

  }
  onSubmit(value: Students) {
 
      this.afAuth.authState.subscribe(students => {
        if (students) { 
          this.uid=students.uid;
        }
        this.af.object('/students/' + this.uid).update(value);
      })
      
      this.flashMessagesService.show('Student details updated', { cssClass: 'alert-success', timeout: 4000 });
      this.router.navigate(['/student-dashboard']);
    }
  }