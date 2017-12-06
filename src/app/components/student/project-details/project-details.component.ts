import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models/post';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectProviderService } from '../../../services/project-provider.service';
import { moveIn, fallIn, moveInLeft } from './router.animation';
import { AngularFireAuth } from 'angularfire2/auth';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class ProjectDetailsComponent implements OnInit {
  id: string;
  uid:string;
  post: Post;
  allreadyApplied:boolean;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  university: string;
  educationStatus: string;
  courseType: string;
  major: string;
  year: string;
  semester: string;
  skill_1: string;
  skill_2: string;
  skill_3: string;
  skill_4: string;
  lookingProject: string;
  projectType: string;
  visaStatus: string;
  coverLetter: string;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public projectProviderService: ProjectProviderService,
    private flashMessagesService: FlashMessagesService,
    public af: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public studentService: StudentService 
  ) {}
  

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.projectProviderService.getProjectPost(this.id).subscribe(students => {
      this.post = students;
    });

    this.afAuth.authState.subscribe(students => {
      if (students) {
        this.uid = students.uid;
      }
    });

    //get applied project list
    this.projectProviderService.getAppliedProjectList().subscribe(appliedProject => {
      appliedProject = appliedProject;
    });

  }

  onSubmit(){
   
    //checking student record under students collection
    this.studentService.getStudents().subscribe(students => {
      for (let items of students) {
        if (this.uid == items.$key) {
          this.firstName = items.firstName
          this.lastName = items.lastName
          this.email = items.email
          this.university = items.university
          this.educationStatus = items.educationStatus
          this.courseType = items.courseType
          this.major = items.major
          this.year = items.year
          this.semester = items.semester
          this.skill_1 = items.skill_1
          this.skill_2 = items.skill_2
          this.skill_3 = items.skill_3
          this.skill_4 = items.skill_4
          this.lookingProject = items.lookingProject
          this.projectType = items.projectType
          this.visaStatus = items.visaStatus
          this.coverLetter = items.coverLetter
          this.phone = items.phone
        }
      }
    }); 
    
    //checking under the applied project
    this.projectProviderService.getAppliedProjectList().subscribe(appliedProject => {
      for (let items of appliedProject) {
        if ( this.uid==items.userUid && this.post.$key==items.projectKey) { 
          
         
          this.allreadyApplied = true;
          return items; 
        }                                                                       
      } 
    });

      if(this.allreadyApplied!==true){
          this.af.list('/appliedProject/').push({
            userUid: this.uid,
            projectKey: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            university: this.university,
            courseType: this.courseType,
            year: this.year,
            skill_1: this.skill_1,
            skill_3: this.skill_3,
            skill_4: this.skill_4,
            lookingProject: this.lookingProject,
            visaStatus: this.visaStatus,
            email: this.email,
            educationStatus: this.educationStatus,
            major: this.major,
            semester: this.semester,
            skill_2: this.skill_2,
            phone: this.phone,
            projectType: this.projectType,
            coverLetter: this.coverLetter,
            //project details
            projectName: this.post.projectName,
            projectDescription: this.post.projectDescription,
            paidOrUnpaid: this.post.paidOrUnpaid,
            projectDuration: this.post.projectDuration,
            projectLocation: this.post.projectLocation,
            projectRequiredSkill_1: this.post.projectRequiredSkill_1,
            projectRequiredSkill_2: this.post.projectRequiredSkill_2,
            projectRequiredSkill_3: this.post.projectRequiredSkill_3,
            projectRequiredSkill_4: this.post.projectRequiredSkill_4,
            projectTypes: this.post.projectType,
            studentMajor: this.post.studentMajor,
            studentSemester: this.post.studentSemester,
            studentYear: this.post.studentYear
          });
          this.flashMessagesService.show('You have successfully applied', { cssClass: 'alert-success', timeout: 4000 });
          this.router.navigate(['/student-dashboard']);
         }
         else{
          this.flashMessagesService.show('You have allready applied', { cssClass: 'alert-danger', timeout: 4000 });
          this.router.navigate(['/project-details/:id']);  
         }
      }     
}

