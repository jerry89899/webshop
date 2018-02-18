package Business.Domain.Persoon;


import Business.Domain.Adres.Adres;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Klant {

	@OneToOne
	@JoinColumn(name = "Adresid")
	Adres WoonAdres;
	@Id
	private Long id;
	private String naam;
	private String afbeelding;

}