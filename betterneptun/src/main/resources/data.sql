INSERT INTO 
    users(user_no,name,email,password,role)
values
    (1,'user','email','$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','TEACHER');
INSERT INTO
    users(user_no,name,email,password,role)
VALUES
    (2,'user2','email2','$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','STUDENT');
INSERT INTO
    users(user_no,name,email,password,role)
VALUES
    (3,'user3','email3','$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..','ADMIN');


INSERT INTO
    courses(course_no,name,room,time_day,time_hour,taken_space,max_space,type,user_user_no)
VALUES
    (1,'name','room','time_day','time_hour',0,20,'EA',1);

	
INSERT INTO
    consultations(consultation_no,name,room,time_day,time_hour,course_course_no)
VALUES
    (1,'name','room','time_day','time_hour',1);

	
INSERT INTO
    courses_users(coursesmtm_course_no,users_user_no)
VALUES
    (1,2);
