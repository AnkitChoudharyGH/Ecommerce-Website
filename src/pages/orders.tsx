import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC"
import { Column } from "react-table";
import { Link } from "react-router-dom";

type DataType = {
    _id: string;
    amount: number;
    quantity: number;
    discount: number;
    status: ReactElement;
    action: ReactElement;
};

const column: Column<DataType>[] = [{
    Header:"ID",
    accessor:"_id",
},{
    Header: "Quantity",
    accessor:"quantity",
},{
    Header:"Discount",
    accessor:"discount",
},{
    Header:"Amount",
    accessor:"amount",
},
];

const Orders = () => {
   const [rows,setRows] = useState<DataType[]>([
    {
        _id: "dasdada",
    amount: 43142,
    quantity: 23,
    discount: 4343,
    status: <span className="red">Processing</span>,
    action: <Link to={'/order/dasdada'}>View</Link>,
    }
   ])
    const Table = TableHOC<DataType>(column,[],"dashboard-product-box","Orders",true)();
  return (
    <div className="container">
      <h1>MY ORDERS</h1>
        {Table}
    </div>
  )
}

export default Orders
