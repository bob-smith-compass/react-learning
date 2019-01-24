import React from 'react'
import Login from '../login/Login';
import NameForm from '../../Form';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import Button from '../button/Button';
import Card from '../card/Card';
import Carousel from '../carousel/Carousel';
import Collapse from '../collapse/Collapse';
import SplitButton from '../split-button/SplitButton';
import Toast from '../toast/Toast';

export default function Home() {
  return (
    <div>
      <div>
        <Carousel />
        <Login />
        <Collapse />
        <SplitButton />
        <Toast />
        <Button />
        <Card />
        <NameForm />
        </div>
       
    </div>
  )
}
