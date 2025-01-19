import { Component } from '@angular/core';
import { TooltipDirective } from '../../utilities/directives/tooltip.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee,faCube } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TooltipDirective,
    FontAwesomeModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
 cube=faCube;
}