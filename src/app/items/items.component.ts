import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [];
  selectedItem: any = null;
  newItem: any = { "solicitudId": 0,
        "estadoId": 0,
        "fechaPrestamo": "",
        "usuarioCreadorId": 0 };
  apiError: string | null = null;
  apiSuccess: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  createItem(): void {
    this.apiService.addItem(this.newItem).subscribe({
      next: (result) => {
        this.newItem = {
          solicitudId: 0,
          estadoId: 0,
          fechaPrestamo: "",
          usuarioCreadorId: 0
        };
        this.apiError = null;
        this.apiSuccess = "Se registro correctamente";
      },
      error: (error) => {
        this.apiError = error.error?.message || 'Ocurrió un error al enviar el formulario. Inténtalo de nuevo más tarde.';
        this.apiSuccess = null;
      }
    });
  }

}
