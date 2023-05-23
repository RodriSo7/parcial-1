import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  name: string = '';
  editingName: boolean = false;
  showWelcomeMessage: boolean = true;
  showNameList: boolean = false;
  recentNames: string[] = [];

  toggleEditingName() {
    this.editingName = !this.editingName;
  }

  updateWelcomeMessage() {
    if (this.name.trim() !== '') {
      if (!this.recentNames.includes(this.name)) {
        this.recentNames.unshift(this.name);
        if (this.recentNames.length > 10) {
          this.recentNames.pop();
        }
      }
      this.showWelcomeMessage = true;
      this.toggleEditingName();
    }
  }

  toggleNameList() {
    this.showNameList = !this.showNameList;
  }
}
