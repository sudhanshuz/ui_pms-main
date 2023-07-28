import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { DoctorDashboardComponent } from './doctor-dashboard.component';

describe('DoctorDashboardComponent', () => {
  let component: DoctorDashboardComponent;
  let fixture: ComponentFixture<DoctorDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [DoctorDashboardComponent]
    });
    fixture = TestBed.createComponent(DoctorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
