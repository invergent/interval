import { TimerHome } from './timer.page';

describe('HomePage', () => {
  let component: TimerHome;

  beforeEach(() => {
    component = new TimerHome();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
