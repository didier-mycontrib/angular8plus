import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-with-steps',
  templateUrl: './with-steps.component.html',
  styleUrls: ['./with-steps.component.scss']
})
export class WithStepsComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
 
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      address: ['', Validators.required]
    });
  }

  getData(){
    return { firstStep : this.firstFormGroup.value ,
             secondStep : this.secondFormGroup.value };
  }

}
