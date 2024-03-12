import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonService } from '../../services/common.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly userService = inject(UserService);
  private readonly commonService = inject(CommonService);
  private readonly router = inject(Router);
  userName!: string;
  password!: any;

  ngOnInit() {}

  validateUserLogin() {
    const payload = { username: this.userName, password: this.password };
    this.userService.validateUser(payload).subscribe({
      next: (res: any) => {
        const token: any = this.commonService.decodeJWTToken(res.token);
        console.log('token-login', token);
        if (token) {
          this.commonService.createSession('user-session', token);
          this.router.navigate(['/home']);
        }
      },
      error: (err: any) => {
        console.log('error', err);
      },
    });
  }
}
