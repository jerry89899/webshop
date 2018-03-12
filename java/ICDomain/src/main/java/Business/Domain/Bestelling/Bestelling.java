package Business.Domain.Bestelling;


import Business.Domain.Adres.Adres;

import javax.persistence.*;

@Entity
public class Bestelling {

	@ManyToOne
	@JoinColumn(name = "Adresid")
	private Adres AfleverAdres;
	@Id
	private Long id;

	public Adres getAfleverAdres() {
		return AfleverAdres;
	}

	public void setAfleverAdres(Adres afleverAdres) {
		AfleverAdres = afleverAdres;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
}