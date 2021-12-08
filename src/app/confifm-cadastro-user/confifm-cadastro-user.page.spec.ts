import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfifmCadastroUserPage } from './confifm-cadastro-user.page';

describe('ConfifmCadastroUserPage', () => {
  let component: ConfifmCadastroUserPage;
  let fixture: ComponentFixture<ConfifmCadastroUserPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfifmCadastroUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfifmCadastroUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
