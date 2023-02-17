import { Component, inject } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  _spinerService = inject(SpinnerService);
  isLoading$ = this._spinerService.isLoading$;
}
