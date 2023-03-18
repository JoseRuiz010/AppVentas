package com.Sistema.Venta.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Sistema.Venta.Model.Entity.Persona;

public interface IRepositorioPersona extends JpaRepository<Persona, Long> {

}
