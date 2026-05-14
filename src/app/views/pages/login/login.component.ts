import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardModule, ButtonModule, GridModule, FormModule } from '@coreui/angular';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardGroupComponent,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowComponent
} from '@coreui/angular';
import {IconDirective} from '@coreui/icons-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CardModule,
    ButtonModule,
    GridModule,
    FormModule,ContainerComponent, RowComponent, ColComponent, CardGroupComponent, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post<any>('http://localhost:8080/auth/login', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res: any) => {
        console.log('Login OK', res);
        // redirecionar para dashboard
      },
      error: (err: any) => {
        console.error('Erro no login', err);
      }
    });
  }
}
