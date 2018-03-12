package DataAccess.DataService;

import Business.Domain.Product.Categorie;
import Business.Domain.Product.Product;
import Business.Service.ProductService;
import DataAccess.Persistence.CategorieDAO;
import DataAccess.Persistence.ProductDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductDAO productDao;

    @Autowired
    CategorieDAO categoryDao;

    @Override
    public void saveProduct(Product product) {
        productDao.save(product);
    }

    @Override
    public Product getProduct(Long id) {
        return productDao.getOne(id);
    }

    @Override
    public void deleteProduct(Long id) {
        productDao.delete(id);
    }

    @Override
    public Categorie getCategory(Long id) {
        return categoryDao.getOne(id);
    }

    @Override
    public List<Product> getProductsByCategory(Long categoryId) {
        return null;
    }
}