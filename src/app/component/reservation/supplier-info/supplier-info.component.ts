import { Component } from '@angular/core';

@Component({
  selector: 'app-PhotoUploader',
  templateUrl: './PhotoUploader.component.html',
  styleUrls: ['./PhotoUploader.component.scss']
})
export class SupplierInfoComponent {
  imageUrl!: string;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
