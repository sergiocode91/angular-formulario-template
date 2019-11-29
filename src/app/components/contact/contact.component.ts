import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	usuario:Object = {
		nombre: null,
		apellido: null,
		correo: null,
		pais: ''
	}
	paises:Object = [{
		codigo: 'CRI',
		nombre: 'Costa Rica'
	},
	{
		codigo: 'ESP',
		nombre: 'España'
	}]

	constructor() { }

	ngOnInit() {
	}

	guardar( form: NgForm) {
		console.log('NgForm:', form);
		console.log('Valor:', form.value);
		console.log('Usuario:', this.usuario);
	} 

}
