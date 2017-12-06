import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../../../router.animations';
import { StudentService } from '../../../services/student.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class StudentLoginComponent implements OnInit {

  email: string;
  password: string;
  constructor(
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    public afAuth: AngularFireAuth,
    public studentService: StudentService 
  ) { }

  ngOnInit() {
  }

  onSubmit() {
   try{

    this.studentService.getStudents().subscribe(students => {

          for(let items of students){

            if (this.email == items.email && this.password == items.password) {
              this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
              .then((res) => {
                this.flashMessagesService.show('You are logged in', { cssClass: 'alert-success', timeout: 4000 });
                this.router.navigate(['/student-dashboard']); 
              })
              .catch((err) => {
                this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 4000 });
                this.router.navigate(['/student-login']);
              });
            return items;
          }
        }
          this.flashMessagesService.show('Invalid Login', { cssClass: 'alert-danger', timeout: 4000 });
          this.router.navigate(['/student-login']);
    });
    }
    catch(exception){
      this.flashMessagesService.show(exception.message, { cssClass: 'alert-danger', timeout: 4000 });
      this.router.navigate(['/student-login']);
    }
  }
}




