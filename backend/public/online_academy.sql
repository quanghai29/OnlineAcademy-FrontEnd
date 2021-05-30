create database online_academy;

use online_academy;

create table account(
	account_id int not null auto_increment,
    username varchar(255) not null,
    password varchar(255) not null,
    account_role int,
    primary key(account_id)
);

create table admin(
	admin_id int not null,
    fullname varchar(255),
    email varchar(255),
    address varchar(255),
    primary key(admin_id)
);

create table lecturer(
	lecturer_id int not null,
    fullname varchar(255),
    email varchar(255), 
    address varchar(255),
    shool varchar(255),
    experience_year int, 
    programming_language varchar(255),
    primary key(lecturer_id)
);

create table student(
	student_id int not null,
    fullname varchar(255), 
    email varchar(255), 
    address varchar(255), 
    primary key(student_id)
);

create table comment(
	comment_id int not null auto_increment,
    content text, 
    student_id int not null, 
    course_id int not null, 
    primary key(comment_id)
);

create table course(
	course_id int not null auto_increment, 
    category_id int not null, 
    title varchar(255), 
    price double not null, 
	discount double, 
    lecturer_id int not null, 
    img_id int not null, 
    create_date datetime not null, 
    last_update datetime not null, 
    short_description text,
    full_description text, 
    course_status int, 
    primary key(course_id)
);
create table category(
	category_id int not null auto_increment, 
    category_name varchar(255), 
    last_update datetime,
    primary key(category_id)
);

create table chapter(
	chapter_id int not null auto_increment, 
    create_date datetime not null,
    last_update datetime not null, 
    course_id int not null, 
    title text, 
    primary key(chapter_id)
);

create table video(
	video_id int not null auto_increment, 
    source text not null, 
    upload_date datetime not null, 
    views int, 
    last_update datetime not null, 
    chapter_id int not null, 
    duration int not null, 
    title text, 
    primary key(video_id)
);

create table image(
	img_id int not null auto_increment, 
    img_source text not null, 
    img_title varchar(255), 
    primary key(img_id)
);
