import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { Ng2UploaderModule, UploadRejected } from 'ng2-uploader';
//import { FileUploader } from '@uniprank/ng2-file-uploader';



@Component({
  selector: 'upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {
  public url;
  public uploadFile: any;
  public hasBaseDropZoneOver: boolean = false;
  public sizeLimit:number = 2000000;
  public allowedMimeType: Array<string> = ['image/png', 'image/gif', 'image/jpeg'];
 // public images:Array<any>;
  public options: Object = {
    url: 'http://localhost:10050/upload',
    filterExtensions: true
   // allowedExtensions: ['image/png', 'image/jpg'] -si descomentamos esta linea no se produce el preview
  };

// maejador de subida
  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }
 
  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 

 // manejador de tamaños pre-subida
  beforeUpload(uploadingFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }


// manejador de rechazos por tipo mime
  handleUploadRejected(){
    console.log(this.allowedMimeType);
    if(!this.allowedMimeType)
      console.log('rechazado');

  }

// manejador de lectura y preview de la imagen
   readUrl(event) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.url = event.target.result;
     // console.log(this.url);
    }
    reader.readAsDataURL(event.target.files[0]);
  }
}


  ngOnInit() { }


}
