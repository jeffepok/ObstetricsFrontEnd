import { Component, OnInit } from '@angular/core';
import { hospitalDetails } from './hospitalDetails';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.scss'],
})
export class BiodataComponent implements OnInit {
  form: FormGroup;
  hospitalDetails = hospitalDetails;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
      this.form = this.fb.group({
        serialNumber: [''],
        registrationNumber: ['']})
  }

}
