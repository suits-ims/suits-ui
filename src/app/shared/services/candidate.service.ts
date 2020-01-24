import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  suitsApiUrl: string;

  constructor(private http: HttpClient) {
    this.suitsApiUrl = environment.suitsApiUrl;
  }

  getCandidates() {
    console.log("Lol");
    return this.http.get(this.suitsApiUrl + '/candidates');
  }
}
