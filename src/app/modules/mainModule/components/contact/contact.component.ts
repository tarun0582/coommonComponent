import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',

})
export class ContactComponent {
  title = 'task';
  items:any=[]
  number:string='file'
  numberPlaceholder:string='enter any number' 
  addItem(newItem: string) {
      this.items.push(newItem);
    }
   
  
}
