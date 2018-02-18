package Business.Service;

import Business.Domain.Product.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {

	/**
	 * 
	 * @param produt
	 */
	void saveProduct(Product produt);

	/**
	 * 
	 * @param id
	 */
	Product getProduct(Long id);

	/**
	 * 
	 * @param id
	 */
	void deleteProduct(Long id);

	/**
	 * 
	 * @param id
	 */
	Categorie getCategory(Long id);

	/**
	 * 
	 * @param categoryId
	 */
	List<Product> getProductsByCategory(Long categoryId);

}