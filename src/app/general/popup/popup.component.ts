import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() mensaje: string = "";
  @Output() cerrar = new EventEmitter<void>();


  cerrarPopup() {
    this.cerrar.emit();
    this.exitoso = false
  }

  exitoso: boolean = false;

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]], // Assuming a 10-digit phone number format
      address: ['', Validators.required],
      accept: [false, Validators.requiredTrue]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      emailjs.init("Ci0wROnYKNEOpCFoW");
      const response = await emailjs.send("service_5j3tmmd", "template_8343y6o", {
        name: this.form.value.name,
        mensaje: this.mensaje,
        email: this.form.value.email,
        number: this.form.value.number,
        address: this.form.value.address,
        email_to: "prosofi@javeriana.edu.co",
      });
      this.exitoso = true;

    } else {
      for (const controlName of Object.keys(this.form.controls)) {
        const control = this.form.get(controlName);
        if (control?.invalid) {
          switch (controlName) {
            case 'name':
              alert("El nombre debe tener al menos 3 caracteres");
              break;
            case 'email':
              alert("El correo debe ser valido");
              break;
            case 'number':
              alert("El celular debe contener 10 dígitos");
              break;
            case 'address':
              alert("La dirección de residencia es requerida");
              break;
            case 'accept':
              alert("Debe aceptar la politica de privacidad");
              break;
            default:

              break;
          }
          break;
        }
      }
    }
  }
}