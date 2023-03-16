package com.Sistema.Venta.Model.Entity;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Usuario {
    private Long id;
    private String username;
    private String password;

    public Usuario(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
