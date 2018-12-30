import React from 'react'
import { Text, View } from 'react-native'
import { AppStyle } from '../../styles'
import { FavoriteRestoScreenProps } from './props'

@AppStyle.withThemeClass()
export class FavoriteRestoScreen extends React.Component<
  FavoriteRestoScreenProps
> {
  constructor(props: FavoriteRestoScreenProps) {
    super(props)
  }

  public render() {
    const { theme } = this.props as Required<FavoriteRestoScreenProps>
    return (
      <View>
        <Text>FavoriteRestoScreen</Text>
      </View>
    )
  }
}
