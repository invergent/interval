import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { SignupData, emailRegex } from '../shared';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor(
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message, duration: 2000
    });
    toast.present();
  }

  checkForInvalidFields(form) {
    const invalidFields = Object.keys(form.value).reduce((acc, item) => {
      const invalid = form.controls[item].invalid;
      if (!invalid) return acc;
      if (!acc) {
        acc = item;
      } else {
        acc += `, ${item}`;
      }
      return acc;
    }, '');
    return `Invalid fields: ${invalidFields}`;
  }

  validateFormData(formValues: SignupData) {
    const { password, confirmPassword, email } = formValues;
    const errors = Object.keys(formValues).reduce((acc, item) => {
      if (item.length < 2) acc.push(`${item} too short.`);
      if (item === 'email' && !emailRegex.test(email)) acc.push('email address is invalid');
      if (item === 'password') {
        if (password.length < 6) acc.push('Password must be at least 6 characters');
        if (password !== confirmPassword) acc.push('Passwords do not match');
      }
      return acc;
    }, []);

    return errors;
  }

  handleSubmit(form) {
    if (form.invalid) {
      const message = this.checkForInvalidFields(form)
      return this.presentToast(message);
    }

    const errors = this.validateFormData(form.value)
    if (errors.length) return this.presentToast(`Errors: ${errors}`);

    return this.router.navigate(['/timer'])
  }
}
