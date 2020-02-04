import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Candidate} from "../models/candidate";

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  suitsApiUrl: string;

  constructor(private http: HttpClient) {
    this.suitsApiUrl = environment.suitsApiUrl;
  }

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.suitsApiUrl + '/candidates');
  }

  getCandidate(id: Number): Observable<Candidate> {
    return this.http.get<Candidate>(this.suitsApiUrl + '/candidates/' + id);
  }
}
