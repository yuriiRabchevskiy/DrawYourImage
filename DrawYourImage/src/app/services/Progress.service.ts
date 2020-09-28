import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProgressStatus } from '../model/ProgresModel';

@Injectable()
export class ProgressService {

  private static status: ProgressStatus;
  private static value: number = 0;

  change: Subject<number> = new Subject<number>();
  missionChance$ = this.change.asObservable();

  updateProgress(_value: number) {
    console.log(_value);
    if (ProgressService.value !== _value) {
      this.change.next(_value);
      ProgressService.value = _value;
    }
    // if (_value === 100 && ProgressService.status === ProgressStatus.IN_PROGRESS) {
    //   ProgressService.status = ProgressStatus.DONE;
    // }
  }

  start() {
    ProgressService.status = ProgressStatus.IN_PROGRESS;
    ProgressService.value = 0;
  }

  getStatus(): ProgressStatus {
    return ProgressService.status;
  }
  getProgress(): number {
    return ProgressService.value;
  }
}
