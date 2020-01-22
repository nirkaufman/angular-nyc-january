import {Component} from '@angular/core';
import {CardTemplatesType} from './type';


@Component({
  selector: 'app-root',
  template: `
    <div class="container p-3">
      <h1>Angular Dynamic Views</h1>
      <app-card>

      <!-- Provide an optional custom header template -->
      <div *appCardTemplate=${CardTemplatesType.Header} class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
          </li>
         </ul>
       </div>

        <form>
            <!-- the appCardTrigger connect to the CardComponent -->
            <input appCardTrigger
                   required
                   name="avalue"
                   [(ngModel)]="value"
                   class="form-control mb-5">
        </form>
      </app-card>
    </div>
  `,
})
export class AppComponent {
  value: string;
}
