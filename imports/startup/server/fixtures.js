import { Meteor } from 'meteor/meteor';
import { Quotes } from '../../api/quotes/quotes.js';

// if the database is empty on server start, 
// create some sample data.
Meteor.startup(() => {

  Meteor.call("logStringToConsole", "fixtures logged-1");
  const tempData = {
    projectTitle: "Test Project"
      // "projectSettings": {
      //   "description": "test description-1",
      //   "projectCost": "140",
      //   "projectRate": "190",
      //   "companyName": "Dummy Company",
      //   "projectTitle": "Dummy Project"
      // },
      // "frames": {
      //   "frame1": {
      //     "height": "15",
      //     "qty": "10"
      //   }
      // },
      // "bays": {
      //   "bay1": {
      //     "length": "12",
      //     "qty": "10",
      //     "levels": "5",
      //     "loadPerLevel": "3000"
      //   },
      //   "bay2": {
      //     "length": "8.5",
      //     "qty": "4",
      //     "levels": "4",
      //     "loadPerLevel": "3000"
      //   },
      //   "bay3": {
      //     "length": "4",
      //     "levels": "2",
      //     "loadPerLevel": "3000"
      //   }
      // },
      // "shelfType": "noShelf"
    }

    let timestamp = (new Date()).getTime();
    const quoteId = Quotes.insert(tempData);

    
});
