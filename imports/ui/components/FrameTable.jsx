// import React, { Component } from 'react'
// import ReactDataGrid from 'react-data-grid'
// import 'bootstrap/dist/css/bootstrap.css'

// const FrameTable = React.createClass({
//   getInitialState() {
//     this.createRows();
//     this._columns = [
//       { key: 'id', name: 'Description' },
//       { key: 'title', name: 'Height' },
//       { key: 'count', name: 'Qty.' } ];

//     return null;
//   },

//   createRows() {
//     let rows = [];
//     for (let i = 1; i < 2; i++) {
//       rows.push({
//         id: i,
//         title: 'Title ' + i,
//         count: i * 2
//       });
//     }

//     this._rows = rows;
//   },

//   rowGetter(i) {
//     return this._rows[i];
//   },

//   render() {
//     return  (
//       <ReactDataGrid
//         columns={this._columns}
//         rowGetter={this.rowGetter}
//         rowsCount={this._rows.length}
//         minHeight={75} 
//         className="table-frame"/>
//         );
//   }
// });

// export default FrameTable