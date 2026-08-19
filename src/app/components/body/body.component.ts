import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  tituloSistema = 'SISTEMA DE INVENTARIO';
  nombreTienda = 'TechStore Guatemala';
  busqueda = '';
  mostrarInventario = true;
  productoSeleccionado: any = null;

  productos = [
    {
      id: 1,
      nombre: 'Laptop Lenovo',
      categoria: 'Computadoras',
      precio: 6500,
      stock: 5,
      activo: true,
    },
    {
      id: 2,
      nombre: 'Mouse Logitech',
      categoria: 'Accesorios',
      precio: 175,
      stock: 0,
      activo: true,
    },
    {
      id: 3,
      nombre: 'Teclado Mecánico',
      categoria: 'Accesorios',
      precio: 450,
      stock: 8,
      activo: true,
    },
    {
      id: 4,
      nombre: 'Monitor Samsung 24"',
      categoria: 'Monitores',
      precio: 1850,
      stock: 2,
      activo: true,
    },
    {
      id: 5,
      nombre: 'Webcam Logitech',
      categoria: 'Accesorios',
      precio: 550,
      stock: 0,
      activo: false,
    },
  ];

  get totalProductos(): number {
    return this.productos.length;
  }

  get productosDisponibles(): number {
    return this.productos.filter((producto) => producto.stock > 0).length;
  }

  get productosAgotados(): number {
    return this.productos.filter((producto) => producto.stock === 0).length;
  }

  get productosFiltrados() {
    const texto = this.busqueda.trim().toLowerCase();

    if (!texto) {
      return this.productos;
    }

    return this.productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(texto)
    );
  }

  cambiarVisibilidad(): void {
    this.mostrarInventario = !this.mostrarInventario;
  }

  seleccionarProducto(producto: any): void {
    this.productoSeleccionado = producto;
  }

  aumentarStock(producto: any): void {
    if (!producto.activo) {
      return;
    }

    producto.stock += 1;
  }

  disminuirStock(producto: any): void {
    if (!producto.activo || producto.stock === 0) {
      return;
    }

    producto.stock -= 1;
  }

  getEstadoStock(producto: any): string {
    if (producto.stock > 3) {
      return 'Stock suficiente';
    }

    if (producto.stock > 0 && producto.stock <= 3) {
      return '¡Pocas unidades!';
    }

    return 'Agotado';
  }

  getEstadoActivo(producto: any): string {
    return producto.activo ? 'Producto activo' : 'Producto deshabilitado';
  }

  getEstadoDetalle(producto: any): string {
    return producto.stock === 0 ? 'Agotado' : 'Disponible';
  }
}