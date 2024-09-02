package io.github.anatroiano.clientes.model.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Data
@NoArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotEmpty(message = "{campo.login.obrigatorio}")
    @Column(unique = true)
    private String username;

    @Column
    @NotEmpty(message = "{campo.senha.obrigatorio}")
    private String password;
}
