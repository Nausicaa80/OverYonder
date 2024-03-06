--

-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists children;
DROP TABLE if exists donations;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE donations (
    id INT NOT NULL AUTO_INCREMENT, 
    item VARCHAR(100) NOT NULL, 
    itemPrice INTEGER NOT NULL,
    itemUrl VARCHAR(2500) NOT NULL,
    itemDescription VARCHAR(500) NOT NULL,
    itemImg VARCHAR (2500) NOT NULL,
    PRIMARY KEY (id)
);

INSERT into donations (item,itemPrice,itemUrl,itemDescription, itemImg) VALUES
('Handcream', 5, 'https://www.amazon.co.uk/Yardley-London-English-Nourishing-Cream/dp/B00UVR3JUU/ref=asc_df_B00UVR3JUU&mcid=4632b5b9678d3fe89b8bb2dfff8b98e8?tag=bingshoppinga-21&linkCode=df0&hvadid=80126967116319&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4583726541596242&psc=1', 'Rose Scented Handcream', 'https://m.media-amazon.com/images/I/71zv0eKF3SL.__AC_SX300_SY300_QL70_ML2_.jpg'),
('Football', 10, 'https://www.amazon.co.uk/Nike-Pitch-Unisex-Green-Electric/dp/B01N0TSQ4H/ref=sr_1_5?dib=eyJ2IjoiMSJ9.l3u9--qNlMkA634ve5-ersQnb6Agz1w_Y_ZXV50U7fx89HL3DHuSLVMz3vaqPTvdfb77HrSZZ2tLin6gToWrSwcMLv5FAj9s83R4XuHgM4I7Abf64ooymsmB-q2f2xGEfqk2CAb1n9PQPZ9olOsOXKmY-Qo1EMc8L2eY2sm4RFJokUrrY2M-rsMS0fozA8yyVbLzdW8K6ZrPAvOywKe2v7pJXcd4rMJtfWaPmOuiT0zHaSO1XW9HgnkI0vaSEJGy7DAk0VqHtgsAgMJjyDj0bvRbIRjLXrWL5MNzuLnvp5w.ca3YqPIEllPYWaeqt8xZrCmL7ThUBND6EFay-ygjCaw&dib_tag=se&keywords=football&qid=1709206081&sr=8-5', 'Nike Pitch Football'),
('Kettlebell', 20, 'https://www.therange.co.uk/leisure/sport/fitness-equipment-and-accessories/home-gym/kettlebells/active-sport-kettle-bell/?msclkid=4131debbbbea1b34eb26bb5cafb0f051&utm_source=bing&utm_medium=cpc&utm_campaign=PLA||Low||All%20Products||New&utm_term=4575067903842612&utm_content=PLA||All%20Products#35797', 'Selection of Fitness Kettlebell'),
('Craft kit', 25, 'https://www.notonthehighstreet.com/craftiosity/product/paper-quilling-clock-craft-kit?attributionToken=jQHwjAoMCLStnK8GEJbitbgBEAEaJDY1ZWUyZmRjLTAwMDAtMmI1Ny1hM2M4LWY0MDMwNDNkODhmYyobR0ExLjIuMTI5MzkxNzcwNi4xNzA5NjQzNDI2MiTKyZIio4CXIriZoSKN96ciwvCeFcbL8xeOvp0V1LKdFZD3pyI6DmRlZmF1bHRfYnJvd3NlSAFoAQ&referredBy=plp','Choice of crafting kits'),
('Cinema vouchers', 30, 'https://www.buyagift.co.uk/p/days-out/cineworld-cinema-tickets-for-two-adults-br-11899934.aspx?qid=4940cfd53b8157ea828936d88736ba43&i=BAG_page_products_cat_space', 'Cinema Voucher For Two People'),
('Headphones', 35, 'https://www.amazon.co.uk/Sony-WH-CH520-Wireless-Bluetooth-Headphones-Black/dp/B0BTJD6LCL/ref=sr_1_3?crid=2SZ9315NS1VS3&dib=eyJ2IjoiMSJ9.cUk2MalpgGI2_4VwyBk8zcbWvQl4mY9bcibqPa-awJndM4gSceccCGdIe1TN9GIr3vWt68QLWZOjcGkkmZCClwPGswRjq0YndJb0UB-8xqGWApiJfxxnkKKN2VSFWIR1wmVRAbnduTo8tYlyfl_lDf9P7PewuBI3tQs6cmhsdEVvJHnQLTq0duy6gANrW-sX4y3Lkgw-Ly3VdNYHi_JY5iP3qpdKRvVkXzsbcRkAzuA.NMbuwVmaOah2TnOdWrILTcI0sXEZ6_hkJlOIClvqhGE&dib_tag=se&keywords=headphones&qid=1709208917&sprefix=head%2Caps%2C71&sr=8-3', 'Bluetooth Headphone'),
('Tablet', 60, 'https://www.johnlewis.com/amazon-fire-7-tablet-12th-generation-2022-with-alexa-hands-free-quad-core-fire-os-wi-fi-16gb-7-with-special-offers-black/p109527580?irclickid=QFY18MRyrxyPUoRXf61Y%3AxZRUkH3Yv1GlxD%3A1Q0&irgwc=1&tmcampid=99&s_afcid=af_27795_Discount&tgclid=0601001d-6769-4799-a900-143665e71956', 'Amazon Tablet');


