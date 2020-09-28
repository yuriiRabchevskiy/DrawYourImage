import { Component, OnDestroy } from '@angular/core';
import { ProgressService } from 'src/app/services/Progress.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnDestroy {
  value: number = 0;
  subscription: Subscription;

  constructor(public progress: ProgressService) {
    this.subscription = progress.missionChance$.subscribe(
      it => {
        this.value = it;
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
