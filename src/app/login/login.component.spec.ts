import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule for testing
import { CommonModule } from '@angular/common';  // Import CommonModule
import { RouterModule } from '@angular/router';  // Import RouterModule

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    const routerMock = {
      navigate: jasmine.createSpy('navigate')  // Mock the router's navigate function
    };

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, CommonModule, RouterModule],  // Import necessary modules
      providers: [
        { provide: Router, useValue: routerMock }  // Provide the mock router
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);  // Inject the router
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Check if component is created successfully
  });

  it('should navigate to dashboard on successful login', () => {
    component.username = 'admin';
    component.password = 'admin';
    component.login();  // Call the login method

    expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);  // Verify navigation to dashboard
  });

  it('should show error message on failed login', () => {
    component.username = 'wrongUser';
    component.password = 'wrongPass';
    component.login();  // Call the login method

    expect(component.loginError).toEqual('Identifiant ou mot de passe incorrect.');  // Check error message
  });
});
