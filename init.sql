
create table users(
	id serial primary key,
	nameuser varchar(100) not null,
	emailuser varchar(100) not null,
	passworduser varchar(100) not null,
	statususer integer default 1
);


create table items(
	id serial primary key,
	iduser int NOT NULL,
	nameitem varchar(100) not null,
	FOREIGN KEY (iduser) REFERENCES users (id)
);


create table group_items(
	id serial primary key,
	iditem int NOT NULL,
	namegroup varchar(100) not null,
	FOREIGN KEY (iditem) REFERENCES items (id)
);
