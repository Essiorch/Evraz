import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';// source and author https://github.com/recharts/recharts
import './../App.css';
import React, { useState } from 'react';

let colorsOfLine =  ["#FFFF00", "#1CE6FF", "#FF34FF", "#FF4A46", "#008941", "#006FA6", "#A30059",
"#FFDBE5", "#7A4900", "#0000A6", "#63FFAC", "#B79762", "#004D43", "#8FB0FF", "#997D87",
"#5A0007", "#809693", "#FEFFE6", "#1B4400", "#4FC601", "#3B5DFF", "#4A3B53", "#FF2F80",
"#61615A", "#BA0900", "#6B7900", "#00C2A0", "#FFAA92", "#FF90C9", "#B903AA", "#D16100",
"#DDEFFF", "#000035", "#7B4F4B", "#A1C299", "#300018", "#0AA6D8", "#013349", "#00846F",
"#372101", "#FFB500", "#C2FFED", "#A079BF", "#CC0744", "#C0B9B2", "#C2FF99", "#001E09",
"#00489C", "#6F0062", "#0CBD66", "#EEC3FF", "#456D75", "#B77B68", "#7A87A1", "#788D66",
"#885578", "#FAD09F", "#FF8A9A", "#D157A0", "#BEC459", "#456648", "#0086ED", "#886F4C"];

