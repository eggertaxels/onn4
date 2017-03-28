-- database hjá nemanda þarf að heita kennitalan þín_myndir
drop database if exists 1811992029_myndir;
create database 1811992029_myndir; 
use 1811992029_myndir;

create table images 
(
  imageID int(11) not null auto_increment,
  imageName varchar(45) default null,
  imagePath varchar(255) not null,
  imageText varchar(155) default null,
  constraint image_PH primary key(imageID)
);


delimiter $$
create procedure NewImage(image_name varchar(45),image_path varchar(255),image_text varchar(155))
begin
	insert into Images(imageName,imagePath,imageText)
    values(image_name,image_path,image_text);
end$$
delimiter ;



-- ============================================== Testgögn ============================================== --

-- setjum myndir í grunninn með því að kalla á Stored Procedure NewImage()
call NewImage('Brandur','https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSsHJr-f6yWBsA69v0otK1vttx9f-dVGx0dOo7QhfYalVNA3cWgmXt0Ies','Royal Canin');
call NewImage('Felis','https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/AfricanWildCat.jpg/1280px-AfricanWildCat.jpg','African wildcat');
call NewImage('Blueyes','https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Indian_Cat_pic.jpg/1024px-Indian_Cat_pic.jpg','An Indian domestic cat');

-- ============================================== oo0000oo ============================================== --