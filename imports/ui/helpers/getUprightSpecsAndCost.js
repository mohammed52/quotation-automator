import { getMaxRackCapacityReqd } from './getMaxRackCapacityReqd'
import { getMaxLevelCapacity } from './getMaxLevelCapacity'
import { UprightWeightTable } from './WeightCapacityTables'
import {generateLog } from './generateLog' 

export function getUprightSpecsAndCost(rackingRequirements){
	
	const mapLog = true
	const maxRackCapacity = getMaxRackCapacityReqd(rackingRequirements.bays)
	const maxLevelCapacity = getMaxLevelCapacity(rackingRequirements.bays)
	
	// if(mapLog) console.log(UprightWeightTable)	
	// if(mapLog)console.log();
	if(mapLog)console.log(UprightWeightTable);
	return maxLevelCapacity
}