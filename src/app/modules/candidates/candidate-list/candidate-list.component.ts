import {Component, OnInit} from '@angular/core';
import {Candidate} from "../../../shared/models/candidate";
import {CandidateService} from "../../../shared/services";

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  candidates: Candidate[] = [
    {
      id: 1,
      firstName: "Siarhei",
      lastName: "Blashuk",
      photoUrl: "https://avatars3.githubusercontent.com/u/22153744?s=400&u=5a3db2d59c76f9de0f8dca2a737b40138e88ff02&v=4",
      title: "Java Software Engineer"
    },
    {
      id: 2,
      firstName: "Bob",
      lastName: "Marley",
      photoUrl: "https://s.france24.com/media/display/fef8d424-0aab-11e9-b7ef-005056a964fe/w:1240/p:16x9/bob-marley-musique.jpg",
      title: "Singer-songwriter"
    },
  ];

  constructor(private candidateService: CandidateService) {
    candidateService.getCandidates().subscribe(value => console.log('kek', value), error => console.log('error', error));
  }

  ngOnInit() {
  }

}