let data = [
  { name: '18.02 сб',
    'TC 1ПC': 4000,
    'Верт. мм/с 1ПC': 2400,
    'Гориз. мм/с 1ПС': 2400,
    'Ось мм/с  1ПС': 2100,

    'TC 2ПC': 4000,
    'Верт. мм/с 2ПC': 2400,
    'Гориз. мм/с 2ПС': 2400,
    'Ось мм/с  2ПС': 2100,

    'TC 3ПC': 4000,
    'Верт. мм/с 3ПC': 2400,
    'Гориз. мм/с 3ПС': 2400,
    'Ось мм/с  3ПС': 2100,

    'TC 4ПC': 4000,
    'Верт. мм/с 4ПC': 2400,
    'Гориз. мм/с 4ПС': 2400,
    'Ось мм/с  4ПС': 2100,

    'TC 5ПC': 4000,
    'Верт. мм/с 5ПC': 2400,
    'Гориз. мм/с 5ПС': 2400,
    'Ось мм/с  5ПС': 2100,
    
    'TC 6ПC': 4000,
    'Верт. мм/с 6ПC': 2400,
    'Гориз. мм/с 6ПС': 2400,
    'Ось мм/с  6ПС': 2100,

    'TC 7ПC': 4000,
    'Верт. мм/с 7ПC': 2400,
    'Гориз. мм/с 7ПС': 2400,
    'Ось мм/с  7ПС': 2100,

    'TC 8ПC': 4000,
    'Верт. мм/с 8ПC': 2400,
    'Гориз. мм/с 8ПС': 2400,
    'Ось мм/с  8ПС': 2100,

    'TC 9ПC': 4000,
    'Верт. мм/с 9ПC': 2400,
    'Гориз. мм/с 9ПС': 2400,
    'Ось мм/с  9ПС': 2100,

    'Уровень масла, %': 1200,
    'Давление масла, кг/см': 5,
    'Т воды до, C': 60,
    'Т воды после, С': 70,
    'Т масла до, С':210,
    'Т масла после, С':120,
    'Ток ротора, А':32,
    'Ток статора, А':34,
    'Напряжение ротора, кВ':32,
    'Напряжение статора, кВ':34,
  },
  { name: '17.02 пт',
  'TC 1ПC': 4000,
  'Верт. мм/с 1ПC ': 2400,
  'Гориз. мм/с 1ПС': 2400,
  'Ось мм/с  1ПС': 2100,

  'TC 2ПC': 4000,
  'Верт. мм/с 2ПC ': 2400,
  'Гориз. мм/с 2ПС': 2400,
  'Ось мм/с  2ПС': 2100,

  'TC 3ПC': 4000,
  'Верт. мм/с 3ПC ': 2400,
  'Гориз. мм/с 3ПС': 2400,
  'Ось мм/с  3ПС': 2100,

  'TC 4ПC': 4000,
  'Верт. мм/с 4ПC ': 2400,
  'Гориз. мм/с 4ПС': 2400,
  'Ось мм/с  4ПС': 2100,

  'TC 5ПC': 4000,
  'Верт. мм/с 5ПC ': 2400,
  'Гориз. мм/с 5ПС': 2400,
  'Ось мм/с  5ПС': 2100,
  
  'TC 6ПC': 4000,
  'Верт. мм/с 6ПC ': 2400,
  'Гориз. мм/с 6ПС': 2400,
  'Ось мм/с  6ПС': 2100,

  'TC 7ПC': 4000,
  'Верт. мм/с 7ПC ': 2400,
  'Гориз. мм/с 7ПС': 2400,
  'Ось мм/с  7ПС': 2100,

  'TC 8ПC': 4000,
  'Верт. мм/с 8ПC ': 2400,
  'Гориз. мм/с 8ПС': 2400,
  'Ось мм/с  8ПС': 2100,

  'TC 9ПC': 4000,
  'Верт. мм/с 9ПC ': 2400,
  'Гориз. мм/с 9ПС': 2400,
  'Ось мм/с  9ПС': 2100,

  'Уровень масла, %': 1200,
  'Давление масла, кг/см': 5,
  'Т воды до, C': 60,
  'Т воды после, С': 70,
  'Т масла до, С':210,
  'Т масла после, С':120,
  'Ток ротора, А':32,
  'Ток статора, А':34,
  'Напряжение ротора, кВ':32,
  'Напряжение статора, кВ':34,
  },
  { name: '16.02 чт',
  'TC 1ПC': 4000,
  'Верт. мм/с 1ПC ': 2400,
  'Гориз. мм/с 1ПС': 2400,
  'Ось мм/с  1ПС': 2100,

  'TC 2ПC': 4000,
  'Верт. мм/с 2ПC ': 2400,
  'Гориз. мм/с 2ПС': 2400,
  'Ось мм/с  2ПС': 2100,

  'TC 3ПC': 4000,
  'Верт. мм/с 3ПC ': 2400,
  'Гориз. мм/с 3ПС': 2400,
  'Ось мм/с  3ПС': 2100,

  'TC 4ПC': 4000,
  'Верт. мм/с 4ПC ': 2400,
  'Гориз. мм/с 4ПС': 2400,
  'Ось мм/с  4ПС': 2100,

  'TC 5ПC': 4000,
  'Верт. мм/с 5ПC ': 2400,
  'Гориз. мм/с 5ПС': 2400,
  'Ось мм/с  5ПС': 2100,
  
  'TC 6ПC': 4000,
  'Верт. мм/с 6ПC ': 2400,
  'Гориз. мм/с 6ПС': 2400,
  'Ось мм/с  6ПС': 2100,

  'TC 7ПC': 4000,
  'Верт. мм/с 7ПC ': 2400,
  'Гориз. мм/с 7ПС': 2400,
  'Ось мм/с  7ПС': 2100,

  'TC 8ПC': 4000,
  'Верт. мм/с 8ПC ': 2400,
  'Гориз. мм/с 8ПС': 2400,
  'Ось мм/с  8ПС': 2100,

  'TC 9ПC': 4000,
  'Верт. мм/с 9ПC ': 2400,
  'Гориз. мм/с 9ПС': 2400,
  'Ось мм/с  9ПС': 2100,

  'Уровень масла, %': 1200,
  'Давление масла, кг/см': 5,
  'Т воды до, C': 60,
  'Т воды после, С': 70,
  'Т масла до, С':210,
  'Т масла после, С':120,
  'Ток ротора, А':32,
  'Ток статора, А':34,
  'Напряжение ротора, кВ':32,
  'Напряжение статора, кВ':34,
  },
  { name: '15.02 ср',
  'TC 1ПC': 4000,
  'Верт. мм/с 1ПC ': 2400,
  'Гориз. мм/с 1ПС': 2400,
  'Ось мм/с  1ПС': 2100,

  'TC 2ПC': 4000,
  'Верт. мм/с 2ПC ': 2400,
  'Гориз. мм/с 2ПС': 2400,
  'Ось мм/с  2ПС': 2100,

  'TC 3ПC': 4000,
  'Верт. мм/с 3ПC ': 2400,
  'Гориз. мм/с 3ПС': 2400,
  'Ось мм/с  3ПС': 2100,

  'TC 4ПC': 4000,
  'Верт. мм/с 4ПC ': 2400,
  'Гориз. мм/с 4ПС': 2400,
  'Ось мм/с  4ПС': 2100,

  'TC 5ПC': 4000,
  'Верт. мм/с 5ПC ': 2400,
  'Гориз. мм/с 5ПС': 2400,
  'Ось мм/с  5ПС': 2100,
  
  'TC 6ПC': 4000,
  'Верт. мм/с 6ПC ': 2400,
  'Гориз. мм/с 6ПС': 2400,
  'Ось мм/с  6ПС': 2100,

  'TC 7ПC': 4000,
  'Верт. мм/с 7ПC ': 2400,
  'Гориз. мм/с 7ПС': 2400,
  'Ось мм/с  7ПС': 2100,

  'TC 8ПC': 4000,
  'Верт. мм/с 8ПC ': 2400,
  'Гориз. мм/с 8ПС': 2400,
  'Ось мм/с  8ПС': 2100,

  'TC 9ПC': 4000,
  'Верт. мм/с 9ПC ': 2400,
  'Гориз. мм/с 9ПС': 2400,
  'Ось мм/с  9ПС': 2100,

  'Уровень масла, %': 1200,
  'Давление масла, кг/см': 5,
  'Т воды до, C': 60,
  'Т воды после, С': 70,
  'Т масла до, С':210,
  'Т масла после, С':120,
  'Ток ротора, А':32,
  'Ток статора, А':34,
  'Напряжение ротора, кВ':32,
  'Напряжение статора, кВ':34,
  },
  { name: '14.02 вт',
  'TC 1ПC': 4000,
  'Верт. мм/с 1ПC ': 2400,
  'Гориз. мм/с 1ПС': 2400,
  'Ось мм/с  1ПС': 2100,

  'TC 2ПC': 4000,
  'Верт. мм/с 2ПC ': 2400,
  'Гориз. мм/с 2ПС': 2400,
  'Ось мм/с  2ПС': 2100,

  'TC 3ПC': 4000,
  'Верт. мм/с 3ПC ': 2400,
  'Гориз. мм/с 3ПС': 2400,
  'Ось мм/с  3ПС': 2100,

  'TC 4ПC': 4000,
  'Верт. мм/с 4ПC ': 2400,
  'Гориз. мм/с 4ПС': 2400,
  'Ось мм/с  4ПС': 2100,

  'TC 5ПC': 4000,
  'Верт. мм/с 5ПC ': 2400,
  'Гориз. мм/с 5ПС': 2400,
  'Ось мм/с  5ПС': 2100,
  
  'TC 6ПC': 4000,
  'Верт. мм/с 6ПC ': 2400,
  'Гориз. мм/с 6ПС': 2400,
  'Ось мм/с  6ПС': 2100,

  'TC 7ПC': 4000,
  'Верт. мм/с 7ПC ': 2400,
  'Гориз. мм/с 7ПС': 2400,
  'Ось мм/с  7ПС': 2100,

  'TC 8ПC': 4000,
  'Верт. мм/с 8ПC ': 2400,
  'Гориз. мм/с 8ПС': 2400,
  'Ось мм/с  8ПС': 2100,

  'TC 9ПC': 4000,
  'Верт. мм/с 9ПC ': 2400,
  'Гориз. мм/с 9ПС': 2400,
  'Ось мм/с  9ПС': 2100,

  'Уровень масла, %': 1200,
  'Давление масла, кг/см': 5,
  'Т воды до, C': 60,
  'Т воды после, С': 70,
  'Т масла до, С':210,
  'Т масла после, С':120,
  'Ток ротора, А':32,
  'Ток статора, А':34,
  'Напряжение ротора, кВ':32,
  'Напряжение статора, кВ':34,
  },
  
];

