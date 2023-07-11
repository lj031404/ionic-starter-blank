import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public date: string = '';
  public form: FormGroup;
  public minDate: string = '';
  public maxDate: string = '';
  public dateToday: string = '';
  public dateYesterday: string = '';
  public tenDays: string = '';
  public nextYear: string = '';
  public dateValue: any = '';
  public showList: boolean = false;

  constructor(private fb: FormBuilder) {
    this.form = this.createForm();
    this.minDate = new Date().toISOString();
    this.maxDate = (new Date().getFullYear() + 5).toString();
  }

  createForm(): FormGroup {
    return this.fb.group({
      date: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.showList = true;
    this.dateToday = this.minDate;
    this.dateYesterday = this.getNewDate(1, true);
    this.tenDays = this.getNewDate(10, false);
    this.nextYear = this.getNewDate(366, false);
  }

  getNewDate(days: number, previous: boolean) {
    let d = new Date();
    if (previous) {
      d.setDate(d.getDate() - days);
    } else {
      d.setDate(d.getDate() + days);
    }
    return new Date(d).toISOString();
  }
}
