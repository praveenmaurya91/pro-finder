import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectProviders } from '../../../models/projectProviders';
import { moveIn, fallIn, moveInLeft } from './router.animation';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-project-provider-details',
  templateUrl: './project-provider-details.component.html',
  styleUrls: ['./project-provider-details.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class ProjectProviderDetailsComponent implements OnInit {

  rForm: FormGroup;
  uid: string;
  projectProviders: ProjectProviders = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    position: "",
    expertise: "",
    //experience: ['No Exerience', '0-1', '1-3', '3-5', '5-10', '10+'],
  };
 

  constructor(private fb: FormBuilder,
    private flashMessagesService: FlashMessagesService,
    private router: Router,
    public af: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.rForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      'phone': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      'organization': [null, Validators.required],
      'position': [null, Validators.required],
     // 'experience': [null, Validators.required],
      'expertise': [null, Validators.required],
    });
  }

  ngOnInit() {

  }
  onSubmit(value: ProjectProviders) {

    this.afAuth.authState.subscribe(projectProvider => {
      if (projectProvider) {
        this.uid = projectProvider.uid;
      }
      this.af.object('/projectProvider/' + this.uid).update(value);
    })

    this.flashMessagesService.show('Project Provider details updated', { cssClass: 'alert-success', timeout: 4000 });
    this.router.navigate(['/project-provider-dashboard']);
  }

}
