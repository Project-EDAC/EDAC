package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "result")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Result extends BaseEntity{
	
	@OneToMany(mappedBy = "result",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Exam> exams = new ArrayList<Exam>();

}
