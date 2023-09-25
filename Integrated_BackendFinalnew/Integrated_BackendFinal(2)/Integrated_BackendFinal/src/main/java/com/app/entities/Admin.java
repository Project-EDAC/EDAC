package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name ="admin_details")
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper = false,doNotUseGetters = true,of = "email")
public class Admin extends BaseEntity
{
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "password")
	private String password;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name= "user_id")
	private User user;
	
	
	@OneToMany(mappedBy = "admin",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Event> events = new ArrayList<Event>();
	

	
	public void addEvent(Event e)
	{
		events.add(e);
		e.setAdmin(this);
	}
    
	public void removeEvent(Event e)
	{
		events.remove(e);
		e.setAdmin(null);
	}
}
