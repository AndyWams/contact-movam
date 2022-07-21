import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  isBusy: boolean = false;
  public contactForm: FormGroup = new FormGroup({});
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.contactForm = this.fb.group({
      name: [null, Validators.required],
      mail: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required],
    });
  }

  ngOnInit(): void {}
  get value() {
    return this.contactForm.getRawValue();
  }
  onSubmit() {
    this.isBusy = true;

    if (this.contactForm.invalid) {
      this.toastr.info('Please enter a valid info', 'Message', {
        timeOut: 3000,
      });
      this.isBusy = false;
      return;
    }
    if (this.contactForm.valid) {
      this.isBusy = false;
      this.toastr.success('Data submitted successfully', 'Message', {
        timeOut: 3000,
      });
      this.router.navigate(['/home'], { state: { data: this.value } });
    }
  }
}
