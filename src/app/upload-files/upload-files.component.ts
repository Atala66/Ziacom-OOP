import { Component, OnInit, NgZone } from '@angular/core';

import { UPLOAD_DIRECTIVES } from 'ng2-uploader';

@Component({
  selector: 'upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {
  public Iam: string = ' I am the Upload Files Component!!!';
  // declaramos las props del cmpt subida de imágenes
  public uploadFile: any;
  // prop para recoger imagenes
  public arrayFiles:Array<any>;
  // repasar esta propiedad tiene zona donde hacer drop????
  hasBaseDropZoneOver: boolean = false;

  options: Object = {
    url: 'http://ngx-uploader.com/upload' // URL apunta al servidor donde se va a guardar la imágen
   
  };
  sizeLimit: 2000000

  ngOnInit() { }

  // método de subida de imágenes
// ONE FILE AT TIME
  handleUploadFile(file): void {
    console.log(file);
    // si existe el archivo y hay response, iguala el parseo de la respuesta al archivo
    if (file && file.response) {
      file = JSON.parse(file.response);
      // asignamos file a la prop. declarada anteriormente
      this.uploadFile = file;
     // console.log('Archivo enviado correctamente al servidor');
    }
  }

  // método comprobación pre-subida
  beforeUpload(fileUploading): void {
    if (fileUploading.size > this.sizeLimit) {
      fileUploading.setAbort();
      alert(' File size is too large');
    }

  }





}
