import { Component } from '@angular/core';

@Component({
    selector: 'app-tu-componente',
    templateUrl: './tu-componente.component.html',
    styleUrls: ['./tu-componente.component.css']
})
export class TuComponenteComponent {
    correoElectronico: string = 'haylandsebastian5@hotmail.com';

    copiarCorreo() {
        const el = document.createElement('textarea');
        el.value = this.correoElectronico;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Correo copiado al portapapeles: ' + this.correoElectronico);
    }
}

