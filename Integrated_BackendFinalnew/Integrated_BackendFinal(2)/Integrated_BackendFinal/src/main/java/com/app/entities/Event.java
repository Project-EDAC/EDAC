package com.app.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "event")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Event extends BaseEntity {

	@Column(name = "event_description")
	private String eventDescription;
	
	private LocalDate date;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
	@JoinColumn(name = "admin_id")
	private Admin admin;
}