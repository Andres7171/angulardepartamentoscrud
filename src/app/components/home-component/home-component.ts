import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit {
  public departamentos!: Departamento[];

  constructor(
    private _service: ServiceDepartamentos,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadDepartamentos()
  }

  loadDepartamentos():void{
    this._service.getDepartamentos().subscribe((response) => {
      this.departamentos = response;
      this._cdr.detectChanges();
    });
  }
  deleteDepartamento(id: number): void {
    this._service.deleteDepartamento(id).subscribe((response) => {
      this._cdr.detectChanges();
      this.loadDepartamentos()
    });
  }
}
