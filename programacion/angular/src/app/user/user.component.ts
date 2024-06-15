  import {Component, inject} from '@angular/core';
  import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";
  import {CommonModule, JsonPipe} from "@angular/common";
import { FormsModule } from '@angular/forms';


  @Component({
    selector: 'app-user',
    standalone: true,
    imports: [FormsModule,CommonModule,HttpClientModule, JsonPipe],
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
  })


  export class UserComponent {

    private httpClient = inject(HttpClient);
    protected mascotas: any = [];
    protected mascota: any = null;

    protected id_mascota: number = 0;
    protected nombre: string = '';
    protected especie: string = '';
    protected edad: number = 0;
    protected id_propietario:number =0;

    constructor(){
      this.obtenerMascotas();
    }

    obtenerMascotas() {
      this.httpClient.get('http://localhost:3000/consultar-mascotas').subscribe(resultado => {
        this.mascotas = resultado;
      });
    }
    
    crearMascota() {
      const params = new HttpParams()
        .append('nombre', this.nombre)
        .append('especie',this.especie)
        .append('edad', this.edad)
        .append('id_propietario', this.id_propietario);
  
      this.httpClient.get('http://localhost:3000/crear-mascota', {params}).subscribe((resultado:any) => {
        this.obtenerMascotas();
        this.id_mascota = 0;
        this.nombre = '';
        this.especie =  '';
        this.edad = 0;
        this.id_propietario = 0;
      });
    }
  
    actualizarMascota() {
    const params = new HttpParams()
    .append('id_mascota', this.id_mascota)
    .append('nombre', this.nombre)
    .append('especie',this.especie)
    .append('edad', this.edad)
    .append('id_propietario', this.id_propietario);

    this.httpClient.get('http://localhost:3000/actualizar-mascota', {params}).subscribe(resultado => {
this.obtenerMascotas();
this.id_mascota = 0;
this.nombre = '';
this.especie =  '';
this.edad = 0;
this.id_propietario = 0;
    });
  }

  eliminarMascota(id_mascota: number) {
    const params = new HttpParams()
    .append('id_mascota', id_mascota);

    this.httpClient.get('http://localhost:3000/eliminar-mascota', {params}).subscribe(resultado => {
      this.obtenerMascotas();
    });
  }

  editarMascota(mascota: any) {
    this.id_mascota = mascota.id_mascota;
    this.nombre = mascota.nombre;
    this.especie = mascota.especie;
    this.edad = mascota.edad;
    this.id_propietario = mascota.id_propietario;
  } 
  }
