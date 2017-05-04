import React from 'react'

export function loadQuotesTable(quotes){
  // console.log(bays)
  const trTable = []

  for (var i = 0; i < quotes.length; i++) {
    trTable.push(
      <tr key={"trTable-tr"+i}>
                        <th>{i+1}</th>
                        <th>{quotes[i].projectSettings.companyName}</th>
                        <th>{quotes[i].projectSettings.projectTitle}</th>
                        <th>{quotes[i].projectSettings.racksDescription}</th>
      </tr>
      )
  }

  return trTable
}