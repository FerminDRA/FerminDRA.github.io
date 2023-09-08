import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  constructor() { }


  certifications : Array<any> = [];
  ngOnInit(): void {
    let cert1 ={
      cerfificacion: "Doctorado honorario en Ingenieria de software en la Universidad Veracruzana"
  };

  let cert2 ={
    cerfificacion: "Certificacion como Java developer"
  };

  let cert3 ={
    cerfificacion: "Certificacion como Proyect Management por el PMI(Proyect Management Institute)"
  };

  let cert4 ={
    cerfificacion: "Certificacion en Python de Kaggle"
  };

  let cert5 ={
    cerfificacion: "Certificacion en Pandas de Kaggle"
  };

this.certifications.push(cert1);
this.certifications.push(cert2);
this.certifications.push(cert3)
this.certifications.push(cert4)
this.certifications.push(cert5)
  }

}
