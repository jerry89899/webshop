package Business.Domain.Adres;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Adres {

	@Id
	private Long id;
	private String straat;
	private Integer straatNummer;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStraat() {
		return straat;
	}

	public void setStraat(String straat) {
		this.straat = straat;
	}

	public Integer getStraatNummer() {
		return straatNummer;
	}

	public void setStraatNummer(Integer straatNummer) {
		this.straatNummer = straatNummer;
	}
}