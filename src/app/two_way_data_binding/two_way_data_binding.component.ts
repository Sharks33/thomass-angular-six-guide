import { Component } from "@angular/core";

@Component({
    selector: 'app-two-way-data-binding',
    templateUrl: './two_way_data_binding.component.html'
})
export class TwoWayDataBindingComponent {
    name = "Thomas";
    ngModelString = "[(ngModel)]";
    formsModuleString = "{ FormsModule }";
    openBracketString = "{"
    closeBracketString = "}"
}