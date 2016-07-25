import {Component} from '@angular/core';
import {OsbbComponent} from './osbb/osbb.component';



@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [OsbbComponent]
})
export class AppComponent {

}