import React, {FC} from 'react'
import {Box, Text} from 'ink'

const Info: FC = () => {
  return (
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
}

export default Info
