import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update-component',
  standalone: false,
  styleUrl: './update-component.css',
  templateUrl: './update-component.html',
})
export class UpdateComponent implements OnInit {
  public departamento!:Departamento
  @ViewChild('cajaid') cajaId!:ElementRef
  @ViewChild ('cajanombre')cajaNombre!:ElementRef
  @ViewChild('cajalocalidad')cajaLocalidad!:ElementRef

  constructor(
    private _cdr:ChangeDetectorRef,
    private _service:ServiceDepartamentos,
    private _router:Router,
    private _activeRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
      let id=parseInt(params['id'])
      this._service.findDepartamento(id).subscribe((response)=>{
        this.departamento=response
        this._cdr.detectChanges()
      })
    })
  }

  updateDepartamento():void{
    let id=parseInt(this.cajaId.nativeElement.value)
    let nombre=this.cajaNombre.nativeElement.value
    let localidad=this.cajaLocalidad.nativeElement.value
    let dept=new Departamento(id,nombre,localidad)
    this._service.updateDepartamento(dept).subscribe((response)=>{
      this._router.navigate(['/details',dept.numero,dept.nombre,dept.localidad])
    })
  }
}
