import React, { useContext, useState } from 'react'
import { Collapse } from 'antd';
import FileManagerContext from '../../Providers/FileManagerProvider';
import ExpenseTable from './ExpenseTable';
import ExpenseMonth from './ExpenseMonth';

const AccountsExpense = () => {

  const { accExpense, fileOpen } = useContext(FileManagerContext);

//   console.log("accInvoice-----",accExpense)


const currentYear = new Date().getFullYear();
const pastYear = 2021; // Specify the past year here
const items = [];

  const [activeKey, setActiveKey] = useState([String(currentYear)])

  for (let year = currentYear; year >= pastYear; year--) {
    items.push({
      key: String(year),
      label: String(year),
      children: <ExpenseMonth year={year} />
    });
  }

  return (
    <div>
      {
        fileOpen ? <ExpenseTable /> :
        <Collapse defaultActiveKey={['1']} ghost items={items} />
      }
    </div>
  )
}

export default AccountsExpense
