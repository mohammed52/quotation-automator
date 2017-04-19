import { Meteor } from 'meteor/meteor';
import { Quotes } from '../../api/quotes/quotes.js';

// if the database is empty on server start, 
// create some sample data.
Meteor.startup(() => {

  Quotes.remove({});

  Meteor.call("logStringToConsole", "fixtures logged-1");
  const tempData = {
          "projectSettings": {
            "description": "test description-1W",
            "projectCost": "1400",
            "projectRate": "1900",
            "companyName": "MEKW",
            "projectTitle": "Yamaha Port QasimW"
          },
          "frame": "Hello Test Frame", 
          // {
          //     "frameHeight": "20",
          //     "frameQty": "100",
          //     "frameDepth": "3",

          // },
          "bays": {
            "bay1": {
              "length": "120",
              "qty": "100",
              "levels": "50",
              "loadPerLevel": "30000"
            },
            "bay2": {
              "length": "8.05",
              "qty": "40",
              "levels": "40",
              "loadPerLevel": "30001"
            },
            "bay3": {
              "length": "4",
              "levels": "2",
              "loadPerLevel": "30001"
            }
          },
          "shelfType": "noShelfW",
          "shelfType2": "noShelfX",

    }

    let timestamp = (new Date()).getTime();
    const quoteId = Quotes.insert(tempData);

    
});
