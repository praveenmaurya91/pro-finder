import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { moveIn, fallIn, moveInLeft } from './router.animation';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as _ from 'lodash';
@Component({
  selector: 'app-project-provider-request',
  templateUrl: './project-provider-request.component.html',
  styleUrls: ['./project-provider-request.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class ProjectProviderRequestComponent implements OnInit {
  projectRequestDetails: any;
  projectRequestDetails2: any[];
  uid: string;

  constructor(
    private db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) { }
 
  ngOnInit() {
   
       //checking current user project
         this.db.list('/post').subscribe(post => {
           for(let postItems of post){
             if(postItems.uid==this.uid){
               this.db.list('/appliedProject').subscribe(appliedProject => {
                 for(let items of appliedProject){
                   if (items.projectKey == postItems.$key) { 
                     this.projectRequestDetails2 =items;                     
                    this.db.object('/projectRequest/'+this.uid+'/'+items.$key).update(this.projectRequestDetails2);     
                   }         
                 }  
               });
             }
           }
        });

         //checking and displaying data
         this.afAuth.authState.subscribe(projectProvider => {
           if (projectProvider) {
             this.db.list('projectRequest/' + projectProvider.uid).subscribe(project => {
               this.projectRequestDetails = project;
             });
             this.uid = projectProvider.uid;
           }
         });
    }    
}
