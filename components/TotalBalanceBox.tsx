"use client"

import React, { useRef } from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

const TotalBalanceBox = ({accounts = [], totalBanks, totalCurrentBalance}: TotalBalanceBoxProps) => {

    const myRef = useRef(null)

  return (
    <section className='total-balance'>
        <div className='total-balance-chart' ref={myRef}>
            <DoughnutChart accounts = {accounts}/>
        </div>

        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>Bank Accounts: {totalBanks}</h2>
            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>Total Current Balance</p>
                <div className='total-balance-amount flex-center gap-2'>
                    {/* {formatAmount(totalCurrentBalance)} -- shows the amount without effect*/}
                    <AnimatedCounter amount={totalCurrentBalance}/></div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox