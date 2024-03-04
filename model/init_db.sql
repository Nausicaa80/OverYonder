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
    itemUrl VARCHAR(250) NOT NULL,
    itemDescription VARCHAR(250) NOT 
    PRIMARY KEY (id)
);

INSERT INTO children (childrenGender, childrenAge) VALUES
('Boys', 12,),
('Girls', 12,),
('Girls', 16);

INSERT into donations (item,itemPrice) VALUES
('Handcream', 5, 'https://www.amazon.co.uk/Yardley-London-English-Nourishing-Cream/dp/B00UVR3JUU/ref=asc_df_B00UVR3JUU&mcid=4632b5b9678d3fe89b8bb2dfff8b98e8?tag=bingshoppinga-21&linkCode=df0&hvadid=80126967116319&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4583726541596242&psc=1', 'Rose Scented Handcream'),
('Football', 10, 'https://www.amazon.co.uk/Nike-Pitch-Unisex-Green-Electric/dp/B01N0TSQ4H/ref=sr_1_5?dib=eyJ2IjoiMSJ9.l3u9--qNlMkA634ve5-ersQnb6Agz1w_Y_ZXV50U7fx89HL3DHuSLVMz3vaqPTvdfb77HrSZZ2tLin6gToWrSwcMLv5FAj9s83R4XuHgM4I7Abf64ooymsmB-q2f2xGEfqk2CAb1n9PQPZ9olOsOXKmY-Qo1EMc8L2eY2sm4RFJokUrrY2M-rsMS0fozA8yyVbLzdW8K6ZrPAvOywKe2v7pJXcd4rMJtfWaPmOuiT0zHaSO1XW9HgnkI0vaSEJGy7DAk0VqHtgsAgMJjyDj0bvRbIRjLXrWL5MNzuLnvp5w.ca3YqPIEllPYWaeqt8xZrCmL7ThUBND6EFay-ygjCaw&dib_tag=se&keywords=football&qid=1709206081&sr=8-5', 'Nike Pitch Football',),
('Makeupkit', 15, 'https://www.amazon.co.uk/LYMYBETY-Cosmetic-Portable-Eyeshadow-Foundation/dp/B0BV2LXP9N/ref=sr_1_1?crid=330HX5UWM8J6E&dib=eyJ2IjoiMSJ9.vjo_YHSJmzRrn6esl6I8V_YrA_vTHFgmWtp2k2FMfkhWBFz_rDLAZFgD8A5oMdV8uC0lH8j4KuarIt_ORwhZ1CHxdRTTDddd5sSuO6NHpps3GhYYwwqcgJjCDVMPkSDIcXJWWPsSYcReutztFwLErnJ9PRLKEVJOazwUMdId2I63_AYbd07gbUj1pmbGtgVWKEIppkO4gLP3OVKv_AqeCqhDDjlzxgzUn-hiooAC7wdyn5scXyGRLzJMqQYE-8kx3sLLOKMpm3LLT9HU5mZP3Xm0P0DFFV0m2yzHJp1wZO8.a6wUc9nvbuZwwDkGrHdEI31oklzGShY8Cz9jm7u2JkQ&dib_tag=se&keywords=makeup+kit&qid=1709208259&sprefix=makeup+kit%2Caps%2C119&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1', 'Makeup Kit'),
('Kettlebell', 20, 'https://www.amazon.co.uk/Amazon-Basics-Cast-Iron-Kettlebell-Black/dp/B076QHF4MJ/ref=sr_1_1?crid=363LPTV0J5O6S&dib=eyJ2IjoiMSJ9.xpyYh_H6BN_0B0S25yKTDKYbEiBAcIl7MHuK-HZAST7JxzbTQN1X0fRIZc5hk-8PD6q9QWnwfY0kvAHUF1Pxm_FG-h25bSsUApYI2uoYXYbEqxVnd1USKunSxPyXd-AfqjNZvB2LyLLb2m0GAXT4R5oWL4rWimgtJ9ysQ3wAk4kDZRD_ks4XyRuJCym7amjjbyQt3Wz07tvjcxtytzxrjINyHeA2yhYFJCopr68zrY7WRwF-s_pZ321eTZEI5mrA_g2jUYSJVS4tA3_t9bguPrFs3Imodk0Hp71EWwIAE48.K0OTcNHZplx3s4-9wFfgaH81slxjzA3RaZqEaFeZZqI&dib_tag=se&keywords=kettlebell&qid=1709208435&sprefix=kettlebell%2Caps%2C110&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1', 'Basic Cast Kettleball'),
('Craft kit', 25, 'https://www.amazon.co.uk/Blue-Squid-Craft-Chest-UK/dp/B09Q3KVCB9/ref=sr_1_1?crid=W1BGEYXYH3T9&dib=eyJ2IjoiMSJ9.7fPPllST7ABQgkWG_g9G2Z7Qq6lHBLTZQwswgvqptXGHkKcXQsoPhav-DPgsa3HGKD5Aqfl3JB2GXyoHMi4LAn0jSqqSUxiLRztlJFf7je4Hr-h94mg-7rit36C4GOYii5jmPIo-SYPQb_oQ8hatRy2gMDobWBmzbxb73RdHOUcZyqqgLzNn2upb0A5gxURHUT8hKkQWeZt2UykNjrp3seefvipRDJhWAq4CgzHpjRLQDAIhqOZVSmLyXAb2DbgDRmq1inuUYKUOp1ElezCHYgskFvS_PFJCpX4REAHs_so.CmVj7HX8Za_79CYki4Krkd3JGxt1ZNDx_12vmhTbGfs&dib_tag=se&keywords=craft+kits+for+kids&qid=1709208661&sprefix=craft+%2Caps%2C91&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1', 'Choice of crafting kits'),
('Cinema vouchers', 30, 'https://www.buyagift.co.uk/p/days-out/cineworld-cinema-tickets-for-two-adults-br-11899934.aspx?qid=4940cfd53b8157ea828936d88736ba43&i=BAG_page_products_cat_space', 'Cinema Voucher For Two People'),
('Headphones', 35, 'https://www.amazon.co.uk/Sony-WH-CH520-Wireless-Bluetooth-Headphones-Black/dp/B0BTJD6LCL/ref=sr_1_3?crid=2SZ9315NS1VS3&dib=eyJ2IjoiMSJ9.cUk2MalpgGI2_4VwyBk8zcbWvQl4mY9bcibqPa-awJndM4gSceccCGdIe1TN9GIr3vWt68QLWZOjcGkkmZCClwPGswRjq0YndJb0UB-8xqGWApiJfxxnkKKN2VSFWIR1wmVRAbnduTo8tYlyfl_lDf9P7PewuBI3tQs6cmhsdEVvJHnQLTq0duy6gANrW-sX4y3Lkgw-Ly3VdNYHi_JY5iP3qpdKRvVkXzsbcRkAzuA.NMbuwVmaOah2TnOdWrILTcI0sXEZ6_hkJlOIClvqhGE&dib_tag=se&keywords=headphones&qid=1709208917&sprefix=head%2Caps%2C71&sr=8-3', 'Bluetooth Headpohne'),
('Tablet', 45, 'https://www.amazon.co.uk/fire-7-tablet-7-display-16-gb-2022-release/dp/B099H8ML7D/ref=sr_1_2?crid=2AG3D6VDNF23F&dib=eyJ2IjoiMSJ9.0vZuvVQdwyFWIQE2a0tw5sFp4SPjOWOAlt-GD8l2p1oTZrxnqEzCz6cr4cLLgyQpA-uTBkdtti9YgGNUENp74yA0kSBKfCf9sTbKdHKdFdtFmNbZJrJuHFZpqS4ky8N-X9Y-_XyaYi_snik0qt5tQZHT-IXJ_EaLyjvsdpVMdoYKw6ccdpWSnlhnFXB-DuvCMI5clTotHz4yzni5NV6S2nh4ldb0qH-a6WxBiVN71lc._fAaQtlJE6NtCtpSTUoodNZEt3GI6sqSurOCfHfcSuo&dib_tag=se&keywords=tablet&qid=1709209083&sprefix=tablet%2Caps%2C110&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1', 'Amazon Fire Tablet'),
('Warm winter clothes', 60, 'https://www.amazon.co.uk/Orolay-Womens-Thickened-Jacket-Black/dp/B00HHOL9W0/ref=sxin_17_pa_sp_search_thematic?content-id=amzn1.sym.f94409eb-be8e-464b-abf1-9bbfe65be573%3Aamzn1.sym.f94409eb-be8e-464b-abf1-9bbfe65be573&crid=2KO34XY6JO247&cv_ct_cx=coat&dib=eyJ2IjoiMSJ9.AcPYe4TMFdqrsWuhBTkXSiAnLj1GDIN3NDUueFaxgGp3B6uVHquXuo7QpLMzRlDUCjiWYEOQR894lMasQGgj9pzNuiiOCwlubwrS9JPHeUMDwTF1PNQPQawqSLLwpDQq.IjA4pHsJgU_hfZVBNzX-fFB17JskIWaDjITmgNP72Bc&dib_tag=se&keywords=coat&pd_rd_i=B00HHOL9W0&pd_rd_r=0702d2ea-9823-46c9-a126-b85826e64111&pd_rd_w=USFo6&pd_rd_wg=RJu4V&pf_rd_p=f94409eb-be8e-464b-abf1-9bbfe65be573&pf_rd_r=G8TR08EVKM4EPDN0TNCZ&qid=1709209188&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=coat%2Caps%2C94&sr=1-1-22a1fc8f-2a7c-4858-8872-f452cfdf9f69-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1', 'Bundle of Waem Winter Clothes');

