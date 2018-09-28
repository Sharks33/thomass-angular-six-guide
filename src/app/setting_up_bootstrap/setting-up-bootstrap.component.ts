import { Component } from "@angular/core";

@Component({
    selector: 'app-setting-up-bootstrap',
    templateUrl: './setting-up-bootstrap.component.html'
})
export class SettingUpBootstrapComponent {
    name = "Thomas";
    ngModelString = "[(ngModel)]";
    formsModuleString = "{ FormsModule }";
    openBracketString = "{"
    closeBracketString = "}"
}