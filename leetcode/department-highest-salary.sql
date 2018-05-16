# https://leetcode.com/problems/department-highest-salary/
# Write your MySQL query statement below
# 70%
# select d.Name Department, e.Name Employee, e.Salary Salary from Department d, Employee e where e.DepartmentId = d.Id and e.Salary = (select max(e2.Salary) from Employee e2 where  e2.DepartmentId = d.Id);
# 90%
select d.Name Department, e.Name Employee, e.Salary Salary from Department d, Employee e, (select max(e2.Salary) Salary, d2.Id did from Employee e2, Department d2 where e2.DepartmentId = d2.Id group by did) t where e.DepartmentId = d.Id and d.Id = t.did and e.Salary = t.Salary;
