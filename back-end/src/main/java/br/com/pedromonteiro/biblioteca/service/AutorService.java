package br.com.pedromonteiro.biblioteca.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import jakarta.persistence.EntityNotFoundException;
import br.com.pedromonteiro.biblioteca.dto.AutorDto;
import br.com.pedromonteiro.biblioteca.model.AutorEntity;
import org.springframework.beans.factory.annotation.Autowired;
import br.com.pedromonteiro.biblioteca.repository.AutorRepository;

@Service
public class AutorService {

    @Autowired
    private AutorRepository repository;

    public AutorEntity createAuthor(AutorDto dto) {
        AutorEntity authorEntity = AutorEntity.builder()
                .nome(dto.getNome())
                .nacionalidade(dto.getNacionalidade())
                .build();

        return repository.save(authorEntity);

    }

    public List<AutorEntity> getAllAuthors() {
        return repository.findAll();

    }

    public Optional<AutorEntity> getAuthorById(Long id) {
        return repository.findById(id);
    }

    public AutorEntity updateAuthor(Long id, AutorDto dto) {
        AutorEntity author = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Autor não encontrado com id: " + id));

        if (dto.getNome() != null) {
            author.setNome(dto.getNome());
        }
        if (dto.getNacionalidade() != null) {
            author.setNacionalidade(dto.getNacionalidade());
        }

        return repository.save(author);

    }

    public AutorEntity removeAuthor(Long id) {
        AutorEntity removedAuthor = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Autor não encontrado com id: " + id));

        repository.deleteById(id);

        return removedAuthor;

    }
}
