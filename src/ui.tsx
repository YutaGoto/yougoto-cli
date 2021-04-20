import React, {FC, useState} from 'react'
import {Text, useApp} from 'ink'
import Link from 'ink-link'
import SelectInput from 'ink-select-input'
import open from 'open'

import Info from './Info'

interface SelectItem {
  label: string;
  value: string;
}

const App: FC = () => {
  const [info, setInfo] = useState(<Text>.ごっちの情報が出るかもしれない</Text>)

  const {exit} = useApp()

  const items: SelectItem[] = [
    {
      label: 'info',
      value: 'info'
    },
    {
      label: 'Twitter',
      value: 'Twitter'
    },
    {
      label: 'Blog',
      value: 'Blog'
    },
    {
      label: 'GitHub',
      value: 'GitHub'
    },
    {
      label: 'さよなら',
      value: 'bye'
    }
  ]

  const handleSelect = (item: SelectItem): void => {
    switch (item.value) {
      case 'bye':
        exit()
        break
      case 'info':
        setInfo(<Info />)
        break
      case 'Twitter':
        /* eslint @typescript-eslint/no-floating-promises: 0 */
        open('https://twitter.com/gggooottto')
        setInfo(<Link url="https://twitter.com/gggooottto"><Text>Twitter: @gggooottto</Text></Link>)
        break
      case 'Blog':
        setInfo(<Link url="https://medium.com/@gggooottto"><Text>Medium @gggooottto</Text></Link>)
        break
      case 'GitHub':
        /* eslint @typescript-eslint/no-floating-promises: 0 */
        open('https://github.com/YutaGoto')
        setInfo(<Link url="https://github.com/YutaGoto"><Text>GitHub: YutaGoto</Text></Link>)
        break
      default:
        break
    }
  }

  return (
    <>
      <>{info}</>
      <SelectInput items={items} onSelect={handleSelect}></SelectInput>
    </>
  )
}

module.exports = App
export default App
