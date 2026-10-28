import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-component',
  standalone: false,
  styleUrl: './details-component.css',
  templateUrl: './details-component.html',
})
export class DetailsComponent implements OnInit {
  public departamento!: Departamento;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      let nombre = params['nombre'];
      let localidad = params['localidad'];
      this.departamento = new Departamento(id, nombre, localidad);
      this._cdr.detectChanges();
    });
  }
}
