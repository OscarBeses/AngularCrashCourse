import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubFollowersService extends DataService {

  constructor(http: HttpClient) {
    super(http);
    this.url = 'https://api.github.com/users/mosh-hamedani/followers';
  }
}
