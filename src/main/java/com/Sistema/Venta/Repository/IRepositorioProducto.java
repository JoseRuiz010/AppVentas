package com.Sistema.Venta.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Sistema.Venta.Model.Entity.Producto;

public interface IRepositorioProducto extends JpaRepository<Producto, Long > {

}
