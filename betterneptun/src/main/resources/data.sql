INSERT INTO
    users(id,email,name,password,role_enum)
VALUES
    (1,'test email','test name','test password','TEACHER');
INSERT INTO
    users(id,email,name,password,role_enum)
VALUES
    (2,'test email2','test name2','test password2','STUDENT');

	
INSERT INTO
    courses(id,max_space,name,room,taken_space,time_day,time_hour,type_enum,user_id)
VALUES
    (1,40,'test name','test room',0,'test time_day','test time_hour','EA',1);

	
INSERT INTO
    consultations(id,name,room,time_day,time_hour,course_id)
VALUES
    (1,'test name','test room','test time_day','test time_hour',1);


	
INSERT INTO
    courses_users(coursesmtm_id,users_id)
VALUES
    (1,2);
	
