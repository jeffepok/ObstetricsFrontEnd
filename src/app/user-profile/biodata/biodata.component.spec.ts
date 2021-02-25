import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BiodataComponent } from './biodata.component';

describe('BiodataComponent', () => {
  let component: BiodataComponent;
  let fixture: ComponentFixture<BiodataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiodataComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BiodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
