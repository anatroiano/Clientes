package io.github.anatroiano.clientes.exception;

public class UsuarioCadastradoException extends RuntimeException {

    public UsuarioCadastradoException(String login) {
        super("Usuário já cadastrado no sistema com o login " + login);
    }
}
