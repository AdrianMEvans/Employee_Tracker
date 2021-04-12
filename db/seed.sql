USE Employee_Tracker_DB;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Marketing");
INSERT INTO department (name)
VALUES ("Accounts");
INSERT INTO department (name)
VALUES ("Production");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Assistant", 70000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Manager", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Debtors Clerk", 65000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Advisor", 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Brian", "Wellstead", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Nick", "du Plessis", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chev", "van Zee", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Marlize", "Erasmus", 3, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rick", "de Wet", 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Leandri", "Myburgh", 3, null);