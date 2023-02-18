import './../App.css';
import React, { useState } from 'react';

import exhauster from '../resources/exhauster.png'
import Twhite from '../resources/Twhite.png'
import Tyellow from '../resources/Tyellow.png'
import Tred from '../resources/Tred.png'
import Vwhite from '../resources/Vwhite.png'
import Vyellow from '../resources/Vyellow.png'
import Vred from '../resources/Vred.png'
import Lwhite from '../resources/Lwhite.png'
import Lyellow from '../resources/Lyellow.jpg'
import Lred from '../resources/Lred.png'

function Exhauster(props) {

  let arr = Object.entries(props.obj);
  let images = {Twhite, Tyellow, Tred, Vwhite, Vyellow, Vred, Lwhite, Lyellow, Lred}
  const [indicate, setIndicate] = useState(false);
  function testT (num) {
    let T;
    if (Number(arr[num][1]) < 65) {
      T = 'Twhite';
    } else if (Number(arr[num][1]) < 75) {
      T = 'Tyellow';
    } else if (Number(arr[num][1]) >= 75) {
      T = 'Tred';
    }
    return T;
  }
  function testV (num) {
    let V;
    if (Number(arr[num + 1][1]) < 4,5 || Number(arr[num + 2][1]) < 4,5  || Number(arr[num + 3][1]) < 4,5 ) {
      V = 'Vwhite';
    } else if (Number(arr[num + 1][1]) < 7,1 || Number(arr[num + 2][1]) < 7,1  || Number(arr[num + 3][1]) < 7,1) {
      V = 'Vyellow';
    } else if (Number(arr[num + 1][1]) >= 7,1 || Number(arr[num + 2][1]) >= 7,1  || Number(arr[num + 3][1]) >= 7,1) {
      V = 'Vred';
    }
    return V;
  }
  function testL (num) {
    let L;
    if (Number(arr[num][1]) > 20) {
      L = 'Lwhite';
    } else if (Number(arr[num][1]) > 10) {
      L = 'Lyellow';
    } else if (Number(arr[num][1]) <= 10) {
      L = 'Lred';
    }
    return L;
  }
  
  let warningList = [
    <div className='listOfFirstScreen' key={6}><p>№1 п-к</p> <img src={images[testT (6)]} /><img src={images[testV (7)]} /></div>,
    <div className='listOfFirstScreen' key={10}><p>№2 п-к</p> <img src={images[testT (10)]} /> <img src={images[testV (11)]} /></div>,
    <div className='listOfFirstScreen' key={14}><p>№3 п-к</p> <img src={images[testT (14)]} /> <img src={images[testV (15)]} /></div>,
    <div className='listOfFirstScreen' key={18}><p>№4 п-к</p> <img src={images[testT (18)]} /> <img src={images[testV (19)]} /></div>,
    <div className='listOfFirstScreen' key={22}><p>№5 п-к</p> <img src={images[testT (22)]} /> <img src={images[testV (23)]} /></div>,
    <div className='listOfFirstScreen' key={26}><p>№6 п-к</p> <img src={images[testT (26)]} /> <img src={images[testV (27)]} /></div>,
    <div className='listOfFirstScreen' key={30}><p>№7 п-к</p> <img src={images[testT (30)]} /> <img src={images[testV (31)]} /></div>,
    <div className='listOfFirstScreen' key={34}><p>№8 п-к</p> <img src={images[testT (34)]} /> <img src={images[testV (35)]} /></div>,
    <div className='listOfFirstScreen' key={38}><p>№9 п-к</p> <img src={images[testT (38)]} /> <img src={images[testV (39)]} /></div>,
    <div className='listOfFirstScreen' key={42}><p>Уровень масла</p> <img src={images[testL (42)]} /></div>
  ]
  let arrayOfstr = [6, 10, 14, 18, 22, 26, 30, 34, 38, 42];
  let arrOfWarning = warningList.map(function (item, index) {
    if (index != 42) {
      if (testT(arrayOfstr[index]) == 'Tred'|| testT(arrayOfstr[index]) == 'Tyellow'||
      testV(arrayOfstr[index]) == 'Vred'|| testV(arrayOfstr[index]) == 'Vyellow') {
        return item;
      }
    } else if (testL(arrayOfstr[index]) == 'Lred'|| testL(arrayOfstr[index]) == 'Lyellow') {
      return item;
    }
  }).filter(item => item != undefined);
  let arrOfNormal = warningList.map(function (item, index) {
    if (index != 42) {
      if (testT(arrayOfstr[index]) != 'Tred'&& testT(arrayOfstr[index]) != 'Tyellow'&&
      testV(arrayOfstr[index]) != 'Vred'&& testV(arrayOfstr[index]) != 'Vyellow') {
        return item;
      }
    } else if (testL(arrayOfstr[index]) != 'Lred'&& testL(arrayOfstr[index]) != 'Lyellow') {
      return item;
    }
  }).filter(item => item != undefined);


  let exhausterComponent = <div className='exhausterComponent'>
    <p>{props.nameOfAglomashine}</p>
    <p>{props.workIndicatorExhauster ? 'Статус: работает' : 'Статус: неисправен'}</p>
    <p>{props.nameOfExhauster}</p>
    <p>{props.nameOfRotor}</p>

    <p>Последняя замена ротора {props.replacementDateOfRotor} сут.</p>
    <p>Прогноз: {props.forecastReplacementDateOfRotor} сут.</p>
    <img src={exhauster} />
    <p>Предупреждение</p>
    {arrOfWarning.length > 0 && arrOfWarning}
    <p onClick={() => setIndicate(!indicate)}>Все подшипники</p>
    {indicate && arrOfNormal}



  </div>
  return <>
    {exhausterComponent}
    
  </>
  
}

export default Exhauster;
