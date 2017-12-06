import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router} from '@angular/router';
import { moveIn, fallIn } from '../../../router.animations';
import { ProjectProviders } from '../../../models/projectProviders';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProjectProviderService } from '../../../services/project-provider.service';

@Component({
  selector: 'app-project-provider-login',
  templateUrl: './project-provider-login.component.html',
  styleUrls: ['./project-provider-login.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})

export class ProjectProviderLoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    public afAuth: AngularFireAuth,
    public projectProviderService: ProjectProviderService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
      try { 
        this.projectProviderService.getProjectProviders().subscribe(projectProvider => {

          for (let items of projectProvider ) {

            if (this.email == items.email && this.password == items.password) {

              this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
                .then((res) => {
                  this.flashMessagesService.show('You are logged in', { cssClass: 'alert-success', timeout: 4000 });
                  this.router.navigate(['/project-provider-dashboard']);
                })
                .catch((err) => {
                  this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 4000 });
                  this.router.navigate(['/project-provider-login']);
                });
              return items;
             }
          }
          this.flashMessagesService.show('Invalid Login', { cssClass: 'alert-danger', timeout: 4000 });
          this.router.navigate(['/project-provider-login']); 
        });
      }
    catch (exception) {
      this.flashMessagesService.show(exception.message, { cssClass: 'alert-danger', timeout: 4000 });
      this.router.navigate(['/student-login']);
      console.log(exception);
    }
  } 
}



