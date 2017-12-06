import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Students } from '../models/students';
import { Post } from '../models/post';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppliedProject } from '../models/appliedProject';

@Injectable()
export class StudentService {
  studentsData: Students;
  post: Post;
  uid: string;
  id: string;
  //authUid: string;
  //hasAuth: boolean = true;
  students: FirebaseListObservable<any[]>;
 
  student: FirebaseObjectObservable<any>;
  projectPosts: FirebaseListObservable<any[]>;
  projectPost: FirebaseObjectObservable<any>;
  userId: string;
  constructor(
    public af: AngularFireDatabase,
    public router: Router,
    public route: ActivatedRoute,
    public authService: AuthService 
  ) {
      this.students = this.af.list('/students') as FirebaseListObservable<Students[]>;
  }


  //get the students
  getStudents(){
    return this.students;
  }
getStudentsList(){
  this.students = this.af.list('/students/') as FirebaseListObservable<any[]>;
  return this.students;
}

  //get single student object

  getStudent() {
    this.student = this.af.object('/students/') as FirebaseObjectObservable<Students>;
    return this.student;
  }

  getStudentData(uid:string) {
    this.student = this.af.object('/students/'+uid) as FirebaseObjectObservable<Students>;
    return this.student;
  }
  getStudentRequestData(id: string) {
    this.student = this.af.object('/appliedProject/' + id) as FirebaseObjectObservable<AppliedProject>;
    return this.student;
  }
  getStudentData2(uid: string, id: string) {
    this.student = this.af.object('/students/' + uid+'/'+id) as FirebaseObjectObservable<Students>;
    return this.student;
  }

  //get project details
    getPost(uid: string, id: string) {
    this.projectPost = this.af.object('/post/' + uid + '/' + id) as FirebaseObjectObservable<Post>;
    return this.projectPost;
  }

    //get project all post
    getPosts() {
      this.projectPosts = this.af.list('/post/') as FirebaseListObservable<Post[]>;
      return this.projectPosts;
    }
  //create new student into the database
  newStudent(student: Students) {
    this.students.push(student);
  }

  //get student data from uid and key
  getStudentData3(): FirebaseObjectObservable<Students> {
  this.student = this.af.object('/students/${this.uid}');
  return this.student;
  }
  //update student data
  updateStudent(uid: string,studentsData: Students) {
    return this.students.update(uid, studentsData);
    //return this.af.list('/students').update(uid, studentsData)
  }
 // updateClient(id: string, client: Client) {
  //  return this.clients.update(id, client);
  //}
}
