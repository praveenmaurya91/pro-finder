import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ProjectProviders } from '../models/projectProviders';
import { Post } from '../models/post';
@Injectable()
export class ProjectProviderService {

  projectProvidersList: FirebaseListObservable<any[]>;
  appliedProjectList: FirebaseListObservable<any[]>;
  projectProvider: FirebaseObjectObservable<any>;
  projectPost: FirebaseObjectObservable<any>;
  projectProviders: ProjectProviders;
  post:Post;
  constructor(
    public af: AngularFireDatabase
  ) {
    this.projectProvidersList = this.af.list('/projectProvider') as FirebaseListObservable<ProjectProviders[]>;
  }

  getProjectProviders() {
    return this.projectProvidersList;
  }

  //get single project provider object
  getProjectProvider(uid: string) {
    this.projectProvider = this.af.object('/projectProvider/'+uid) as FirebaseObjectObservable<ProjectProviders>;
    return this.projectProvider;
  }

  getProjectPost(id: string) {
    this.projectPost = this.af.object('/post/' + id) as FirebaseObjectObservable<Post>;
    return this.projectPost;
  }

  getAppliedProjectList() {
    this.appliedProjectList = this.af.list('/appliedProject/') as FirebaseListObservable<any[]>;
    return this.appliedProjectList;
  }
}
