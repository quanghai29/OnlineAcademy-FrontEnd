use online_academy;

create table student_course(
	id int not null auto_increment,
    vote int,
    student_id int,
    course_id int, 
	register_date timestamp default current_timestamp, 
    primary key(id)
);

create table list_favorite(
	id int not null auto_increment,
    student_id int, 
    course_id int, 
    create_date timestamp default current_timestamp,
    primary key(id)
);

alter table comment drop column student_id;
alter table comment drop column course_id;
alter table comment add column student_course_id int after id;
