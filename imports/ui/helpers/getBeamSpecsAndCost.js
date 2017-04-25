import { getMaxRackCapacityReqd } from './getMaxRackCapacityReqd'
import { getMaxLevelCapacity } from './getMaxLevelCapacity'
import { UprightWeightTable } from './WeightCapacityTables'
import {BoxBeamWeightCapacityTable} from './WeightCapacityTables'
// import {generateLog } from './generateLog' 

export function getBeamSpecsAndCost(bay){
	
	const MAPLOG = true
	var beamSpecsAndCost;
	// if(MAPLOG)console.log("BoxBeamWeightCapacityTable",BoxBeamWeightCapacityTable)
	// if(MAPLOG){console.log("bay",bay)}
		
	var selectedBeamIndex;
	for(var i=0; i<BoxBeamWeightCapacityTable.beamLengths.length; i++) 
		{
			if(BoxBeamWeightCapacityTable.beamLengths[i]>=bay.length){
					selectedBeamIndex=i;
					break
				}
			}
	if(MAPLOG)console.log("bay.length",bay.length);
	if(MAPLOG)console.log("selectedBeamIndex",selectedBeamIndex);
	return beamSpecsAndCost
}