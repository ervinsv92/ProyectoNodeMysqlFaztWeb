CREATE database if not exists NodeJsDemo;
use NodeJsDemo;

create table employees(
	id int(11) NOT NULL AUTO_INCREMENT,
	name VARCHAR(45) DEFAULT NULL,
	salary INT(11) DEFAULT NULL,
	PRIMARY KEY(id)
);

insert into employees (name, salary) values ('Ervin', 10000);
insert into employees (name, salary) values ('Mario', 20000);
insert into employees (name, salary) values ('Carmen', 30000);

DELIMITER // 
create procedure employeeAddOrEdit(
IN _id int,
IN _name VARCHAR(45),
IN _salary INT
)
BEGIN 
	IF _id = 0 THEN
		INSERT INTO employees (name, salary) values (_name, _salary);
		SET _id = LAST_INSERT_ID(); 
	ELSE
		UPDATE employees 
		SET name = _name,
		salary = _salary
		WHERE id = _id;
	END IF;
	
	SELECT _id AS id;
END//
