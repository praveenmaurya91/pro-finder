import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { StudentService } from '../../services/student.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  studentLoggedIn: boolean;
  loggedInUser: string;
  authUid: string;
  showRegister: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    public af: AngularFireDatabase,
    public studentService: StudentService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
        this.authUid=auth.uid;
        //checking current student is valid and if its valid then show student edit otherwise project provider edit
        this.studentService.getStudents().subscribe(students => {
          for (var items of students) {
            if (this.authUid == items.$key) {
              this.studentLoggedIn = true;
            }
          }
        });
      } else {
        this.isLoggedIn = false;
      }
    }); 
}
  onLogoutClick() {
    this.authService.logout();
    this.flashMessagesService.show('You are logged out', { cssClass: 'alert-success', timeout: 4000 });
    this.router.navigate(['/']);
  }
}


