import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PregnancyInvestigationsComponent } from './pregnancy-investigations.component';

describe('PregnancyInvestigationsComponent', () => {
  let component: PregnancyInvestigationsComponent;
  let fixture: ComponentFixture<PregnancyInvestigationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregnancyInvestigationsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PregnancyInvestigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
