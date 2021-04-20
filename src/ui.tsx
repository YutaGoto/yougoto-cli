import React, {FC, useState} from 'react'
import {Box, Text, useApp} from 'ink'
import Link from 'ink-link'
import SelectInput from 'ink-select-input'
import open from 'open'

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
        setInfo(
          <Box>
            <Box borderStyle="round" flexDirection="column" width={50}>
              <Text>.ごっち</Text>
              <Text>* エンジニア</Text>
              <Text>  * パイソン</Text>
              <Text>  * ジャバスクリプト</Text>
              <Text>  * ルビィ</Text>
              <Text>* 活動</Text>
              <Text>  * IM@Study</Text>
              <Text>    * アイマス好きが集まるもくもく会運営</Text>
              <Text>* 趣味</Text>
              <Text>  * 競技プログラミング(AtCoder: <Text color="#80604D">茶色</Text>)</Text>
              <Text>  * ゲーム</Text>
              <Text>    * どうぶつの森</Text>
              <Text>    * Splatoon2</Text>
            </Box>
          </Box>
        )
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
