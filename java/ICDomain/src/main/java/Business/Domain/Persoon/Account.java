package Business.Domain.Persoon;


import Business.Domain.Adres.Adres;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
public class Account {

	@ManyToOne
	@JoinColumn(name = "Adresid")
	private Adres FactuurAdres;
	@OneToOne
	@JoinColumn(name = "Klantid")
	private Klant Klant;
	@Id
	private Long id;
	private Timestamp openDatum;
	private boolean isActief;

	public Adres getFactuurAdres() {
		return FactuurAdres;
	}

	public void setFactuurAdres(Adres factuurAdres) {
		FactuurAdres = factuurAdres;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Timestamp getOpenDatum() {
		return openDatum;
	}

	public void setOpenDatum(Timestamp openDatum) {
		this.openDatum = openDatum;
	}

	public boolean isActief() {
		return isActief;
	}

	public void setActief(boolean actief) {
		isActief = actief;
	}

	public Business.Domain.Persoon.Klant getKlant() {
		return Klant;
	}

	public void setKlant(Business.Domain.Persoon.Klant klant) {
		Klant = klant;
	}
}