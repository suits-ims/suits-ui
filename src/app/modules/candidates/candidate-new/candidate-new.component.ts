import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CandidateService} from "../../../shared/services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-candidate-new',
  templateUrl: './candidate-new.component.html',
  styleUrls: ['./candidate-new.component.css']
})
export class CandidateNewComponent implements OnInit {

  newCandidate: FormGroup;

  constructor(private formBuilder: FormBuilder, private candidateService: CandidateService, private router: Router) {
  }

  ngOnInit() {
    this.newCandidate = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  onSubmit(candidateData) {
    if (!this.newCandidate.invalid) {
      this.candidateService.addCandidate(candidateData).subscribe(value => this.router.navigate(['/candidates', value]), error => console.log('error', error));
      console.log('Candidate data submitted', candidateData);
    }
  }

  get fields() {
    return this.newCandidate.controls;
  }
}
