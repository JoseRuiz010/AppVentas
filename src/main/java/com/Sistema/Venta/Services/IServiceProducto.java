package com.Sistema.Venta.Services;

import org.springframework.stereotype.Repository;

import com.Sistema.Venta.Model.Entity.Producto;

@Repository
public interface IServiceProducto extends ICrudGenerico<Producto, Long> {

}
