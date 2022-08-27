import React from 'react';
import { Grid } from '@mui/material';

import { BitBnsIcon, Bulb } from '@assets/icons';
import { translate } from '@utils/locale';

export const PLAN_TYPES = {
  FREE: 'FREE',
  UNLIMITED: 'UNLIMITED'
};

export const PLAN_LIST = [
  {
    id: PLAN_TYPES.FREE,
    type: 'Free',
    price: '0',
    partnerDiscountAvailable: false,
    description: 'New to the world of crypto? Get started for free!',
    benefits: [
      {
        label: '100 Transactions per Financial Year',
        isAvailable: true,
        customClass: 'font-normal'
      },
      {
        label: 'Transaction wise report',
        isAvailable: true,
        customClass: 'font-normal'
      },
      {
        label: 'Tax Report - With Comprehensive Audit Trail',
        isAvailable: true,
        customClass: 'font-normal'
      },
      {
        label: 'Portfolio Tracker- Asset & Source wise',
        isAvailable: true,
        customClass: 'font-normal'
      },
      {
        label: 'Reports for FY 20-21,21-22 & 22-23',
        isAvailable: true,
        customClass: 'font-bold'
      },
      {
        label: 'Email Support',
        isAvailable: true,
        customClass: 'font-normal'
      },
      {
        label: 'DeFi Wallet*',
        isAvailable: true,
        comingSoon: true,
        customClass: 'font-normal'
      },
      {
        label: 'NFT Tax*',
        isAvailable: true,
        comingSoon: true,
        customClass: 'font-normal'
      },
      {
        label: 'TDS Tracker',
        isAvailable: true,
        comingSoon: true,
        customClass: 'font-normal'
      }
    ]
  },
  {
    id: PLAN_TYPES.UNLIMITED,
    type: 'Unlimited',
    price: '750',
    specialPrice: '600',
    strikedPrice: '1500',
    partnerDiscountAvailable: true,
    description: 'Discounted price for PRO Trader',
    benefits: [
      {
        label: 'Unlimited Transactions',
        isAvailable: true,
        customClass: 'font-bold'
      },
      {
        label: 'Transaction wise report',
        isAvailable: true,
        customClass: 'font-normal'
      },
      {
        label: 'Tax Report - With Comprehensive Audit Trail',
        isAvailable: true,
        customClass: 'font-normal'
      },
      {
        label: 'Portfolio Tracker- Asset & Source wise',
        isAvailable: true,
        customClass: 'font-normal'
      },
      {
        label: 'Reports for FY 20-21,21-22 & 22-23',
        isAvailable: true,
        customClass: 'font-bold'
      },
      {
        label: 'Email Support',
        isAvailable: true,
        customClass: 'font-normal'
      },
      {
        label: 'DeFi Wallet*',
        isAvailable: true,
        customClass: 'font-normal',
        comingSoon: true
      },
      {
        label: 'NFT Tax*',
        isAvailable: true,
        customClass: 'font-normal',
        comingSoon: true
      },
      {
        label: 'TDS Tracker',
        isAvailable: true,
        customClass: 'font-normal',
        comingSoon: true
      }
    ],
    remarks: (
      <Grid className="inline-flex items-center  mt-2">
        <Bulb className="inline mr-1 align-middle" height="20px" />
        <Grid className="inline">
          <Grid className="inline-block text-sm font-normal text-black">
            <Grid className="inline align-middle">
              {translate('subscription.specialOfferText1')}
            </Grid>
            <BitBnsIcon className="inline mx-1 align-middle" width="55px" />
            <Grid className="inline align-middle">
              {translate('subscription.specialOfferText2')}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
];
