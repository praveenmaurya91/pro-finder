import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../../../router.animations';
import { Students } from '../../../models/students';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css',],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class StudentSignupComponent implements OnInit {

  error:any;
  email: string;
  password: string;
  confirmPassword: string;
  correctPassword: boolean;
  valueUid: string;
  students: Students={

    email: "",
    password: "",
   
  };

  constructor(
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    public af: AngularFireDatabase,
    public afAuth: AngularFireAuth

  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.password == this.confirmPassword) {
      this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
        .then((value) => { 
          console.log("success",value.uid);
          this.valueUid=value.uid;
          this.af.list('/students').update(this.valueUid,
            this.students = { email: this.email, 
              password: this.password }
          );
          this.flashMessagesService.show('New user registered', { cssClass: 'alert-success', timeout: 4000 });
          this.router.navigate(['/student-dashboard']);
        })
        .catch((err) => {
          this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 4000 });
          this.router.navigate(['/student-signup']);
          console.log(err);
        });
      this.correctPassword = true;
    }
    else {
      this.flashMessagesService.show('Password and Password Confirmation does not contain the same value', { cssClass: 'alert-danger', timeout: 4000 });
    }  
  }
}
