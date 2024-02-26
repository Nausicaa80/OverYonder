--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists items;
SET foreign_key_checks = 1;

--
-- Create Tables
--
CREATE TABLE children (
    id INT NOT NULL Auto_Increment,
    childrenGender VARCHAR (10) not null,
    childrenAge INTEGER,
    PRIMARY KEY (id)
);
CREATE TABLE donations (
    id INT NOT NULL AUTO_INCREMENT, 
    item VARCHAR(40) NOT NULL, 
    itemPrice INTEGER NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO children (childrenGender, childrenAge) VALUES
('Boys', 12),
('Boys', 16),
('Girls', 12),
('Girls', 16);

INSERT into donations (item,itemPrice) VALUES
('Handcream', 5),
('Football', 10),
('Makeupkit', 15),
('Kettlebell', 20),
('Craft kit', 25),
('Cinema vouchers', 30),
('Headphones', 35),
('Tablet', 45),
('Warm winter clothes', 60);

