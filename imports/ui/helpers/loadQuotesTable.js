import React from 'react'

export function loadQuotesTable(quotes){
  // console.log(bays)
  const trTable = []

  for (var i = 0; i < quotes.length; i++) {
    trTable.push(
      <tr key={"trTable-tr"+i}>
                        <th>{i+1}</th>
                        <th>{quotes[i].createdAt.toDateString()}</th>
                        <th>{quotes[i].projectSettings.companyName}</th>
                        <th>{quotes[i].projectSettings.projectTitle}</th>
                        <th>{quotes[i].projectSettings.racksDescription}</th>
                        <th>Edit</th>
                        <th>
                        <a
                          className="delete-item"
                          href="#delete"
                          onClick={this.deleteTodo}
                          onMouseDown={this.deleteTodo}
                        >
                          <i className="fa fa-free-code-camp" aria-hidden="true"/>
                        </a>
                        </th>
                        <th>Copy</th>
      </tr>
      )
  }

  return trTable
}