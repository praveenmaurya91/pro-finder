import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { moveIn, fallIn } from '../../../router.animations';
import { ProjectProviders } from '../../../models/projectProviders';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-provider-signup',
  templateUrl: './project-provider-signup.component.html',
  styleUrls: ['./project-provider-signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class ProjectProviderSignupComponent implements OnInit {
  
  valueUid: string;
  projectProviders: ProjectProviders = {
    email:"",
    password:"",
  };

  email: string;
  password: string;
  confirmPassword: string;
  correctPassword: boolean;
  constructor(
    private authService: AuthService,
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
          console.log("success", value.uid);
          this.valueUid = value.uid;
          this.af.list('/projectProvider').update(this.valueUid, 
          this.projectProviders = { email: this.email, password: this.password });
          this.flashMessagesService.show('New user registered', { cssClass: 'alert-success', timeout: 4000 });
          this.router.navigate(['/project-provider-dashboard']);
        })
        .catch((err) => {
          this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 4000 });
          this.router.navigate(['/student-signup']);
        });
      this.correctPassword = true;
    }
    else {
      this.flashMessagesService.show('Password and Password Confirmation does not contain the same value', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }

}
