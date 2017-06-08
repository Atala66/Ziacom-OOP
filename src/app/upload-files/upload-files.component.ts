import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
//import { FileUploader } from '@uniprank/ng2-file-uploader';


@Component({
  selector: 'upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {
   public url;
  /* readUrl(event) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.url = event.target.result;
      console.log(this.url);
    }
    reader.readAsDataURL(event.target.files[0]);
  }
} */

  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: 'http://localhost:10050/upload'
  };
  sizeLimit = 2000000;
 
  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }
 
  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  beforeUpload(uploadingFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }

   readUrl(event) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.url = event.target.result;
      console.log(this.url);
    }
    reader.readAsDataURL(event.target.files[0]);
  }
}


  ngOnInit() { }


}
