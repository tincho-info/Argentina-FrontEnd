import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/services/interface/Persona';
import { PersonaService } from 'src/app/services/api-rest/persona.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-about-modal',
  templateUrl: './about-modal.component.html',
  styleUrls: ['./about-modal.component.css']
})
export class AboutModalComponent implements OnInit {

  @Input() id!: number;

  persona!: Persona;
  formulario!: FormGroup
  cerro: boolean = false;
  constructor(public activeModal: NgbActiveModal, private personaService: PersonaService, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      //idpersona: [''],

      acerca: [''],
      //persona: [''],

    })

  }

  ngOnInit(): void {
    this.getById(this.id)
  }

  cerrarModal() {
    this.activeModal.close();
    this.cerro = true;
  }
  getById(id: number) {
    this.personaService.getById(id).subscribe(
      data => {
        this.persona = data;
        console.log(this.persona)
        this.editarForm(this.persona)
      }
    );

  }
  editarForm(abt: any) {
    this.formulario.setValue({
      acerca: abt.acerca,
    });
  }

  actualizarAbout() {
    if (!this.cerro) {
      this.armarPersona()
      console.log(this.persona)
      this.personaService.update(this.id, this.persona).subscribe(
        data => {
          this.cerrarModal()
        }
      );
    }
  }

  armarPersona() {
    this.persona.acerca = this.formulario.value.acerca;
  }

}