function Diagramm() {

  const [listOfCheckbox, setList] = useState([false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, 0]);

  let submittingForms;
  if (listOfCheckbox[59] == 1) {
    submittingForms = <form>
	    <input name="startDate"/><label>выберите начало периода в формате дд/мм</label><br />
	    <input name="finishtDate"/><label>выберите окончание периода в формате дд/мм</label><br />
	    <input type="submit" value={'Подтвердить'}/>
  </form>
  }
  if (listOfCheckbox[59] == 2) {
    submittingForms = <form>
	    <input name="specificDate"/><label>выберите конкретный день в формате дд/мм</label><br />
	    <input name="startHour"/><label>час начала</label><br />
      <input name="finishHour" value={''}/><label>час окончания</label><br />
	    <input type="submit" value={'Подтвердить'}/>
  </form>
  }
  if (listOfCheckbox[59] == 3) {
    submittingForms = <form>
	    <input name="specificDate"/><label>выберите конкретный день в формате дд/мм</label><br />
	    <input name="certainHour"/><label>выберите конкретный час</label><br />
      <input type="submit" value={'Подтвердить'}/>
  </form>
  }
  
  function checkboxis (event, num) {
    setList([...listOfCheckbox.slice(0, num), !listOfCheckbox[num], ...listOfCheckbox.slice(num + 1)]);
  }

  let lineOfDiagramm = <>
    <div className = 'grafiks'>
    <div className = 'parameters'>
    <p onClick={event => checkboxis (event, 0)}>Подшипники</p>
    <ul style={{display: listOfCheckbox[0] ? 'inline' : 'none'}}>
      <input type="checkbox" onClick={event => checkboxis (event, 1)} /> <label>1ПС</label>
      <ul style={{display: listOfCheckbox[1] ? 'inline' : 'none'}}>
       <li><input type="checkbox" onClick={event => checkboxis (event, 2)}/> <label>T &#8451;</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 3)}/> <label>Верт. мм/с</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 4)}/> <label>Гориз. мм/с</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 5)}/> <label>Ось мм/с</label></li>
      </ul>
    </ul>
        <ul style={{display: listOfCheckbox[0] ? 'inline' : 'none'}}>
      <input type="checkbox" onClick={event => checkboxis (event, 6)} /> <label>2ПС</label>
      <ul style={{display: listOfCheckbox[6] ? 'inline' : 'none'}}>
       <li><input type="checkbox" onClick={event => checkboxis (event, 7)}/> <label>T &#8451;</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 8)}/> <label>Верт. мм/с</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 9)}/> <label>Гориз. мм/с</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 10)}/> <label>Ось мм/с</label></li>
      </ul>
    </ul>

    <ul style={{display: listOfCheckbox[0] ? 'inline' : 'none'}}>
      <input type="checkbox" onClick={event => checkboxis (event, 21)} /> <label >5ПС</label>
      <ul style={{display: listOfCheckbox[21] ? 'inline' : 'none'}}>
       <li><input type="checkbox" onClick={event => checkboxis (event, 22)}/> <label>T &#8451;</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 23)}/> <label>Верт. мм/с</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 24)}/> <label>Гориз. мм/с</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 25)}/> <label>Ось мм/с</label></li>
      </ul>
    </ul>
    <ul style={{display: listOfCheckbox[0] ? 'inline' : 'none'}}>
      <input type="checkbox" onClick={event => checkboxis (event, 26)} /> <label >6ПС</label>
      <ul style={{display: listOfCheckbox[26] ? 'inline' : 'none'}}>
       <li><input type="checkbox" onClick={event => checkboxis (event, 27)}/> <label>T &#8451;</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 28)}/> <label>Верт. мм/с</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 29)}/> <label>Гориз. мм/с</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 30)}/> <label>Ось мм/с</label></li>
      </ul>
    </ul>
    <ul style={{display: listOfCheckbox[0] ? 'inline' : 'none'}}>
      <input type="checkbox" onClick={event => checkboxis (event, 31)} /> <label >7ПС</label>
      <ul style={{display: listOfCheckbox[31] ? 'inline' : 'none'}}>
       <li><input type="checkbox" onClick={event => checkboxis (event, 32)}/> <label>T &#8451;</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 33)}/> <label>Верт. мм/с</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 34)}/> <label>Гориз. мм/с</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 35)}/> <label>Ось мм/с</label></li>
      </ul>
    </ul>
    <ul style={{display: listOfCheckbox[0] ? 'inline' : 'none'}}>
      <input type="checkbox" onClick={event => checkboxis (event, 36)} /> <label >8ПС</label>
      <ul style={{display: listOfCheckbox[36] ? 'inline' : 'none'}}>
       <li><input type="checkbox" onClick={event => checkboxis (event, 37)}/> <label>T &#8451;</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 38)}/> <label>Верт. мм/с</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 39)}/> <label>Гориз. мм/с</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 40)}/> <label>Ось мм/с</label></li>
      </ul>
    </ul>
    <ul style={{display: listOfCheckbox[0] ? 'inline' : 'none'}}>
      <input type="checkbox" onClick={event => checkboxis (event, 41)} /> <label >9ПС</label>
      <ul style={{display: listOfCheckbox[41] ? 'inline' : 'none'}}>
       <li><input type="checkbox" onClick={event => checkboxis (event, 42)}/> <label>T &#8451;</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 43)}/> <label>Верт. мм/с</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 44)}/> <label>Гориз. мм/с</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 45)}/> <label>Ось мм/с</label></li>
      </ul>
    </ul>
    
    <p onClick={event => checkboxis (event, 59)}>Редуктор</p>
    <ul style={{display: listOfCheckbox[59] ? 'inline' : 'none'}}>
      <input type="checkbox" onClick={event => checkboxis (event, 11)} /> <label >3ПС</label>
      <ul style={{display: listOfCheckbox[11] ? 'inline' : 'none'}}>
       <li><input type="checkbox" onClick={event => checkboxis (event, 12)}/> <label>T &#8451;</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 13)}/> <label>Верт. мм/с</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 14)}/> <label>Гориз. мм/с</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 15)}/> <label>Ось мм/с</label></li>
      </ul>
    </ul>
    <ul style={{display: listOfCheckbox[59] ? 'inline' : 'none'}}>
      <input type="checkbox" onClick={event => checkboxis (event, 16)} /> <label >4ПС</label>
      <ul style={{display: listOfCheckbox[16] ? 'inline' : 'none'}}>
       <li><input type="checkbox" onClick={event => checkboxis (event, 17)}/> <label>T &#8451;</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 18)}/> <label>Верт. мм/с</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 19)}/> <label>Гориз. мм/с</label></li>
       <li><input type="checkbox" onClick={event => checkboxis (event, 20)}/> <label>Ось мм/с</label></li>
      </ul>
    </ul>



    <p onClick={event => checkboxis (event, 46)}>Маслобак</p>
    <ul style={{display: listOfCheckbox[46] ? 'inline' : 'none'}}>
    <li><input type="checkbox" onClick={event => checkboxis (event, 47)} /> <label>Уровень масла, %</label></li>
    <li><input type="checkbox" onClick={event => checkboxis (event, 48)} /> <label>Давление масла, кг/см&#178;</label></li>
    </ul>
    <p onClick={event => checkboxis (event, 49)}>Охладитель</p>
    <ul style={{display: listOfCheckbox[49] ? 'inline' : 'none'}}>
    <li><input type="checkbox" onClick={event => checkboxis (event, 50)} /> <label>Т воды до, &#8451;</label></li>
    <li><input type="checkbox" onClick={event => checkboxis (event, 51)} /> <label>Т воды после, &#8451;</label></li>
    <li><input type="checkbox" onClick={event => checkboxis (event, 52)} /> <label>Т масла до, &#8451;</label></li>
    <li><input type="checkbox" onClick={event => checkboxis (event, 53)} /> <label>Т масла после, &#8451;</label></li>
    </ul>
    <p onClick={event => checkboxis (event, 54)}>Главный привод</p>
    <ul style={{display: listOfCheckbox[54] ? 'inline' : 'none'}}>
    <li><input type="checkbox" onClick={event => checkboxis (event, 55)} /> <label>Ток ротора, А</label></li>
    <li><input type="checkbox" onClick={event => checkboxis (event, 56)} /> <label>Ток статора, А</label></li>
    <li><input type="checkbox" onClick={event => checkboxis (event, 57)} /> <label>Напряжение ротора, кВ</label></li>
    <li><input type="checkbox" onClick={event => checkboxis (event, 58)} /> <label>Напряжение статора, кВ</label></li>
    </ul>

    </div>
    <LineChart width={1100} height={250} data={data}
      margin={{ top: 30, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {listOfCheckbox[2] && <Line type="monotone" dataKey='TC 1ПC' stroke={colorsOfLine[0]} />}
      {listOfCheckbox[3] && <Line type="monotone" dataKey='Верт. мм/с 1ПC' stroke={colorsOfLine[1]} />}
      {listOfCheckbox[4] && <Line type="monotone" dataKey='Гориз. мм/с 1ПС' stroke={colorsOfLine[2]} />}
      {listOfCheckbox[5] && <Line type="monotone" dataKey='Ось мм/с  1ПС' stroke={colorsOfLine[3]} />}

      {listOfCheckbox[7] && <Line type="monotone" dataKey='TC 2ПC' stroke={colorsOfLine[4]} />}
      {listOfCheckbox[8] && <Line type="monotone" dataKey='Верт. мм/с 2ПC' stroke={colorsOfLine[5]} />}
      {listOfCheckbox[9] && <Line type="monotone" dataKey='Гориз. мм/с 2ПС' stroke={colorsOfLine[6]} />}
      {listOfCheckbox[10] && <Line type="monotone" dataKey='Ось мм/с  2ПС' stroke={colorsOfLine[7]} />}

      {listOfCheckbox[12] && <Line type="monotone" dataKey='TC 3ПC' stroke={colorsOfLine[8]} />}
      {listOfCheckbox[13] && <Line type="monotone" dataKey='Верт. мм/с 3ПC' stroke={colorsOfLine[9]} />}
      {listOfCheckbox[14] && <Line type="monotone" dataKey='Гориз. мм/с 3ПС' stroke={colorsOfLine[10]} />}
      {listOfCheckbox[15] && <Line type="monotone" dataKey='Ось мм/с  3ПС' stroke={colorsOfLine[11]} />}

      {listOfCheckbox[17] && <Line type="monotone" dataKey='TC 4ПC' stroke={colorsOfLine[12]} />}
      {listOfCheckbox[18] && <Line type="monotone" dataKey='Верт. мм/с 4ПC' stroke={colorsOfLine[13]} />}
      {listOfCheckbox[19] && <Line type="monotone" dataKey='Гориз. мм/с 4ПС' stroke={colorsOfLine[14]} />}
      {listOfCheckbox[20] && <Line type="monotone" dataKey='Ось мм/с  4ПС' stroke={colorsOfLine[15]} />}

      {listOfCheckbox[22] && <Line type="monotone" dataKey='TC 5ПC' stroke={colorsOfLine[16]} />}
      {listOfCheckbox[23] && <Line type="monotone" dataKey='Верт. мм/с 5ПC' stroke={colorsOfLine[17]} />}
      {listOfCheckbox[24] && <Line type="monotone" dataKey='Гориз. мм/с 5ПС' stroke={colorsOfLine[18]} />}
      {listOfCheckbox[25] && <Line type="monotone" dataKey='Ось мм/с  5ПС' stroke={colorsOfLine[19]} />}

      {listOfCheckbox[27] && <Line type="monotone" dataKey='TC 6ПC' stroke={colorsOfLine[20]} />}
      {listOfCheckbox[28] && <Line type="monotone" dataKey='Верт. мм/с 6ПC' stroke={colorsOfLine[21]} />}
      {listOfCheckbox[29] && <Line type="monotone" dataKey='Гориз. мм/с 6ПС' stroke={colorsOfLine[22]} />}
      {listOfCheckbox[30] && <Line type="monotone" dataKey='Ось мм/с  6ПС' stroke={colorsOfLine[23]} />}

      {listOfCheckbox[32] && <Line type="monotone" dataKey='TC 7ПC' stroke={colorsOfLine[24]} />}
      {listOfCheckbox[33] && <Line type="monotone" dataKey='Верт. мм/с 7ПC' stroke={colorsOfLine[25]} />}
      {listOfCheckbox[34] && <Line type="monotone" dataKey='Гориз. мм/с 7ПС' stroke={colorsOfLine[26]} />}
      {listOfCheckbox[35] && <Line type="monotone" dataKey='Ось мм/с  7ПС' stroke={colorsOfLine[27]} />}

      {listOfCheckbox[37] && <Line type="monotone" dataKey='TC 8ПC' stroke={colorsOfLine[28]} />}
      {listOfCheckbox[38] && <Line type="monotone" dataKey='Верт. мм/с 8ПC' stroke={colorsOfLine[29]} />}
      {listOfCheckbox[39] && <Line type="monotone" dataKey='Гориз. мм/с 8ПС' stroke={colorsOfLine[30]} />}
      {listOfCheckbox[40] && <Line type="monotone" dataKey='Ось мм/с  8ПС' stroke={colorsOfLine[31]} />}

      {listOfCheckbox[42] && <Line type="monotone" dataKey='TC 9ПC' stroke={colorsOfLine[32]} />}
      {listOfCheckbox[43] && <Line type="monotone" dataKey='Верт. мм/с 9ПC' stroke={colorsOfLine[33]} />}
      {listOfCheckbox[44] && <Line type="monotone" dataKey='Гориз. мм/с 9ПС' stroke={colorsOfLine[34]} />}
      {listOfCheckbox[45] && <Line type="monotone" dataKey='Ось мм/с  9ПС' stroke={colorsOfLine[35]} />}



      {listOfCheckbox[47] && <Line type="monotone" dataKey='Уровень масла, %' stroke={colorsOfLine[36]} />}
      {listOfCheckbox[48] && <Line type="monotone" dataKey='Давление масла, кг/см' stroke={colorsOfLine[37]} />}
      {listOfCheckbox[50] && <Line type="monotone" dataKey='Т воды до, C' stroke={colorsOfLine[38]} />}
      {listOfCheckbox[51] && <Line type="monotone" dataKey='Т воды после, С' stroke={colorsOfLine[39]} />}
      {listOfCheckbox[52] && <Line type="monotone" dataKey='Т масла до, С' stroke={colorsOfLine[40]} />}
      {listOfCheckbox[53] && <Line type="monotone" dataKey='Т масла после, С' stroke={colorsOfLine[41]} />}
      {listOfCheckbox[55] && <Line type="monotone" dataKey='Ток ротора, А' stroke={colorsOfLine[42]} />}
      {listOfCheckbox[56] && <Line type="monotone" dataKey='Ток статора, А' stroke={colorsOfLine[43]} />}
      {listOfCheckbox[57] && <Line type="monotone" dataKey='Напряжение ротора, кВ' stroke={colorsOfLine[44]} />}
      {listOfCheckbox[58] && <Line type="monotone" dataKey='Напряжение статора, кВ' stroke={colorsOfLine[45]} />}
      
    </LineChart>
    </div>
    <input type={'submit'} value={'Выбрать'} onClick ={() => setList([...listOfCheckbox.slice(0, 59), 1])} /><label>несколько дней</label><br />
    <input type={'submit'} value={'Выбрать'} onClick ={() => setList([...listOfCheckbox.slice(0, 59), 2])} /><label>несколько часов</label><br />
    <input type={'submit'} value={'Выбрать'} onClick ={() => setList([...listOfCheckbox.slice(0, 59), 3])} /><label>один час</label><br />
    <br />
    {submittingForms}
  </>
  return lineOfDiagramm;
}

export default Diagramm;
