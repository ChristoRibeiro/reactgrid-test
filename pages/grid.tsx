/* eslint-disable react/jsx-key */
/* the jsx key is provided in the .get*Props() spreads, but eslint doesn't believe you. I believe you. */
import { useState } from "react"
import { CellChange, Column, ReactGrid, Row } from "@silevis/reactgrid"

interface SheetData {
  columns: Column[]
  rows: Row[]
}

export default function ModelSheet() {
  // const [state, setState] = useState<SheetData>(() => ({
  // 	columns: [...columns],
  // 	rows: buildTree([...rows]),
  // }))

  // const [rowsDisplayed, setRowsDisplayed] = useState<Row[]>([...getExpandedRows(state.rows)])

  // const handleChanges = (changes: CellChange[]) => {
  // 	console.log("update: ", changes)
  // 	const newState = { ...state }
  // 	changes.forEach(change => {
  // 		const changeRowIdx = newState.rows.findIndex(el => el.rowId === change.rowId)
  // 		const changeColumnIdx = newState.columns.findIndex(el => el.columnId === change.columnId)
  // 		newState.rows[changeRowIdx].cells[changeColumnIdx] = change.newCell
  // 	})
  // 	setState({ ...state, rows: buildTree(newState.rows) })
  // 	setRowsDisplayed([...getExpandedRows(newState.rows)])
  // }

  const [state2] = useState<SheetData>(() => ({
    columns: [
      { columnId: "Name", width: 100 },
      { columnId: "Surname", width: 100 },
    ],
    rows: [
      {
        rowId: 0,
        cells: [
          { type: "header", text: "Name" },
          { type: "header", text: "Surname" },
        ],
      },
      {
        rowId: 1,
        cells: [
          { type: "text", text: "Thomas" },
          { type: "text", text: "Goldman" },
        ],
      },
      {
        rowId: 2,
        cells: [
          { type: "text", text: "Susie" },
          { type: "text", text: "Spencer" },
        ],
      },
      {
        rowId: 3,
        cells: [
          { type: "text", text: "" },
          { type: "text", text: "" },
        ],
      },
    ],
  }))

  return <ReactGrid rows={state2.rows} columns={state2.columns} />
}
