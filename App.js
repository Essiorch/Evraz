import Diagramm from './components/Diagramm1';
import Exhauster from './components/Exhauster1';
import './App.css';

function App() {
  let obj = { nameOfAglomashine: 'Агломашина №1',
  workIndicatorExhauster: true,
  nameOfExhauster: 'Эксгаустер У-171',
  nameOfRotor: 'Ротор №1234',
  replacementDateOfRotor: 2,
  forecastReplacementDateOfRotor: 7,
  'TC 1ПC': 40,
  'Верт. мм/с 1ПC': 2,
  'Гориз. мм/с 1ПС': 2,
  'Ось мм/с  1ПС': 2,

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

  'Уровень масла, %': 60,
  'Давление масла, кг/см': 5,
  'Т воды до, C': 60,
  'Т воды после, С': 70,
  'Т масла до, С':210,
  'Т масла после, С':120,
  'Ток ротора, А':32,
  'Ток статора, А':34,
  'Напряжение ротора, кВ':32,
  'Напряжение статора, кВ':34,
}
  let exhauster = <Exhauster nameOfAglomashine={obj.nameOfAglomashine} workIndicatorExhauster={obj.workIndicatorExhauster} 
  nameOfExhauster={obj.nameOfExhauster} nameOfRotor={obj.nameOfRotor} 
  replacementDateOfRotor={obj.replacementDateOfRotor} 
  forecastReplacementDateOfRotor={obj.forecastReplacementDateOfRotor} obj={obj}/>
  let diagramm = <Diagramm />
  return exhauster
    
   
}

export default App;
