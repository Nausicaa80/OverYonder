import React, { useState, useEffect } from 'react';
import './UserView.css';

function DonationComponent({ onDonationSelect }) {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch('/api/donations');
        if (!response.ok) {
          console.error('Error fetching donations:', response.status, response.statusText);
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setDonations(data);
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    };

    fetchDonations();
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div>
      <h1>Donations</h1>
      <ul>
        {donations.map((donation) => (
          <li key={donation.id}>
            {donation.item} - {donation.itemPrice}
            <button onClick={() => onDonationSelect(donation)}>
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserView() {
  const [selectedItems, setSelectedItems] = useState(null);

  const handleSelectedItems = (donation) => {
    setSelectedItems(donation);
  };
  const donationItems = [
    { 
      id: 1, 
      title: 'HandCream', 
      price: '£5',
      description: 'Rose Scented HandCream', 
      url: 'https://www.amazon.co.uk/Yardley-London-English-Nourishing-Cream/dp/B00UVR3JUU/ref=asc_df_B00UVR3JUU&mcid=4632b5b9678d3fe89b8bb2dfff8b98e8?tag=bingshoppinga-21&linkCode=df0&hvadid=80126967116319&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4583726541596242&psc=1',
      img: 'https://www.amazon.co.uk/Yardley-London-English-Nourishing-Cream/dp/B00UVR3JUU/ref=asc_df_B00UVR3JUU&mcid=4632b5b9678d3fe89b8bb2dfff8b98e8?tag=bingshoppinga-21&linkCode=df0&hvadid=80126967116319&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4583726541596242&psc=1',
      
    },
    { 
      id: 2, 
      title: 'Football', 
      price: '£10',
      description: 'Nike Football', 
      url: 'https://www.amazon.co.uk/Nike-Pitch-Unisex-Green-Electric/dp/B01N0TSQ4H/ref=sr_1_5?dib=eyJ2IjoiMSJ9.l3u9--qNlMkA634ve5-ersQnb6Agz1w_Y_ZXV50U7fx89HL3DHuSLVMz3vaqPTvdfb77HrSZZ2tLin6gToWrSwcMLv5FAj9s83R4XuHgM4I7Abf64ooymsmB-q2f2xGEfqk2CAb1n9PQPZ9olOsOXKmY-Qo1EMc8L2eY2sm4RFJokUrrY2M-rsMS0fozA8yyVbLzdW8K6ZrPAvOywKe2v7pJXcd4rMJtfWaPmOuiT0zHaSO1XW9HgnkI0vaSEJGy7DAk0VqHtgsAgMJjyDj0bvRbIRjLXrWL5MNzuLnvp5w.ca3YqPIEllPYWaeqt8xZrCmL7ThUBND6EFay-ygjCaw&dib_tag=se&keywords=football&qid=1709206081&sr=8-5' 
    },
    { 
      id: 3, 
      title: 'Makeupkit', 
      price: '£15', 
      url: 'https://www.amazon.co.uk/LYMYBETY-Cosmetic-Portable-Eyeshadow-Foundation/dp/B0BV2LXP9N/ref=sr_1_1?crid=330HX5UWM8J6E&dib=eyJ2IjoiMSJ9.vjo_YHSJmzRrn6esl6I8V_YrA_vTHFgmWtp2k2FMfkhWBFz_rDLAZFgD8A5oMdV8uC0lH8j4KuarIt_ORwhZ1CHxdRTTDddd5sSuO6NHpps3GhYYwwqcgJjCDVMPkSDIcXJWWPsSYcReutztFwLErnJ9PRLKEVJOazwUMdId2I63_AYbd07gbUj1pmbGtgVWKEIppkO4gLP3OVKv_AqeCqhDDjlzxgzUn-hiooAC7wdyn5scXyGRLzJMqQYE-8kx3sLLOKMpm3LLT9HU5mZP3Xm0P0DFFV0m2yzHJp1wZO8.a6wUc9nvbuZwwDkGrHdEI31oklzGShY8Cz9jm7u2JkQ&dib_tag=se&keywords=makeup+kit&qid=1709208259&sprefix=makeup+kit%2Caps%2C119&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1', 
      description: 'Makeup Kit'
    },
    { 
      id: 4, 
      title: 'Kettlebell', 
      price: '£20', 
      url: 'https://www.amazon.co.uk/Amazon-Basics-Cast-Iron-Kettlebell-Black/dp/B076QHF4MJ/ref=sr_1_1?crid=363LPTV0J5O6S&dib=eyJ2IjoiMSJ9.xpyYh_H6BN_0B0S25yKTDKYbEiBAcIl7MHuK-HZAST7JxzbTQN1X0fRIZc5hk-8PD6q9QWnwfY0kvAHUF1Pxm_FG-h25bSsUApYI2uoYXYbEqxVnd1USKunSxPyXd-AfqjNZvB2LyLLb2m0GAXT4R5oWL4rWimgtJ9ysQ3wAk4kDZRD_ks4XyRuJCym7amjjbyQt3Wz07tvjcxtytzxrjINyHeA2yhYFJCopr68zrY7WRwF-s_pZ321eTZEI5mrA_g2jUYSJVS4tA3_t9bguPrFs3Imodk0Hp71EWwIAE48.K0OTcNHZplx3s4-9wFfgaH81slxjzA3RaZqEaFeZZqI&dib_tag=se&keywords=kettlebell&qid=1709208435&sprefix=kettlebell%2Caps%2C110&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1', 
      description: 'Basic Cast Kettlebell'
    },
    { 
      id: 5, 
      title: 'Craft kit', 
      price: '£25', 
      url: 'https://www.amazon.co.uk/Blue-Squid-Craft-Chest-UK/dp/B09Q3KVCB9/ref=sr_1_1?crid=W1BGEYXYH3T9&dib=eyJ2IjoiMSJ9.7fPPllST7ABQgkWG_g9G2Z7Qq6lHBLTZQwswgvqptXGHkKcXQsoPhav-DPgsa3HGKD5Aqfl3JB2GXyoHMi4LAn0jSqqSUxiLRztlJFf7je4Hr-h94mg-7rit36C4GOYii5jmPIo-SYPQb_oQ8hatRy2gMDobWBmzbxb73RdHOUcZyqqgLzNn2upb0A5gxURHUT8hKkQWeZt2UykNjrp3seefvipRDJhWAq4CgzHpjRLQDAIhqOZVSmLyXAb2DbgDRmq1inuUYKUOp1ElezCHYgskFvS_PFJCpX4REAHs_so.CmVj7HX8Za_79CYki4Krkd3JGxt1ZNDx_12vmhTbGfs&dib_tag=se&keywords=craft+kits+for+kids&qid=1709208661&sprefix=craft+%2Caps%2C91&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
      description: 'Selection of Craft Kits',
    }
  ]; // The return statement should be here

  return (
    <div className='user-view'>
      <h2>Be a Secret Santa!</h2>
      <h2>See our Gift List for Vulnerable Young People</h2>

      <DonationComponent onDonationSelect={handleSelectedItems} />

      <div className="donations-items">
        <h3>Choose between our gift options</h3>
        <ul>
          {donationItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => handleSelectedItems(item)}>
                {item.title} - {item.description}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="selected-items">
        <h3>Add to basket</h3>
        {selectedItems ? (
          <div>
            <p>Title: {selectedItems.title}</p>
            <p>Description: {selectedItems.description}</p>
            <p>
              <a href={selectedItems.url} target="_blank" rel="noopener noreferrer">
                View Details
              </a>
            </p>
          </div>
        ) : (
          <p>No gift selected</p>
        )}
      </div>
    </div>
  );
}

export default UserView;