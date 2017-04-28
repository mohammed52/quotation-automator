// import { getMaxRackCapacityReqd } from './getMaxRackCapacityReqd'
// import { getMaxLevelCapacity } from './getMaxLevelCapacity'
// import { UprightWeightTable } from './WeightCapacityTables'
// import {generateLog } from './generateLog' 
import {getQtyOfShelves} from './getQtyOfShelves'

export function getShelfSpecsAndCost(rackingRequirements){
	
	const MAPLOG = true

		var shelfSpecsAndCost={description: "",
							unitWeight: 0,
							qty: 0};
		
		let weightPerSqInch = 0;
		let tmpDescription = ""
		if (rackingRequirements.shelfType=="metalShelf1.2mm") {
			weightPerSqInch = 0.006299894
			tmpDescription="Metal Shelf 1.2mm"

		} else if (rackingRequirements.shelfType=="metalShelf1.5mm"){
			weightPerSqInch = 0.007874867			
			tmpDescription="Metal Shelf 1.5mm"
		} else if (rackingRequirements.shelfType=="metalShelf2.0mm"){
			weightPerSqInch = 0.009843584	
			tmpDescription="Metal Shelf 2.0mm"		
		}
		
		const frameDepth = rackingRequirements.frame.frameDepth
		const shelfTotalQty = getQtyOfShelves(rackingRequirements)
		
		let shelfUnitWeight = 16*(frameDepth*12+4)*weightPerSqInch

		shelfSpecsAndCost.description = tmpDescription
		shelfSpecsAndCost.unitWeight = shelfUnitWeight
		shelfSpecsAndCost.qty = shelfTotalQty

	if(MAPLOG)console.log("shelfSpecsAndCost",shelfSpecsAndCost);
	return shelfSpecsAndCost
}