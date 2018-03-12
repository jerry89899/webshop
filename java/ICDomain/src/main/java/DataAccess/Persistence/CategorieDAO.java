package DataAccess.Persistence;

import Business.Domain.Product.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategorieDAO extends JpaRepository<Categorie, Long> {

}
