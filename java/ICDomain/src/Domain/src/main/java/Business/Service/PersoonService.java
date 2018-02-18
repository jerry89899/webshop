package Business.Service;

import Business.Domain.Persoon.*;
import org.springframework.stereotype.Service;

@Service
public interface PersoonService {

	/**
	 * 
	 * @param id
	 */
	Account getAccount(Long id);

	/**
	 * 
	 * @param id
	 */
	void deleteAccount(Long id);

	/**
	 * 
	 * @param account
	 */
	Account saveAccount(Account account);

}