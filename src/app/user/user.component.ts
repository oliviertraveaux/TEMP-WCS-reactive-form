import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {User} from "../model/User";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  private formBuilder = inject(FormBuilder)

  user!: User;
  public userForm = this.formBuilder.group({
    username: ['', Validators.required],
    credentials: this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    }),
    address: this.formBuilder.group({
      street: ['', Validators.required],
      postCode: ['', Validators.required],
      city: ['', Validators.required],
    }),
  })

  onSubmit() {
    const { username, credentials, address } = this.userForm.value;

    const credentialsEmail = credentials?.email;
    const credentialsPassword = credentials?.password;

    const addressStreet = address?.street;
    const addressPostCode = address?.postCode;
    const addressCity = address?.city;

    this.user = new User(
      username!,
      {
        email: credentialsEmail!,
        password: credentialsPassword!
      },
      {
        street: addressStreet!,
        postCode: addressPostCode!,
        city: addressCity!
      }
    );
    console.log(this.user);
  }

}
