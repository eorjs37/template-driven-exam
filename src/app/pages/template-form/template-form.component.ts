import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(userForm: NgForm) {}

  onUserForm2Submit(user: any) {
    console.log(user);
    if (user.password.password1 !== user.password.password2) {
      console.log('비밀번호가 일치하지 않습니다.');
    }
  }
}
