package io.github.anatroiano.clientes.model.repository;

import io.github.anatroiano.clientes.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> { // integer = tipo chave primaria

}
