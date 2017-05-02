import { Meteor } from 'meteor/meteor';
import { Quotes } from '../../api/quotes/quotes.js';

// if the database is empty on server start, 
// create some sample data.
Meteor.startup(() => {

  // Quotes.remove({});

  Meteor.call("logStringToConsole", "fixtures logged-1")
  const tempData = {
          "projectSettings": {
            "racksDescription": "test description-1W",
            "currentMetalPrices": 90,
            "companyName": "MEKW",
            "projectTitle": "Yamaha Port QasimW"
          },
          "frame": {
              "frameHeight": 20,
              "frameQty": 100,
              "frameDepth": 3,
          },
          "bays": [
            {
              "length": 12,
              "qty": 100,
              "levels": 5,
              "loadPerLevel": 3500
            },
            {
              "length": 8.05,
              "qty": 40,
              "levels": 7,
              "loadPerLevel": 3000
            },
            {
              "length": 4,
              "qty": 10, 
              "levels": 2,
              "loadPerLevel": 2000
            },
            {
              "length": 4,
              "qty": 10,
              "levels": 2,
              "loadPerLevel": 1000
            }
          ],
          "shelfType": "noShelfW",
          createdAt: new Date()
    }

    let timestamp = (new Date()).getTime();
    const quoteId = Quotes.insert(tempData);

    
});
